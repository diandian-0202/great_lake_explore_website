import React, { useRef } from "react";
import "./Main.css";

function Main({ scrollPositionHeader, scrollPositionGlobal }) {
  const trailerVideoRef = useRef(null);

  const handleLearnMoreClick = () => {
    if (trailerVideoRef.current) {
      trailerVideoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main-container">
      {/* 视频部分 */}
      <div className="video-section">
        <video
          className="background-video"
          src="/videos/video2.mp4"
          autoPlay
          loop
          muted
        />
        <div className="text-overlay">
          <h1>Ecology Education Enhanced</h1>
          <h2>Discover the Great Lakes in Virtual Reality</h2>
          <p>
            Take a trip around the Great Lakes in virtual reality! Discover
            local fish, birds, and other animals, watch the seasons change, and
            experience how the water cycle affects ecosystems, all in real time.
          </p>
          <button onClick={handleLearnMoreClick}>Learn More</button>
        </div>
      </div>

      {/* <div className="animal-container">
        <img
          src="/images/bird/bird-main.png"
          alt="1"
          className="bird"
          style={{
            left: `${(1.4 * scrollPositionGlobal - 400) % 900}px`,
          }}
        />
        <img
          src="/images/bird/bird-wing-1.png"
          alt="2"
          className="bird"
          style={{
            top: `${-9 + Math.sin(scrollPositionGlobal / 50) * 10}px`,
            transform: `scaleY(${Math.sin(scrollPositionGlobal / 50)})`,
            left: `${(1.4 * scrollPositionGlobal - 400) % 900}px`,
          }}
        />
        <img
          src="/images/bird/bird-wing-2.png"
          alt="3"
          className="bird"
          style={{
            top: `${-8 - Math.sin(scrollPositionGlobal / 50) * 7}px`,
            transform: `scaleY(-${Math.sin(scrollPositionGlobal / 50)})`,
            left: `${(1.4 * scrollPositionGlobal - 400) % 900}px`,
          }}
        />
      </div> */}
      {/* 黑色背景部分 */}
      <div ref={trailerVideoRef} className="trailer-section">
        <div className="trailer-content">
          {/* 左侧文字 */}
          <div className="trailer-text">
            <h2>Immerse Yourself in Learning</h2>
            <p>
              In the Great Lakes VR experience, everywhere you explore will
              present an opportunity for learning. Students’ natural curiosity
              will keep them constantly engaged, and they’ll be learning
              everything they need to know.
            </p>
          </div>
          {/* 右侧视频 */}
          <div className="trailer-video-wrapper">
            <video
              className="trailer-video"
              src="/videos/market.mp4"
              controls
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <footer className="authorization-section">
        <div className="authorization-content">
          <h2 className="footer-title">Great Lakes VR Project</h2>
          <nav className="footer-links">
            <a href="https://www.eecs440.com/">Privacy Policy</a>
            <a href="https://www.eecs440.com/">Terms of Service</a>
            <a href="https://www.eecs440.com/">About Us</a>
            <a href="https://www.eecs440.com/">Help Center</a>
          </nav>
          <div className="team-info">
            <h3>Web Developers:</h3>
            <ul>
              <li>
                Donghua Zhang -{" "}
                <a href="mailto:donghua@umich.edu">donghua@umich.edu</a>
              </li>
              <li>
                John Oyer -{" "}
                <a href="mailto:johnoyer@umich.edu">johnoyer@umich.edu</a>
              </li>
              <li>
                Yihao Geng -{" "}
                <a href="mailto:yhgeng@umich.edu">yhgeng@umich.edu</a>
              </li>
              <li>
                Emerson Hodder -{" "}
                <a href="mailto:hodder@umich.edu">hodder@umich.edu</a>
              </li>
            </ul>
          </div>
          <p className="copyright">
            Copyright © {new Date().getFullYear()} Great Lakes VR. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Main;
