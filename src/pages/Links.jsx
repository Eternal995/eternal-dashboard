import { Link } from "react-router-dom";
import { useState } from "react";
import "./Links.css";
import LineIcon from "../components/LineIcon";

const commonSites = [
  {
    name: "Bilibili",
    description: "视频与社区",
    url: "https://www.bilibili.com/",
    iconKey: "video",
    color: "#00a1d6",
  },
  {
    name: "YouTube",
    description: "视频平台",
    url: "https://www.youtube.com/",
    iconKey: "video",
    color: "#ff0000",
  },
  {
    name: "NGA",
    description: "论坛社区",
    url: "https://nga.178.com/",
    iconKey: "community",
    color: "#2f855a",
  },
  {
    name: "Reddit",
    description: "话题社区",
    url: "https://www.reddit.com/",
    iconKey: "community",
    color: "#ff4500",
  },
  {
    name: "X",
    description: "社交动态",
    url: "https://x.com/",
    iconKey: "community",
    color: "#111827",
  },
  {
    name: "DeepSeek",
    description: "AI 对话",
    url: "https://chat.deepseek.com/",
    iconKey: "chat",
    color: "#2563eb",
  },
  {
    name: "Google Home",
    description: "家庭控制台",
    url: "https://home.google.com/u/0/",
    iconKey: "home",
    color: "#0f9d58",
  },
  {
    name: "Gmail1",
    description: "a139490227",
    url: "https://mail.google.com/mail/u/0/?tab=wm#inbox",
    iconKey: "mail",
    color: "#ea4335",
  },
  {
    name: "Gmail2",
    description: "longyongda",
    url: "https://mail.google.com/mail/u/1/#inbox",
    iconKey: "mail",
    color: "#ea4335",
  },
];

function Links() {
  const [searchEngine, setSearchEngine] = useState("google");
  const [searchQuery, setSearchQuery] = useState("");

  const getEngineName = (engine) => {
    const map = {
      google: "Google",
      baidu: "百度",
      bing: "Bing",
      yandex: "Yandex",
    };
    return map[engine];
  };

  const getSearchUrl = (engine, query) => {
    const encoded = encodeURIComponent(query);
    const urls = {
      google: `https://www.google.com/search?q=${encoded}`,
      baidu: `https://www.baidu.com/s?wd=${encoded}`,
      bing: `https://www.bing.com/search?q=${encoded}`,
      yandex: `https://yandex.com/search/?text=${encoded}`,
    };
    return urls[engine];
  };

  const getPlaceholder = () => {
    const name = getEngineName(searchEngine);
    return `在 ${name} 中搜索...`;
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      return;
    }

    const url = getSearchUrl(searchEngine, searchQuery);
    window.open(url, "_blank");
    setSearchQuery("");
  };

  const handleOpenImageSearch = () => {
    window.open("https://images.google.com/", "_blank");
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

      {/* 搜索栏 - 带搜索框 */}
      <div className="search-section">
        <h2 className="search-title">🔍 搜索引擎</h2>

        {/* 搜索引擎切换按钮 */}
        <div className="engine-selector">
          <button
            className={`engine-btn ${searchEngine === "google" ? "active" : ""}`}
            onClick={() => setSearchEngine("google")}
            style={{
              background: searchEngine === "google" ? "#4285F4" : "#f1f3f4",
            }}
          >
            Google
          </button>
          <button
            className={`engine-btn ${searchEngine === "baidu" ? "active" : ""}`}
            onClick={() => setSearchEngine("baidu")}
            style={{
              background: searchEngine === "baidu" ? "#4E6EF2" : "#f1f3f4",
            }}
          >
            百度
          </button>
          <button
            className={`engine-btn ${searchEngine === "bing" ? "active" : ""}`}
            onClick={() => setSearchEngine("bing")}
            style={{
              background: searchEngine === "bing" ? "#008373" : "#f1f3f4",
            }}
          >
            Bing
          </button>
          <button
            className={`engine-btn ${searchEngine === "yandex" ? "active" : ""}`}
            onClick={() => setSearchEngine("yandex")}
            style={{
              background: searchEngine === "yandex" ? "#FF3333" : "#f1f3f4",
            }}
          >
            Yandex
          </button>
        </div>

        {/* 搜索框 */}
        <div className="search-box-container">
          <input
            type="text"
            className="search-input"
            placeholder={getPlaceholder()}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button className="search-button" onClick={handleSearch}>
            搜索
          </button>
        </div>

        <div className="image-search-form">
          <div className="image-actions">
            <button
              className="image-submit"
              type="button"
              onClick={handleOpenImageSearch}
            >
              打开 Google 搜图
            </button>
            <span className="image-note">在页面内自行上传图片</span>
          </div>
        </div>
      </div>

      <section className="services-section">
        <h2 className="section-title">🌐 常用网站</h2>
        <div className="services-grid">
          {commonSites.map((service, index) => (
            <a
              key={index}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              className="service-card"
              style={{ borderTopColor: service.color }}
            >
              <div
                className="service-icon"
                style={{
                  backgroundColor: `${service.color}20`,
                  color: service.color,
                }}
              >
                <LineIcon name={service.iconKey} className="line-icon" />
              </div>
              <div className="service-info">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <span className="service-link">
                  {service.url.replace("https://", "")}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 eternal995.com · 自部署 · 自用</p>
      </footer>
    </div>
  );
}

export default Links;
