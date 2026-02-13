import { Link } from "react-router-dom";
import "./Links.css";
import LineIcon from "../components/LineIcon";

const onlineTools = [
  {
    name: "F1 TV",
    description: "在线赛事内容",
    url: "https://f1tv.formula1.com/",
    iconKey: "tv",
    color: "#e11d48",
  },
];

const downloadTools = [
  {
    name: "TSDM",
    description: "论坛与资源",
    url: "https://www.tsdm39.com/forum.php",
    iconKey: "download",
    color: "#2563eb",
  },
];

const otherTools = [
  {
    name: "文件站",
    description: "个人NAS文件服务",
    url: "https://files.eternal995.com",
    iconKey: "folder",
    color: "#4299e1",
  },
];

function Tools() {
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

      <main className="page-content">
        <section className="services-section">
          <h2 className="section-title">🌐 在线</h2>
          <div className="services-grid">
            {onlineTools.map((service, index) => (
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

        <section className="services-section">
          <h2 className="section-title">⬇️ 下载</h2>
          <div className="services-grid">
            {downloadTools.map((service, index) => (
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

        <section className="services-section">
          <h2 className="section-title">🧰 其他</h2>
          <div className="services-grid">
            {otherTools.map((service, index) => (
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
      </main>

      <footer className="footer">
        <p>© 2026 eternal995.com · 自部署 · 自用</p>
      </footer>
    </div>
  );
}

export default Tools;
