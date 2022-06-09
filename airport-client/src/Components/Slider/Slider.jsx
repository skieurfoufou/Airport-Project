import React, { useEffect, useState } from "react";
import "./Slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";

const mySlides = [
  "https://images.unsplash.com/photo-1596395819057-e37f55a8516b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWlycG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1250&q=150",
  "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWlycG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFpcnBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1566566220367-af8d77269124?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1553619948-505cc1cdc320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFpcnBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlycG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });
  const [autoNextCount, setAutoNextCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (autoNextCount >= dataSlider.length) {
        clearInterval(intervalId);
        return;
      }

      nextSlide();
      setAutoNextCount(autoNextCount + 1);
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  });

  const nextSlide = () => {
    console.log("NEXT");
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inProgress: false });
      }, 400);
    } else if (slideAnim.index === dataSlider.length) {
      setSlideAnim({ index: 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false });
      }, 400);
    }
  };

  const prevSlide = () => {
    console.log("PREV");
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
      }, 500);
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: 6, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: 6, inProgress: false });
      }, 500);
    }
  };

  const moveDot = (index) => {
    setSlideAnim({ index: index, inProgress: false });
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/airport${index + 1}.jpg`}
              alt=""
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="container-dots">
        {Array.from({ length: 6 }).map((item, index) => {
          return (
            <div
              key={index}
              className={slideAnim.index === index + 1 ? "dot active" : "dot"}
              onClick={() => moveDot(index + 1)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
