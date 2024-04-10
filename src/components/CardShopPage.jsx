import React from "react";
import "../styles/ShopPageStyle.css";

const CardShopPage = ({itemName, imgSrc, link}) => {

    const sendToSiteHandler = () => {
        window.open(link, "_blank");
    }

  return (
    <div className="card">
      <div className="card-content">
        <h2>{itemName}</h2>
        <img src={imgSrc} alt="Fashion Style Poster" />
      </div>
      <button className="btn" onClick={sendToSiteHandler}>Enter Site</button>
    </div>
  );
};

export default CardShopPage;