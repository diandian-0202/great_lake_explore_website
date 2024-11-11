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
          <div className="content-box">
            <h2>About Our VR Fishing Experience</h2>
            <div className="video-placeholder">{/* 这里可以嵌入视频 */}</div>
            <p>
              Immerse yourself in the tranquility of nature with our
              cutting-edge VR fishing experience. Whether you're a seasoned
              angler or a complete beginner, our VR platform offers a realistic
              and serene fishing environment for everyone.
            </p>
          </div>
        );

      case "features":
        return <p></p>;
      case "cost":
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
        <h1>Great Lake Fishing</h1>
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
            className={`nav-button ${content === "cost" ? "active" : ""}`}
            onClick={() => setContent("cost")}
          >
            Cost/Finance
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
