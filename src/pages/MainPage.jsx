import React from "react";
import CardMainPage from "../components/CardMainPage";
import "../styles/MainPageStyle.css";
import Star from "../images/star.png"
import One from "../images/two.png"
import Two from "../images/three.png"
import Three from "../images/one.png"

const MainPage = () => {
  return (
    <>
      <header className="main-header">
        <h1 className="title satisfy-regular">
          <img className="logo" src={Star} alt="Fashion Style Poster" />
          My Closet
          <img className="logo" src={Star} alt="Fashion Style Poster" />
        </h1>
      </header>
      <div id="card-container">
        <CardMainPage itemName="Cottage Core" imgSrc={One} link="Cottage Core"/>
        <CardMainPage itemName="Y2K" imgSrc={Two} link="Y2K"/>
        <CardMainPage itemName="Academia" imgSrc={Three} link="Academia"/>
      </div>
    </>
  );
};

export default MainPage;
