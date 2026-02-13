import { Link } from "react-router-dom";
import "./Links.css";
import LineIcon from "../components/LineIcon";

const keyboardConfigTools = [
  {
    name: "Monkeytype",
    description: "打字测试",
    url: "https://monkeytype.com/",
    iconKey: "sparkle",
    color: "#0ea5e9",
  },
  {
    name: "Vial",
    description: "键盘配置",
    url: "https://vial.rocks/",
    iconKey: "globe",
    color: "#6366f1",
  },
  {
    name: "VIA",
    description: "键盘配置",
    url: "https://usevia.app/#/",
    iconKey: "globe",
    color: "#22c55e",
  },
  {
    name: "QwertyKeys",
    description: "配置工具",
    url: "https://cfg.qwertykeys.com/#/",
    iconKey: "globe",
    color: "#f97316",
  },
  {
    name: "Matrix Lab",
    description: "配置工具",
    url: "https://config.matrix-lab.com/",
    iconKey: "globe",
    color: "#0f766e",
  },
  {
    name: "XPanel",
    description: "Finalmouse",
    url: "https://xpanel.finalmouse.com/desktop",
    iconKey: "globe",
    color: "#111827",
  },
  {
    name: "Venom",
    description: "键盘社区",
    url: "https://venom.how/",
    iconKey: "community",
    color: "#ec4899",
  },
  {
    name: "Wootility",
    description: "键盘工具",
    url: "https://wootility.io/",
    iconKey: "globe",
    color: "#06b6d4",
  },
];

const keyboardCommunityTools = [
  {
    name: "Alexotos",
    description: "键盘厂商",
    url: "https://www.alexotos.com/keyboard-vendor-list/",
    iconKey: "globe",
    color: "#8b5cf6",
  },
  {
    name: "Superbuy",
    description: "代购",
    url: "https://www.superbuy.com/cn",
    iconKey: "globe",
    color: "#ef4444",
  },
  {
    name: "ZFrontier",
    description: "键圈",
    url: "https://www.zfrontier.com/app/circle/1#9999",
    iconKey: "community",
    color: "#14b8a6",
  },
  {
    name: "键圈表格",
    description: "资料清单",
    url: "https://docs.google.com/spreadsheets/d/185irtVlavKB7a21TwWsaU6iZVvfeVqY3XrIn87obPpQ/edit?gid=447368276#gid=447368276",
    iconKey: "globe",
    color: "#22c55e",
  },
  {
    name: "Geekhack",
    description: "键盘论坛",
    url: "https://geekhack.org/index.php?board=132.0",
    iconKey: "community",
    color: "#f59e0b",
  },
];

function Keyboard() {
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
          <h2 className="section-title">⌨️ 配置</h2>
          <div className="services-grid">
            {keyboardConfigTools.map((service, index) => (
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
          <h2 className="section-title">💬 社区</h2>
          <div className="services-grid">
            {keyboardCommunityTools.map((service, index) => (
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

export default Keyboard;
