import React from 'react';
import Title from './Title';

function Main({ scrollPositionHeader, scrollPositionGlobal }) {
  return (
    <div className="center-div" style={{
      alignItems: 'normal'
    }}>
    <div className="center-div">
      <Title scrollPositionHeader={scrollPositionHeader} text="Ecology Education Enhanced"/>
    </div>
      <div style={{
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        width: '100%',
      }}>
        <div style={{
          position: 'relative', // Set container to relative positioning
          width: '50%', // Ensure the container takes up 50% width
        }}>
          {/* <img src="/images/vr-headset.png" className="normal-image" 
            style={{
              position: 'absolute', // Absolute positioning for overlay
              top: '0%', // Set the top position
              left: '10%', // Set the left position
              width: '60%', // Optional: make image fill the container's width
              height: 'auto', // Maintain aspect ratio
            }}
          />
          <img src="/images/Great-Lakes.png" className="normal-image"
            style={{
              position: 'absolute', // Absolute positioning for overlay
              top: '55%', // Offset image by 50px from the top
              left: '40%', // Offset image by 20px from the left
              width: '60%', // Optional: make second image smaller or adjust as needed
              height: 'auto', // Maintain aspect ratio
            }}
          /> */}
          <img src="/images/vr-headset.png" className="normal-image" 
            style={{
              position: 'absolute', // Absolute positioning for overlay
              // width: '60%', // Optional: make image fill the container's width
              // height: 'auto', // Maintain aspect ratio
            }}
          />
          {/* <img src="/images/Great-Lakes.png" className="normal-image"
            style={{
              position: 'absolute', // Absolute positioning for overlay
              top: '58%', // Offset image by 50px from the top
              left: '18%', // Offset image by 20px from the left
              width: '25%', // Optional: make second image smaller or adjust as needed
              height: 'auto', // Maintain aspect ratio
            }}
          />
          <img src="/images/Great-Lakes.png" className="normal-image"
            style={{
              position: 'absolute', // Absolute positioning for overlay
              top: '58%', // Offset image by 50px from the top
              left: '53%', // Offset image by 20px from the left
              width: '25%', // Optional: make second image smaller or adjust as needed
              height: 'auto', // Maintain aspect ratio
            }} double great lakes
          /> */}
        </div>
        <div className="content-box" style={{
          width: '50%'
        }}>
          <h2>Discover the Great Lakes in Virtual Reality</h2>
          <p>
            Take a trip around the Great Lakes in virtual reality! 
            Discover local fish, birds and other animals, watch the 
            seasons change, and experience how the water cycle 
            affects ecosystems, all in real time. 
          </p>
        </div>
      </div>
      <div className="animal-container">
        <img src="/images/bird/bird-main.png" alt="1" className="bird" style={{
          left: `${(1.4*scrollPositionGlobal-400)%900}px`,
        }}/>
        <img src="/images/bird/bird-wing-1.png" alt="2" className="bird" style={{
          top: `${-9+Math.sin(scrollPositionGlobal/50)*10}px`,
          transform: `scaleY(${Math.sin(scrollPositionGlobal/50)})`,
          left: `${(1.4*scrollPositionGlobal-400)%900}px`,
        }}/>
        <img src="/images/bird/bird-wing-2.png" alt="3" className="bird" style={{
          top: `${-8-Math.sin(scrollPositionGlobal/50)*7}px`,
          transform: `scaleY(-${Math.sin(scrollPositionGlobal/50)})`,
          left: `${(1.4*scrollPositionGlobal-400)%900}px`,              
        }}/>
      </div>
      <div style={{
        display: 'flex',
        width: '100%',
      }}>
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
      <div className="animal-container">
        <img src="/images/fish.png" alt="1" className="bird" style={{
          transform: `scaleX(-1) 
                      skew(${Math.sin(scrollPositionGlobal/50)*15}deg, ${Math.sin(scrollPositionGlobal/50)*10}deg) 
                      rotate(${Math.cos(scrollPositionGlobal/50)*20}deg) `,
          top: `${-10+Math.sin(scrollPositionGlobal/50)*30}px`,
          right: `${20+((1.4*scrollPositionGlobal-330)%900 + 900) % 900}px`,
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
  )
}

export default Main;