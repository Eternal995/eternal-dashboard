import * as simpleIcons from "simple-icons";
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const targets = [
  { exportName: "siBilibili", file: "bilibili.svg" },
  { exportName: "siYoutube", file: "youtube.svg" },
  { exportName: "siReddit", file: "reddit.svg" },
  { exportName: "siX", file: "x.svg" },
  { exportName: "siDeepseek", file: "deepseek.svg" },
  { exportName: "siGooglehome", file: "google-home.svg" },
  { exportName: "siNga", file: "nga.svg" },
];

const outDir = resolve("src/assets/icons");
const missing = [];

for (const { exportName, file } of targets) {
  const icon = simpleIcons[exportName];
  if (!icon) {
    missing.push(exportName);
    continue;
  }

  const svg = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#${icon.hex}">` +
    `<path d="${icon.path}"/></svg>\n`;

  await writeFile(resolve(outDir, file), svg, "utf8");
}

if (missing.length) {
  console.log(`Missing icons: ${missing.join(", ")}`);
}
