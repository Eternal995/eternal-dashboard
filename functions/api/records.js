const jsonResponse = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });

const requireAuth = (request, env) => {
  const token = env.RECORDS_TOKEN;
  if (!token) {
    return null;
  }

  const authHeader = request.headers.get("Authorization") || "";
  const [scheme, value] = authHeader.split(" ");
  if (scheme !== "Bearer" || value !== token) {
    return jsonResponse({ error: "unauthorized" }, 401);
  }

  return null;
};

const groupRecords = (rows) => {
  const map = new Map();
  for (const row of rows) {
    if (!map.has(row.id)) {
      map.set(row.id, {
        id: row.id,
        content: row.content || "",
        createdAt: row.created_at,
        images: [],
      });
    }
    if (row.url) {
      map.get(row.id).images.push(row.url);
    }
  }
  return Array.from(map.values());
};

const getKeyFromUrl = (url, publicBase) => {
  if (publicBase && url.startsWith(publicBase)) {
    const trimmed = url.slice(publicBase.length);
    return trimmed.startsWith("/") ? trimmed.slice(1) : trimmed;
  }

  if (url.startsWith("http")) {
    try {
      return new URL(url).pathname.replace(/^\//, "");
    } catch (err) {
      return url;
    }
  }

  return url;
};

export async function onRequest({ request, env }) {
  const authError = requireAuth(request, env);
  if (authError) {
    return authError;
  }

  if (request.method === "GET") {
    const result = await env.RECORDS_DB.prepare(
      "SELECT r.id, r.content, r.created_at, i.url FROM records r LEFT JOIN record_images i ON r.id = i.record_id ORDER BY r.created_at DESC",
    ).all();

    return jsonResponse({ records: groupRecords(result.results || []) });
  }

  if (request.method === "POST") {
    const formData = await request.formData();
    const content = (formData.get("content") || "").toString().trim();
    const images = formData
      .getAll("images")
      .filter((file) => file && file.size);

    if (!content && images.length === 0) {
      return jsonResponse({ error: "empty" }, 400);
    }

    const createdAt = new Date().toISOString();
    const insert = await env.RECORDS_DB.prepare(
      "INSERT INTO records (content, created_at) VALUES (?1, ?2)",
    )
      .bind(content, createdAt)
      .run();

    const recordId = insert.meta.last_row_id;
    const publicBase = env.R2_PUBLIC_BASE_URL || "";

    for (const file of images) {
      const buffer = await file.arrayBuffer();
      const key = `records/${recordId}-${crypto.randomUUID()}-${file.name}`;
      await env.RECORDS_BUCKET.put(key, buffer, {
        httpMetadata: {
          contentType: file.type || "application/octet-stream",
        },
      });

      const url = publicBase ? `${publicBase}/${key}` : key;
      await env.RECORDS_DB.prepare(
        "INSERT INTO record_images (record_id, url) VALUES (?1, ?2)",
      )
        .bind(recordId, url)
        .run();
    }

    return jsonResponse({ ok: true });
  }

  if (request.method === "DELETE") {
    const url = new URL(request.url);
    const id = Number(url.searchParams.get("id"));
    if (!Number.isInteger(id) || id <= 0) {
      return jsonResponse({ error: "invalid_id" }, 400);
    }

    const publicBase = env.R2_PUBLIC_BASE_URL || "";
    const imagesResult = await env.RECORDS_DB.prepare(
      "SELECT url FROM record_images WHERE record_id = ?1",
    )
      .bind(id)
      .all();

    for (const row of imagesResult.results || []) {
      const key = getKeyFromUrl(row.url, publicBase);
      if (key) {
        await env.RECORDS_BUCKET.delete(key);
      }
    }

    await env.RECORDS_DB.prepare(
      "DELETE FROM record_images WHERE record_id = ?1",
    )
      .bind(id)
      .run();
    await env.RECORDS_DB.prepare("DELETE FROM records WHERE id = ?1")
      .bind(id)
      .run();

    return jsonResponse({ ok: true });
  }

  return jsonResponse({ error: "method" }, 405);
}
