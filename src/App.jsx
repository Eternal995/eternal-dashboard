import { BrowserRouter, Routes, Route } from "react-router-dom";
import Links from "./pages/Links";
import Games from "./pages/Games";
import About from "./pages/About";
import Tools from "./pages/Tools";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
