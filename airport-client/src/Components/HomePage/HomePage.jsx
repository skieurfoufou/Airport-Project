import React from "react";
import "./HomePage.css";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="homePage-div-title">
        <h1>Welcome To My Airport Project!!</h1>
      </div>
      <div className="homePage-div-container">
        <Slider />
        <div className="homePage-div-image">
          {/* <img
          src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFpcnBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        ></img> */}
          {/* <img
          src="https://images.unsplash.com/photo-1596395819057-e37f55a8516b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWlycG9ydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1250&q=150"
          alt=""
        ></img> */}

          {/* <img
          src="https://images.unsplash.com/photo-1580285198593-af9f402c676a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFpcnBvcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
        ></img> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
