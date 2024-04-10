import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainPageStyle.css";

const CardMainPage = ({itemName, imgSrc, link}) => {

  return (
    <div className="card">
      <div className="card-content">
        <h2>{itemName}</h2>
        <img src={imgSrc} alt="Fashion Style Poster" />
      </div>
      <Link to="/shop" state={{type: link}}><button className="btn">Enter {link}</button></Link>
    </div>
  );
};

export default CardMainPage;
