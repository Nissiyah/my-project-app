import React, { useEffect, useState } from "react";

function Container() {
  const [slideNo, setSlide] = useState(0);

  // const [currentImage, setCurrentImage] = useState(slideImages[0]);

  useEffect(
    function () {
      const slideImages = [
        "/images/desktop-image-hero-1.jpg",
        "/images/desktop-image-hero-2.jpg",
        "/images/desktop-image-hero-3.jpg",
      ];
      // setCurrentImage(slideImages[slideNo]);
      let changeDiv = document.getElementById("changeable");
      changeDiv.style.backgroundImage = "url(" + slideImages[slideNo] + ")";
    },
    [slideNo]
  );
  function leftArrowClick() {
    if (slideNo === 0) {
    } else {
      setSlide(slideNo - 1);
    }
  }

  function rightArrowClick() {
    if (slideNo === 2) {
    } else {
      setSlide(slideNo + 1);
    }
  }

  return (
    <div className="first-div">
      <div className="group">
        <div
          className="third-div"
          id="changeable"
          // style={{ backgroundImage: "url(" + currentImage + ")" }}
        >
          <div className="list">
            <li className="flist">room</li>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </div>
        </div>
        <div className="fourth-div">
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
              <img
                onClick={leftArrowClick}
                className="left"
                src="../images/left.png"
                alt="left-arrow"
              />
            </span>
            <span className="rightspan">
              <img
                onClick={rightArrowClick}
                className="right"
                src="../images/next.png"
                alt="right-arrow"
              />
            </span>
          </div>
        </div>
      </div>
      <div className="groups">
        <div className="fifth-div"></div>
        <div className="sixth-div">
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
        <div className="seventh-div"></div>
      </div>
    </div>
  );
}

export default Container;
