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
  const [isDropActive, setIsDropActive] = useState(false);
  const [activeRecord, setActiveRecord] = useState(null);

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

  const appendFiles = (fileList) => {
    if (!fileList || fileList.length === 0) {
      return;
    }
    const incoming = Array.from(fileList).filter((file) =>
      file.type.startsWith("image/"),
    );
    if (incoming.length === 0) {
      return;
    }
    setFiles((prev) => [...prev, ...incoming]);
  };

  const removeFile = (indexToRemove) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
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

  const openRecord = (record) => {
    setActiveRecord(record);
  };

  const closeRecord = () => {
    setActiveRecord(null);
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
          <Link to="/keyboard" className="nav-link">
            键盘
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
            <label
              className={`record-drop ${isDropActive ? "drag-over" : ""}`}
              onDragOver={(event) => {
                event.preventDefault();
                setIsDropActive(true);
              }}
              onDragLeave={() => setIsDropActive(false)}
              onDrop={(event) => {
                event.preventDefault();
                setIsDropActive(false);
                appendFiles(event.dataTransfer.files);
              }}
            >
              <span>拖拽图片到这里，或点击选择</span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(event) => appendFiles(event.target.files)}
              />
            </label>
            <div className="record-actions">
              <button className="record-submit" type="submit" disabled={saving}>
                {saving ? "保存中..." : "保存记录"}
              </button>
            </div>
            {files.length > 0 && (
              <div className="record-selected">
                <p className="record-hint">已选择 {files.length} 张图片</p>
                <div className="record-preview-grid">
                  {files.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="record-preview"
                    >
                      <img src={URL.createObjectURL(file)} alt={file.name} />
                      <button
                        type="button"
                        className="record-preview-remove"
                        onClick={() => removeFile(index)}
                        aria-label="移除图片"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              </div>
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
                <article
                  key={item.id}
                  className="record-card"
                  onClick={() => openRecord(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openRecord(item);
                    }
                  }}
                >
                  <header className="record-meta">
                    <span>
                      {new Date(item.createdAt).toLocaleString("zh-CN", {
                        hour12: false,
                      })}
                    </span>
                    <button
                      type="button"
                      className="record-delete"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleDelete(item.id);
                      }}
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

      {activeRecord && (
        <div
          className="record-modal"
          onClick={closeRecord}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="record-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="record-modal-header">
              <span>
                {new Date(activeRecord.createdAt).toLocaleString("zh-CN", {
                  hour12: false,
                })}
              </span>
              <button
                type="button"
                className="record-modal-close"
                onClick={closeRecord}
                aria-label="关闭"
              >
                X
              </button>
            </header>
            {activeRecord.content && (
              <p className="record-modal-text">{activeRecord.content}</p>
            )}
            {activeRecord.images && activeRecord.images.length > 0 && (
              <div className="record-modal-images">
                {activeRecord.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={activeRecord.content || "记录图片"}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="footer">
        <p>© 2026 eternal995.com · 自部署 · 自用</p>
      </footer>
    </div>
  );
}

export default Records;
