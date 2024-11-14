// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Title from './components/Title';
import Credits from './components/Credits';
import Team from './components/Team';
import Blogs from './components/Blogs';
import Educators from './components/Educators';
import Main from './components/Main';

function App() {
  const [content, setContent] = useState("about"); // Default content
  const [scrollPositionHeader, setscrollPositionHeader] = useState(0);
  const [scrollPositionGlobal, setscrollPositionGlobal] = useState(0);
  
  const scrollThreshold = 20;
  const leftMargin = 230;

  const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const hundredPosition = (scrollTop / (scrollHeight - clientHeight)) * 100;
      const adjustedPosition = Math.min(hundredPosition / scrollThreshold, 1);
      setscrollPositionHeader(adjustedPosition);
      setscrollPositionGlobal(scrollTop);
  };

  // useEffect(() => { // may need to rework this
  //   setscrollPositionHeader(0);
  //   setscrollPositionGlobal(0);
  // }, [content]);

  const renderContent = () => {
    switch (content) {
      case "about":
        return <Main scrollPositionHeader={scrollPositionHeader} scrollPositionGlobal={scrollPositionGlobal}/>
      case "features":
        return <p></p>;
      case "educators":
        return <Educators scrollPositionHeader={scrollPositionHeader}/>
      case "blogs": 
        return <Blogs scrollPositionHeader={scrollPositionHeader}/>
      case "team":
        return <Team scrollPositionHeader={scrollPositionHeader}/>
      case "credits":
        return <Credits scrollPositionHeader={scrollPositionHeader}/>
      default:
        return <p></p>
    }
  };


  return (
    <div
        className="scrollable-element"
        style={{
            height: "100vh",
            overflowY: "scroll",
        }}
        onScroll={handleScroll}
    >
      {/* <h2 style={{ position: "fixed", color: "red" }}>
          Scroll Position: {scrollPositionGlobal}px
      </h2> */}
      {/* <header> */}
        <nav>
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
            Educators
          </button>
          <button
            className={`nav-button ${content === "features" ? "active" : ""}`}
            onClick={() => setContent("features")}
          >
            Features
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
      {/* </header> */}

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
