import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Educators from "./components/Educators";
import Features from "./components/Features";
import Blogs from "./components/Blogs";
import Team from "./components/Team";
import Credits from "./components/Credits";

function App() {
  const [content, setContent] = useState("about"); // 默认显示内容为 "about"
  const [scrollPositionHeader, setscrollPositionHeader] = useState(0);
  const [scrollPositionGlobal, setscrollPositionGlobal] = useState(0);

  const scrollThreshold = 20;
  // const leftMargin = 230;

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const hundredPosition = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const adjustedPosition = Math.min(hundredPosition / scrollThreshold, 1);
    setscrollPositionHeader(adjustedPosition);
    setscrollPositionGlobal(scrollTop);
    if (scrollTop > 930 && content === "features") {
      setContent("VRvideo"); // Change to Educators when scroll position exceeds 930
    }
  };

  const renderContent = () => {
    switch (content) {
      case "about":
        return (
          <Main
            scrollPositionHeader={scrollPositionHeader}
            scrollPositionGlobal={scrollPositionGlobal}
          />
        );
      case "features":
        return <Features />;
      case "educators":
        return <Educators />;
      case "blogs":
        return <Blogs />;
      case "team":
        return <Team />;
      case "credits":
        return <Credits />;
      default:
        return <Main />;
    }
  };

  return (
    <div className="app" onScroll={handleScroll}>
      <header className="navbar">
        <div className="logo"> </div>
        <nav className="nav-links">
          <button
            className={`nav-button ${content === "about" ? "active" : ""}`}
            onClick={() => setContent("about")}
          >
            About
          </button>

          <button
            className={`nav-button ${content === "educators" ? "active" : ""}`}
            onClick={() => setContent("educators")}
          >
            Purchase
          </button>
          <button
            className={`nav-button ${content === "blogs" ? "active" : ""}`}
            onClick={() => setContent("blogs")}
          >
            Dev Blogs
          </button>
          <button
            className={`nav-button ${content === "team" ? "active" : ""}`}
            onClick={() => setContent("team")}
          >
            Team
          </button>
          <button
            className={`nav-button ${content === "credits" ? "active" : ""}`}
            onClick={() => setContent("credits")}
          >
            Credits
          </button>
        </nav>
      </header>
      {/* 内容区域 */}
      {/* <main className="main-content">{renderContent()}</main> */}
      {renderContent()}
    </div>
  );
}

export default App;
