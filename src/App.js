// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";
import Credits from './components/Credits';
import Team from './components/Team';
import Blogs from './components/Blogs';
import Educators from './components/Educators';
import Main from './components/Main';
import Features from './components/Features';
import VRvideo from './components/VRvideo';

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
      if (scrollTop > 930 && content === "features") {
        setContent("VRvideo"); // Change to Educators when scroll position exceeds 930
      }
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
        return <Features scrollPositionHeader={scrollPositionHeader} scrollPositionGlobal={scrollPositionGlobal}/>;
      case "educators":
        return <Educators scrollPositionHeader={scrollPositionHeader}/>
      case "blogs": 
        return <Blogs scrollPositionHeader={scrollPositionHeader}/>
      case "team":
        return <Team scrollPositionHeader={scrollPositionHeader}/>
      case "credits":
        return <Credits scrollPositionHeader={scrollPositionHeader}/>
      case "VRvideo":  // New case for the clean page
        return <VRvideo />;  // Render the CleanPage component
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
      <h2 style={{ position: "fixed", color: "red" }}>
          Scroll Position: {scrollPositionGlobal}px
      </h2>
      {content !== "VRvideo" && (<nav>
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
      </nav>)}

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
