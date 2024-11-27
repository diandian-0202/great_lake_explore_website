import React from "react";
import "./Main.css";

function Main({ scrollPositionHeader, scrollPositionGlobal }) {
  return (
    <div className="main-container">
      {/* 视频部分 */}
      <div className="video-section">
        <video
          className="background-video"
          src="/videos/greatlakevideo.mp4"
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
          <a href="https://www.nwf.org/Educational-Resources/Wildlife-Guide/Wild-Places/Great-Lakes">
            Learn More
          </a>
        </div>
      </div>

      <div className="animal-container">
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
      </div>

      <div className="high-tech-box">
        <h2>Immersive and Informative</h2>
        <p>
          Learning about ecosystems is challenging: there is a lot to remember,
          and keeping focused isn’t always easy. Students spend all day learning
          through lectures, worksheets and tests, and keeping their attention is
          never guaranteed.
        </p>
        <p>
          In the Great Lakes VR experience, everywhere you explore will present
          an opportunity for learning. Students’ natural curiosity will keep
          them constantly engaged, and they’ll be learning everything they need
          to know.
        </p>
      </div>

      <div className="animal-container">
        <img
          src="/images/fish.png"
          alt="1"
          className="fish"
          style={{
            transform: `scaleX(-1) 
                        skew(${Math.sin(scrollPositionGlobal / 50) * 15}deg, ${
              Math.sin(scrollPositionGlobal / 50) * 10
            }deg) 
                        rotate(${
                          Math.cos(scrollPositionGlobal / 50) * 20
                        }deg) `,
            top: `${-10 + Math.sin(scrollPositionGlobal / 50) * 30}px`,
            right: `${
              20 + ((((1.4 * scrollPositionGlobal - 330) % 900) + 900) % 900)
            }px`,
          }}
        />
      </div>
    </div>
  );
}

export default Main;
