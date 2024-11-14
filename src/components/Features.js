import React from 'react';
import Title from './Title';

function Blogs({ scrollPositionHeader, scrollPositionGlobal }) {
  return (
    <div className="center-div">
        <Title scrollPositionHeader={scrollPositionHeader} text="Features"/>
        <img src="/images/vr-headset.png" alt="Description.." className="normal-image" style={{
            width: `${50*scrollPositionGlobal/100}vw`,
        }}/>
    </div>
  )
}

export default Blogs;