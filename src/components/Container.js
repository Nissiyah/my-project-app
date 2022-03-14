import React from "react";

function Container() {
  return (
    <div class="first-div">
      <div class="group">
        <div class="third-div">
          <div className="list">
            <li className="flist">room</li>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </div>
        </div>
        <div class="fourth-div">
          <h1>Discover innovative ways to decorate</h1>
          <p className="hello">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>

          <div className="ugowork">
            <span>SHOP NOW</span>
            <img
              className="next"
              src="../images/right-arrow.png"
              alt="next-arrow"
            />
          </div>

          <div className="arrow">
            <span className="leftspan">
              <img className="left" src="../images/left.png" alt="left-arrow" />
            </span>
            <span className="rightspan">
              <img
                className="right"
                src="../images/next.png"
                alt="right-arrow"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="groups">
        <div class="fifth-div"></div>
        <div class="sixth-div">
          <h4 className="header">ABOUT OUR FUNITURE</h4>
          <p className="paragraph">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div class="seventh-div"></div>
      </div>
    </div>
  );
}

export default Container;
