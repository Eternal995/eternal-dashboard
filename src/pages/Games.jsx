import { Link } from "react-router-dom";
import "./Links.css";
import LineIcon from "../components/LineIcon";

const generalGames = [
  {
    name: "Nexus Mods",
    description: "模组资源",
    url: "https://www.nexusmods.com/",
    iconKey: "globe",
    color: "#2563eb",
  },
  {
    name: "Fearless",
    description: "修改器社区",
    url: "https://fearlessrevolution.com/",
    iconKey: "community",
    color: "#f97316",
  },
  {
    name: "LoversLab",
    description: "模组社区",
    url: "https://www.loverslab.com/",
    iconKey: "community",
    color: "#ec4899",
  },
  {
    name: "Fling Trainer",
    description: "修改器存档",
    url: "https://archive.flingtrainer.com/",
    iconKey: "download",
    color: "#22c55e",
  },
  {
    name: "GameBanana",
    description: "模组平台",
    url: "https://gamebanana.com/",
    iconKey: "globe",
    color: "#0f766e",
  },
  {
    name: "Huihui168",
    description: "游戏资源",
    url: "https://huihui168.org/",
    iconKey: "download",
    color: "#8b5cf6",
  },
  {
    name: "ResetEra",
    description: "游戏论坛",
    url: "https://www.resetera.com/",
    iconKey: "community",
    color: "#64748b",
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
  {
    name: "米游社Wiki",
    description: "原神百科",
    url: "https://wiki.biligame.com/ys/%E9%A6%96%E9%A1%B5",
    iconKey: "globe",
    color: "#0ea5e9",
  },
  {
    name: "影月月",
    description: "B站创作者",
    url: "https://space.bilibili.com/431073645",
    iconKey: "video",
    color: "#06b6d4",
  },
  {
    name: "原神互动地图",
    description: "官方地图",
    url: "https://act.mihoyo.com/ys/app/interactive-map/index.html?lang=zh-cn#/map/2?shown_types=223&center=3467.07,-10261.94&zoom=0.50",
    iconKey: "compass",
    color: "#0ea5e9",
  },
  {
    name: "Wonders of the World",
    description: "成就查询",
    url: "https://cocogoat.work/achievement/wonders-of-the-world",
    iconKey: "sparkle",
    color: "#f59e0b",
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
  {
    name: "油甘",
    description: "B站创作者",
    url: "https://space.bilibili.com/403072772",
    iconKey: "video",
    color: "#0ea5e9",
  },
  {
    name: "金铃子",
    description: "B站创作者",
    url: "https://space.bilibili.com/487275027",
    iconKey: "video",
    color: "#38bdf8",
  },
  {
    name: "Wuwa Tracker",
    description: "鸣潮追踪",
    url: "https://wuwatracker.com/zh-CN",
    iconKey: "wave",
    color: "#22c55e",
  },
  {
    name: "ScoreEcho",
    description: "评分工具",
    url: "https://scoreecho.loping151.site/",
    iconKey: "sparkle",
    color: "#f97316",
  },
  {
    name: "鸣潮地图",
    description: "Kuro 地图",
    url: "https://www.kurobbs.com/mc/map/",
    iconKey: "compass",
    color: "#0ea5e9",
  },
  {
    name: "鸣潮文档",
    description: "资料表",
    url: "https://www.kdocs.cn/l/chWXEqFmFGvu",
    iconKey: "download",
    color: "#10b981",
  },
  {
    name: "Encore",
    description: "通用资料站",
    url: "https://encore.moe/?lang=zh-Hans",
    iconKey: "compass",
    color: "#0ea5e9",
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
  {
    name: "Dige",
    description: "数据站",
    url: "https://dige.aunly.cn/?lang=zh",
    iconKey: "globe",
    color: "#0ea5e9",
  },
  {
    name: "QQ 文档",
    description: "表格资料",
    url: "https://docs.qq.com/sheet/DUEh1aHpCVVd4ZUdh?tab=k982n0",
    iconKey: "download",
    color: "#10b981",
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
