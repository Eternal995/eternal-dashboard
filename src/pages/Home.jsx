import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>✨ eternal995.com</h1>
        <p className="subtitle">Eternal 的数字角落</p>
        <div className="divider"></div>
        <p className="description">
          这里是你的个人空间，收集了自己搭建的各种服务。
        </p>
        <Link to="/links" className="enter-button">
          进入导航站 →
        </Link>
      </div>
    </div>
  );
}

export default Home;
