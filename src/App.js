// import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";

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

  useEffect(() => { // may need to rework this
    setscrollPositionHeader(0);
    setscrollPositionGlobal(0);
  }, [content]);

  const renderContent = () => {
    switch (content) {
      case "about":
        return (
          <div className="center-div">
            <div 
              style={{
                position: "fixed",
                borderRadius: `${(1-scrollPositionHeader)*80}px`,
                // width: `${900+scrollPositionHeader*(1030-900)}px`,
                width: `calc(${83+scrollPositionHeader*(98-83)}% - ${leftMargin}px)`,
                height: `${200-scrollPositionHeader*50}px`,
                boxShadow: `0px 4px 8px rgba(0, 0, 0, ${scrollPositionHeader*0.2})`,
                transform: `translateY(${-scrollPositionHeader*100}px)`,
                background: `radial-gradient(circle, rgba(22, 88, 126, ${scrollPositionHeader}) 87%, rgba(255, 255, 255, ${scrollPositionHeader*0}) 95%)`,
              }}
            >
              <h1 
                style={{
                  marginTop: `${55+scrollPositionHeader*25}px`,
                  fontSize: `${3.8-scrollPositionHeader*(3.8-2)}rem`,
                  textShadow: `0px ${1+2*(1-scrollPositionHeader)}px ${1+2*(1-scrollPositionHeader)}px #000`,
                }}
              >
                Ecology Education Enhanced
              </h1>
            </div>
            <div style={{
                height: "260px",
            }}></div>
            <div className="content-box">
              <h2>Discover the Great Lakes in Virtual Reality</h2>
              <div style={{ 
                display: 'grid', 
                margin: '0 auto',
                gridTemplateColumns: 'repeat(2, .5fr)', 
                gap: '20px',
                width: '65%',
              }}>
                <img src="/images/vr-headset.png" alt="Description.." className="normal-image"/>
                <img src="/images/Great-Lakes.png" alt="Description.." className="normal-image"
                  style={{ 
                    paddingTop: '50px',
                  }}
                />
              </div>
              <p>
                Take a trip around the Great Lakes in virtual reality! 
                Discover local fish, birds and other animals, watch the 
                seasons change, and experience how the water cycle 
                affects ecosystems, all in real time. 
              </p>
            </div>
            <div className="animal-container">
              <img src="/images/bird/bird-main.png" alt="1" className="bird" style={{
                left: `${(1.4*scrollPositionGlobal-400)%900}px`,
              }}/>
              <img src="/images/bird/bird-wing-1.png" alt="2" className="bird" style={{
                transform: `scaleY(${scrollPositionGlobal/900})`,
                left: `${(1.4*scrollPositionGlobal-400)%900}px`,
              }}/>
              <img src="/images/bird/bird-wing-2.png" alt="3" className="bird" style={{
                top: `-5px`,
                transform: `scaleY(${scrollPositionGlobal/900})`,
                left: `${(1.4*scrollPositionGlobal-400)%900}px`,              
              }}/>
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
            <div className="animal-container">
              <img src="/images/fish.png" alt="1" className="bird" style={{
                // transform: `scaleX(-1) skew(-${Math.sin(scrollPositionGlobal/50)*30}deg, ${Math.sin(scrollPositionGlobal/50)*30}0deg)`,
                transform: `scaleX(-1) 
                            skew(${Math.sin(scrollPositionGlobal/50)*15}deg, ${Math.sin(scrollPositionGlobal/50)*10}deg) 
                            rotate(${Math.cos(scrollPositionGlobal/50)*20}deg) `,
                top: `${-10+Math.sin(scrollPositionGlobal/50)*30}px`,
                right: `${((1.4*scrollPositionGlobal-330)%900 + 900) % 900}px`,
              }}/>
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
        return (
          <div class="educator-grid">
          <div class="content-box">Panel 1</div>
          <div class="content-box">Panel 2</div>
          <div class="content-box">Panel 3</div>
        </div>
        );
      case "blogs":
        return (
          <div>
            <div className="content-box">
              <h2 className="dev-blog-header">Dev Blog 11/6 - 11/13: First Week</h2>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/hhkCj4we0bE?si=6PIzMmrsmL1iW4kX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <p className="dev-blog-text">
                In our first week, our goals were to define a clear objective for the 
                project, and to make significant progress on the fishing element of the 
                game so that users would have a clear idea of how the game would look 
                and feel.
              </p>
              <p className="dev-blog-text">
                We developed the plan to make the game education-focused and for 
                the user to progress in the game by unlocking different animals 
                and discovering their place in the food chain. We also planned for 
                more passive learning to occur through the changing of the seasons 
                and through experiencing the water cycle.
              </p>
              <p className="dev-blog-text">
                During the week, we designed the outline the of the landscape, added fishing 
                mechanics to the world, and created a boat that the user can ride.
              </p>
            </div>
          </div>
        );
      case "team":
        return (
          <div class="profile-grid">
            <div class="profile-card">
              <img src="/images/JohnOyter.jpg" alt="John Oyer" className="profile-image" style={{
                objectPosition: "50% 15%", /* custom shift, particular to image */
              }}/>
              <div class="profile-info">
                <h3>John Oyer</h3>
                <p>Developer</p>
              </div>
            </div>

            <div class="profile-card">
              <img src="/images/emerson-hodder.jpg" alt="Emerson Hodder" className="profile-image"/>
              <div class="profile-info">
                <h3>Emerson Hodder</h3>
                <p>Developer</p>
              </div>
            </div>

            <div class="profile-card">
              <img src="/images/donghua-zhang.jpg" alt="DongHua Zhang" className="profile-image" style={{
                objectPosition: "50% 30%", /* custom shift, particular to image */
              }}/>
              <div class="profile-info">
                <h3>DongHua Zhang</h3>
                <p>Developer</p>
              </div>
            </div>

            <div class="profile-card">
              <img src="/images/JohnOyter.jpg" alt="YiHao Geng" className="profile-image"/>
              <div class="profile-info">
                <h3>YiHao Geng</h3>
                <p>Developer</p>
              </div>
            </div>
          </div>
        )
      case "credits":
        return (
          <div>
            <div className="content-box" 
            // style={{
            //   backgroundColor: "rgba(0,0,0,0)" 
            // }}>
            >
              <h2>Credits</h2>
              <ul>
                <li>        
                  Headset Icon: <a href="https://www.flaticon.com/free-icons/headset" title="headset icons">Headset icons created by Kharisma - Flaticon</a>
                </li>
                <li>        
                Great Lakes Image: https://aroundmichigan.com/wp-content/uploads/2023/02/Great-Lakes.png
                </li>
                <li>        
                Background Image: <a href="https://pixnio.com/media/water-texture-surface-wave-fluid">Photo</a> by <a href="https://pixnio.com/author/23ohanzee23">Drazen Nesic</a> on <a href="https://pixnio.com/">Pixnio</a>
                </li>
                <li>        
                  Fish Icon: <a href="https://www.flaticon.com/free-icons/fish" title="fish icons">Fish icons created by PLANBSTUDIO - Flaticon</a>
                </li>
                <li>        
                  Headset Icon: <a href="https://www.flaticon.com/free-icons/headset" title="headset icons">Headset icons created by Kharisma - Flaticon</a>
                </li>
              </ul>
            </div>;
          </div>
        )
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
      <header>
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
      </header>

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
