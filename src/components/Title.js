import React from 'react';

function Title({ scrollPositionHeader, text }) {
  return (
    <>
      <div
        style={{
          top: `0px`,
          zIndex: "10",
          position: "sticky",
          borderRadius: `${(1 - scrollPositionHeader) * 80}px`,
          width: `${80 + scrollPositionHeader * (100 - 80)}%`,
          boxShadow: `0px 4px 8px rgba(0, 0, 0, ${scrollPositionHeader * 0.2})`,
          // transform: `translateY(${-scrollPositionHeader * 100}px)`,
          background: `radial-gradient(circle, rgba(22, 88, 126, ${scrollPositionHeader}) 87%, rgba(255, 255, 255, 0) 95%)`,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(1,1,1,1)"
          }}>
        </div>
        <h1
          style={{
            marginTop: `${220 * (1-scrollPositionHeader)+10}px`,
            fontSize: `${3.8 - scrollPositionHeader * (3.8 - 2)}rem`,
            textShadow: `0px ${1 + 2 * (1 - scrollPositionHeader)}px ${1 + 2 * (1 - scrollPositionHeader)}px #000`,
          }}
        >
          {text}
        </h1>
      </div>
      <div style={{
        height: "200px",
      }}>
      </div>
    </>
  );
}

export default Title;
