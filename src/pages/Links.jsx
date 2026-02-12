import { Link } from "react-router-dom";
import "./Links.css";

// 你的服务数据 - 以后加新的直接在这里添加
const services = [
  {
    name: "文件站",
    description: "个人NAS文件服务",
    url: "https://files.eternal995.com",
    icon: "📁",
    color: "#4299e1",
  },
  {
    name: "鸣潮登录",
    description: "游戏数据查询助手",
    url: "https://login.eternal995.com",
    icon: "🔑",
    color: "#48bb78",
  },
  {
    name: "NapCat",
    description: "QQ机器人服务",
    url: "https://napcat.eternal995.com",
    icon: "🤖",
    color: "#ed8936",
  },
  {
    name: "图床",
    description: "图片托管服务",
    url: "https://img.eternal995.com",
    icon: "🖼️",
    color: "#9f7aea",
  },
  {
    name: "短链",
    description: "链接缩短服务",
    url: "https://go.eternal995.com",
    icon: "🔗",
    color: "#f56565",
  },
  {
    name: "博客",
    description: "技术笔记",
    url: "https://blog.eternal995.com",
    icon: "📝",
    color: "#38b2ac",
  },
];

function Links() {
  return (
    <div className="links-page">
      <nav className="nav">
        <Link to="/" className="back-home">
          ← 返回主页
        </Link>
        <h1 className="nav-title">服务导航</h1>
        <div className="nav-placeholder"></div>
      </nav>

      <div className="services-grid">
        {services.map((service, index) => (
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
              style={{ backgroundColor: `${service.color}20` }}
            >
              <span style={{ color: service.color }}>{service.icon}</span>
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

      <footer className="footer">
        <p>© 2026 eternal995.com · 自部署 · 自用</p>
      </footer>
    </div>
  );
}

export default Links;
