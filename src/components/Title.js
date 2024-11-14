import React from 'react';

function Title({ scrollPositionHeader, text }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          borderRadius: `${(1 - scrollPositionHeader) * 80}px`,
          width: `calc(${83 + scrollPositionHeader * (98 - 83)}% - 230px)`,
          height: `${200 - scrollPositionHeader * 50}px`,
          boxShadow: `0px 4px 8px rgba(0, 0, 0, ${scrollPositionHeader * 0.2})`,
          transform: `translateY(${-scrollPositionHeader * 100}px)`,
          background: `radial-gradient(circle, rgba(22, 88, 126, ${scrollPositionHeader}) 87%, rgba(255, 255, 255, 0) 95%)`,
        }}
      >
        <h1
          style={{
            marginTop: `${55 + scrollPositionHeader * 25}px`,
            fontSize: `${3.8 - scrollPositionHeader * (3.8 - 2)}rem`,
            textShadow: `0px ${1 + 2 * (1 - scrollPositionHeader)}px ${1 + 2 * (1 - scrollPositionHeader)}px #000`,
          }}
        >
          {text}
        </h1>
      </div>
      <div style={{
        height: "260px",
      }}>
      </div>
    </>
  );
}

export default Title;
