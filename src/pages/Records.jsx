import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Links.css";

function Records() {
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const loadRecords = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/records");
      if (!response.ok) {
        throw new Error("加载失败");
      }
      const data = await response.json();
      setRecords(data.records || []);
    } catch (err) {
      setError("记录加载失败，请稍后再试。");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecords();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!content.trim() && files.length === 0) {
      setError("请填写内容或选择图片。");
      return;
    }

    try {
      setSaving(true);
      setError("");
      const formData = new FormData();
      formData.append("content", content.trim());
      files.forEach((file) => formData.append("images", file));

      const response = await fetch("/api/records", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("保存失败");
      }

      setContent("");
      setFiles([]);
      await loadRecords();
    } catch (err) {
      setError("保存失败，请稍后再试。");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("确定要删除这条记录吗？")) {
      return;
    }

    try {
      setError("");
      const response = await fetch(`/api/records?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("删除失败");
      }

      await loadRecords();
    } catch (err) {
      setError("删除失败，请稍后再试。");
    }
  };

  return (
    <div className="links-page">
      <nav className="nav">
        <Link to="/" className="nav-brand">
          Eternal
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            主页
          </Link>
          <Link to="/tools" className="nav-link">
            工具
          </Link>
          <Link to="/games" className="nav-link">
            游戏
          </Link>
          <Link to="/records" className="nav-link">
            记录
          </Link>
          <Link to="/about" className="nav-link">
            关于
          </Link>
        </div>
        <div className="nav-spacer"></div>
      </nav>

      <main className="page-content page-content-wide">
        <section className="records-section">
          <h2 className="section-title">📝 记录</h2>
          <form className="record-form" onSubmit={handleSubmit}>
            <textarea
              className="record-textarea"
              placeholder="写点什么..."
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
            <div className="record-actions">
              <label className="record-upload">
                上传图片
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) =>
                    setFiles(Array.from(event.target.files || []))
                  }
                />
              </label>
              <button className="record-submit" type="submit" disabled={saving}>
                {saving ? "保存中..." : "保存记录"}
              </button>
            </div>
            {files.length > 0 && (
              <p className="record-hint">已选择 {files.length} 张图片</p>
            )}
            {error && <p className="record-error">{error}</p>}
          </form>

          <div className="record-list">
            {loading ? (
              <p className="record-hint">加载中...</p>
            ) : records.length === 0 ? (
              <p className="record-hint">还没有记录</p>
            ) : (
              records.map((item) => (
                <article key={item.id} className="record-card">
                  <header className="record-meta">
                    <span>
                      {new Date(item.createdAt).toLocaleString("zh-CN", {
                        hour12: false,
                      })}
                    </span>
                    <button
                      type="button"
                      className="record-delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      删除
                    </button>
                  </header>
                  {item.content && (
                    <p className="record-content">{item.content}</p>
                  )}
                  {item.images && item.images.length > 0 && (
                    <div className="record-images">
                      {item.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={item.content || "记录图片"}
                        />
                      ))}
                    </div>
                  )}
                </article>
              ))
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 eternal995.com · 自部署 · 自用</p>
      </footer>
    </div>
  );
}

export default Records;
