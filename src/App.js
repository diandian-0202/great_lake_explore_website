import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("about"); // Default content

  // Function to render content based on selected tag
  const renderContent = () => {
    switch (content) {
      case "about":
        return (
          <div>
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
    <div className="App">
      <header className="App-header">
        <div class="header-background-panel">
          <h1>Enhanced Ecology Education</h1>
        </div>
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

      <main className="main-content">{renderContent()}</main>
    </div>
  );
}

export default App;
