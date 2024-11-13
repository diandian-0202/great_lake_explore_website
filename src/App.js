// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("about"); // Default content
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const scrollThreshold = 20;

  const handleScroll = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      const position = (scrollTop / (scrollHeight - clientHeight)) * 100;
      const adjustedPosition = Math.min(position / scrollThreshold, 1);
      setScrollPosition(adjustedPosition);
  };

  const renderContent = () => {
    switch (content) {
      case "about":
        return (
          <div className="center-div">
            <div 
              style={{
                position: "fixed",
                backgroundColor: `rgba(22, 84, 126, ${0.714+scrollPosition*(0.981-0.714)})`,
                borderRadius: `${18-scrollPosition*18}px`,
                width: `${900+scrollPosition*(1025-900)}px`,
                height: `${200-scrollPosition*50}px`,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                transform: `translateY(${-scrollPosition*100}px)`,
              }}
            >
              <h1 
                style={{
                  marginTop: `${55+scrollPosition*25}px`,
                  fontSize: `${3.8-scrollPosition*(3.8-2)}rem`,
                }}
              >
                Ecology Education Enhanced
              </h1>
            </div>
            <div style={{
                height: "200px",
            }}></div>
            <div className="content-box">
              <h2>Discover the Great Lakes in Virtual Reality</h2>
              <div className="video-placeholder">{/* 这里可以嵌入视频 */}</div>
              <p>
                Take a trip around the Great Lakes in virtual reality! 
                Discover local fish, birds and other animals, watch the 
                seasons change, and experience how the water cycle 
                affects ecosystems, all in real time. 
              </p>
            </div>
            <div className="content-box">
              <h2>Immersive and Informative</h2>
              <div className="video-placeholder">{/* 这里可以嵌入视频 */}</div>
              <p>
                Learning about ecosystems is challenging: there is a lot to 
                remember, and keeping focused isn’t always easy. Students 
                spend all day learning through lectures, worksheets and tests, 
                and keeping their attention is never guaranteed.
              </p>
              <p>
                In the Great Lakes VR experience, everywhere you explore will 
                present an opportunity for learning. Students’ natural curiosity 
                will keep them constantly engaged, and they’ll be learning 
                everything they need to know.
              </p>
            </div>
          </div>
        );

      case "features":
        return <p></p>;
      case "educators":
        return <p></p>;
      case "blogs":
        return (
          <div>
            <div className="content-box2"></div>
            <div className="content-box2"></div>
            <div className="content-box2"></div>
          </div>
        );
      case "teams":
        return <p></p>;
      case "credits":
        return <p></p>;
      default:
        return <p>Welcome to Great Lake Fishing!</p>;
    }
  };

  return (
    <div
        className="scrollable-element"
        style={{
            height: "100vh",
            overflowY: "scroll",
            border: "1px solid #ccc",
        }}
        onScroll={handleScroll}
    >
      {/* <h2 style={{ position: "fixed", color: "red" }}>
          Scroll Position: {scrollPosition}px
      </h2> */}
      <header>
        <nav>
          <button
            className={`nav-button ${content === "about" ? "active" : ""}`}
            onClick={() => setContent("about")}
          >
            About
          </button>
          <button
            className={`nav-button ${content === "features" ? "active" : ""}`}
            onClick={() => setContent("features")}
          >
            Features
          </button>
          <button
            className={`nav-button ${content === "educators" ? "active" : ""}`}
            onClick={() => setContent("educators")}
          >
            Educators
          </button>
          <button
            className={`nav-button ${content === "blogs" ? "active" : ""}`}
            onClick={() => setContent("blogs")}
          >
            Dev Blogs
          </button>
          <button
            className={`nav-button ${content === "teams" ? "active" : ""}`}
            onClick={() => setContent("teams")}
          >
            Teams
          </button>
          <button
            className={`nav-button ${content === "credits" ? "active" : ""}`}
            onClick={() => setContent("credits")}
          >
            Credits
          </button>
        </nav>
      </header>

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
