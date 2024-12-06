import React from "react";
import Title from "./Title";
import "./Blogs.css"; //fix fix fix
function Educators({ scrollPositionHeader }) {
  return (
    <div className="center-div">
      {/* <Title scrollPositionHeader={scrollPositionHeader} text="For Educators" /> */}
      <h1 className="centered-title">Purchase</h1>
      <div class="educator-grid">
        <div class="high-tech-box">
          <h2>Trial</h2>
          <p>
            Everything you need to test out Great Lakes Explore. $75 for 1
            month.
          </p>
          <ul class="educator-list">
            <li>Software</li>
            <li>1 VR Headset</li>
            <li>Sample Lesson Plan</li>
          </ul>
        </div>
        <div class="high-tech-box">
          <h2>Annual</h2>
          <p>A recurring plan suitable for any classroom. $700 annually.</p>
          <ul class="educator-list">
            <li>Software</li>
            <li>4 VR Headsets</li>
            <li>Complete Lesson Plan</li>
            <li>Quiz Questions</li>
          </ul>
        </div>
        <div class="high-tech-box">
          <h2>Custom</h2>
          <p>
            Customize your experience by choosing what you need. Contact us for
            more information.
          </p>
          <ul class="educator-list">
            <li>Software</li>
            <li>VR Headsets</li>
            <li>Lesson Plans</li>
            <li>Quiz Questions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Educators;
