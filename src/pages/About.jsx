import { Link } from "react-router-dom";
import "./Links.css";

function About() {
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
        <div className="page-hero">
          <h2>🧾 关于</h2>
          <p>
            这里是 Eternal 的个人站点，主要用来集中管理常用链接、工具与笔记。
            目前内容以自用为主，后续会逐步补充更完整的介绍、更新记录与联系方式。
          </p>
          <p>
            你可以把这里当作一个轻量的数字仪表盘：需要什么、常用什么，就收纳在这里。
          </p>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 eternal995.com · 自部署 · 自用</p>
      </footer>
    </div>
  );
}

export default About;
