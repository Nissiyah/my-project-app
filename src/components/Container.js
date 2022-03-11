import React from "react";

function Container() {
  return (
    <div class="first-div">
      <div class="group">
        <div class="third-div"></div>
        <div class="fourth-div">
          <h1>Discover innovative ways to decorate</h1>
          <p className="hello">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <p className="helloo">
            SHOP NOW <img className="next" src="../images/right-arrow.png" />
          </p>
          <div className="arrow">
            <span>
              <img
                className="right"
                src="../images/left.png"
                alt="left-arrow"
              />
            </span>
            <span>
              <img
                className="left"
                src="../images/next.png"
                alt="right-arrow"
              />
            </span>
          </div>
        </div>
      </div>
      <div class="groups">
        <div class="fifth-div"></div>
        <div class="sixth-div"></div>
        <div class="seventh-div"></div>
      </div>
    </div>
  );
}

export default Container;
