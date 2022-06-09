import React, { useState } from "react";
import "./BackgroundSlider.css";

const mySlides = [
  "https://images.unsplash.com/photo-1596395819057-e37f55a8516b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWlycG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1250&q=150",
  "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1566566220367-af8d77269124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1553619948-505cc1cdc320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFpcnBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

function BackgroundSlider() {
  const [slides, setSlides] = useState(mySlides);
  //   const body = document.body;
  //   const slides = document.querySelectorAll(".slide");
  //   const leftBtn = document.getElementById("left");
  //   const rightBtn = document.getElementById("right");

  //   let activeSlide = 0;

  //   rightBtn.addEventListener("click", () => {
  //     activeSlide++;

  //     if (activeSlide > slides.length - 1) {
  //       activeSlide = 0;
  //     }

  //     setBgToBody();
  //     setActiveSlide();
  //   });

  //   leftBtn.addEventListener("click", () => {
  //     activeSlide--;

  //     if (activeSlide < 0) {
  //       activeSlide = slides.length - 1;
  //     }

  //     setBgToBody();
  //     setActiveSlide();
  //   });

  //   setBgToBody();

  //   function setBgToBody() {
  //     body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  //   }

  //   function setActiveSlide() {
  //     slides.forEach((slide) => slide.classList.remove("active"));

  //     slides[activeSlide].classList.add("active");
  //   }

  return (
    <div className="slider-container">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={"slide" + idx === 0 ? " active" : ""}
          style={{
            backgroundImage: `url(${slide})`,
          }}
        ></div>
      ))}

      <button className="arrow left-arrow" id="left">
        <i className="fas fa-arrow-left"></i>
      </button>

      <button className="arrow right-arrow" id="right">
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default BackgroundSlider;
