import React from 'react';
import Title from './Title';

function Blogs({ scrollPositionHeader, scrollPositionGlobal }) {
  return (
    <div className="center-div" style={{
            // overflow: 'hidden'
            // maxWidth: '100vw'
        }}>
        <Title scrollPositionHeader={scrollPositionHeader} text="Features"/>
        <img src="/images/vr-headset.png" alt="Description.." className="normal-image" style={{
            width: `${scrollPositionGlobal/20+20}vw`,
            position: "sticky",
            top: `${23-scrollPositionGlobal/15}vh`,
            paddingRight: `${scrollPositionGlobal/70}vw`,
            // right: `${23-scrollPositionGlobal/15}vw`,
            zIndex: '20'
        }}/>
        <div style={{ height: '1000px' }}></div>
    </div>
  )
}

export default Blogs;