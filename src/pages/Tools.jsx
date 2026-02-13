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
  {
    name: "斗鱼",
    description: "直播",
    url: "https://www.douyu.com/directory/all",
    iconKey: "tv",
    color: "#f97316",
  },
  {
    name: "虎牙",
    description: "直播",
    url: "https://www.huya.com/l",
    iconKey: "tv",
    color: "#f59e0b",
  },
  {
    name: "Twitch",
    description: "直播",
    url: "https://www.twitch.tv/directory",
    iconKey: "tv",
    color: "#8b5cf6",
  },
  {
    name: "欧乐影视",
    description: "影视站",
    url: "https://www.olevod.com/",
    iconKey: "video",
    color: "#0ea5e9",
  },
];

const downloadTools = [
  {
    name: "TSDM",
    description: "天使动漫",
    url: "https://www.tsdm39.com/forum.php",
    iconKey: "download",
    color: "#2563eb",
  },
  {
    name: "Gamer520",
    description: "游戏下载",
    url: "https://sway.cloud.microsoft/1zyVegf0n3cHdR8o",
    iconKey: "download",
    color: "#0ea5e9",
  },
  {
    name: "Nyaa",
    description: "动画下载",
    url: "https://nyaa.si/",
    iconKey: "download",
    color: "#10b981",
  },
  {
    name: "漫画",
    description: "漫画下载 Kindle",
    url: "https://kzo.moe/",
    iconKey: "download",
    color: "#f43f5e",
  },
  {
    name: "South Plus",
    description: "南plus",
    url: "https://www.south-plus.net/index.php",
    iconKey: "download",
    color: "#f59e0b",
  },
  {
    name: "动漫花园",
    description: "资源下载",
    url: "https://dmhy.anoneko.com/",
    iconKey: "download",
    color: "#6366f1",
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
  {
    name: "iLovePDF",
    description: "PDF 工具",
    url: "https://www.ilovepdf.com/split_pdf",
    iconKey: "download",
    color: "#ef4444",
  },
  {
    name: "OpenRouter",
    description: "模型聚合",
    url: "https://openrouter.ai/",
    iconKey: "globe",
    color: "#0ea5e9",
  },
  {
    name: "AM5主板",
    description: "在线表格",
    url: "https://docs.google.com/spreadsheets/d/1NQHkDEcgDPm34Mns3C93K6SJoBnua-x9O-y_6hv8sPs/edit?gid=1502922237#gid=1502922237",
    iconKey: "globe",
    color: "#22c55e",
  },
  {
    name: "路由器",
    description: "本地管理",
    url: "http://192.168.0.1/webpages/index.html#/login",
    iconKey: "globe",
    color: "#64748b",
  },
  {
    name: "SteamDB",
    description: "游戏数据",
    url: "https://steamdb.info/",
    iconKey: "globe",
    color: "#1f2937",
  },
  {
    name: "Toronto Tax",
    description: "税务查询",
    url: "https://www.toronto.ca/services-payments/property-taxes-utilities/property-tax/property-tax-lookup/",
    iconKey: "globe",
    color: "#f59e0b",
  },
  {
    name: "Massgrave",
    description: "脚本工具",
    url: "https://massgrave.dev/",
    iconKey: "download",
    color: "#111827",
  },
  {
    name: "DiskPrices",
    description: "硬盘比价",
    url: "https://diskprices.com/?locale=ca&condition=new&disk_types=external_hdd,external_hdd25,internal_hdd,internal_hdd25,internal_sshd,internal_sas,external_ssd,internal_ssd,m2_ssd,m2_nvme,u2",
    iconKey: "globe",
    color: "#0f766e",
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
