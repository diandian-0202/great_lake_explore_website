import React from "react";
import Title from "./Title";
import "./Blogs.css";
function Blogs({ scrollPositionHeader }) {
  return (
    <div className="center-div">
      {/* <Title
        scrollPositionHeader={scrollPositionHeader}
        text="Development Blogs"
      /> */}
      <h1 className="centered-title">Development Blogs</h1>
      <div>
        <div className="content-box">
          <h2 className="dev-blog-header">Dev Blog 11/6 - 11/13: First Week</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hhkCj4we0bE?si=6PIzMmrsmL1iW4kX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className="dev-blog-text">
            In our first week, our goals were to define a clear objective for
            the project, and to make significant progress on the fishing element
            of the game so that users would have a clear idea of how the game
            would look and feel.
          </p>
          <p className="dev-blog-text">
            We developed the plan to make the game education-focused and for the
            user to progress in the game by unlocking different animals and
            discovering their place in the food chain. We also planned for more
            passive learning to occur through the changing of the seasons and
            through experiencing the water cycle.
          </p>
          <p className="dev-blog-text">
            During the week, we designed the outline of the landscape, added
            fishing mechanics to the world, and created a boat that the user can
            ride.
          </p>
        </div>
      </div>
      <div>
        <div className="content-box">
          <h2 className="dev-blog-header">
            Dev Blog 11/13 - 11/20: Second Week
          </h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aEiM-KU-J4Y?si=QqeKYHGtFm_wGFsk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <p className="dev-blog-text">
            In our second week, we aimed to develop our experience to the point
            where the user would have a stronger sense of the environment of the
            game and the purpose of the game.
          </p>
          <p className="dev-blog-text">
            We selected the specific animals that we would like to represent in
            the game as well as made the board representing the food chain with
            all the connections between the the animals. We also added rain to
            our world, and enhanced the landscape through modeling and the
            addition of trees. The user also has the ability to teleport between
            lakes, and information appears when the user catches a fish.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
