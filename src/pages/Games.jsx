import { Link } from "react-router-dom";
import "./Links.css";
import LineIcon from "../components/LineIcon";

const generalGames = [
  {
    name: "Hakush",
    description: "通用资料站",
    url: "https://hakush.in/",
    iconKey: "compass",
    color: "#0ea5e9",
  },
];

const genshinGames = [
  {
    name: "Seelie",
    description: "原神规划工具",
    url: "https://seelie.me/",
    iconKey: "sparkle",
    color: "#6366f1",
  },
];

const wutheringWaves = [
  {
    name: "Susudesu",
    description: "鸣潮工具站",
    url: "https://mc.susudesu.com/",
    iconKey: "wave",
    color: "#14b8a6",
  },
];

const endfieldGames = [
  {
    name: "Warfarin Wiki",
    description: "终末地资料",
    url: "https://warfarin.wiki/cn",
    iconKey: "flask",
    color: "#f97316",
  },
];

function Games() {
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
          <h2 className="section-title">🗺️ 通用</h2>
          <div className="services-grid">
            {generalGames.map((service, index) => (
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
          <h2 className="section-title">✨ 原神</h2>
          <div className="services-grid">
            {genshinGames.map((service, index) => (
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
          <h2 className="section-title">🌊 鸣潮</h2>
          <div className="services-grid">
            {wutheringWaves.map((service, index) => (
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
          <h2 className="section-title">🧪 终末地</h2>
          <div className="services-grid">
            {endfieldGames.map((service, index) => (
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

export default Games;
