import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/ShopPageStyle.css";
import Star from "../images/star.png";
import CardShopPage from "../components/CardShopPage";
import { data } from "../data";
//select element has onchange that filters card by y2k, academia, etc

const fuse = new Fuse(data[0], { keys: ["v"] });

const ShopPage = () => {
  let state = useLocation().state.type;
  const [type, setType] = useState(state);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [cardContainer, setCardContainer] = useState([]);

  const names = data[0];
  const images = data[1];
  const links = data[2];
  const categories = data[3];

  useEffect(() => {
    const selectElement = document.getElementById("category-select");
    selectElement.value = state;
    let cardContainerTemp = [];
    if (type == "Y2K") {
      for (let i = 0; i < 8; i++) {
        cardContainerTemp.push(
          <CardShopPage
            itemName={names[i]}
            imgSrc={images[i]}
            link={links[i]}
          />
        );
      }
    } else if (type == "Cottage Core") {
      for (let i = 8; i < 17; i++) {
        cardContainerTemp.push(
          <CardShopPage
            itemName={names[i]}
            imgSrc={images[i]}
            link={links[i]}
          />
        );
      }
    } else if (type == "Academia") {
      for (let i = 17; i < 25; i++) {
        cardContainerTemp.push(
          <CardShopPage
            itemName={names[i]}
            imgSrc={images[i]}
            link={links[i]}
          />
        );
      }
    } else {
      for (let i = 0; i < names.length; i++) {
        cardContainerTemp.push(
          <CardShopPage
            itemName={names[i]}
            imgSrc={images[i]}
            link={links[i]}
          />
        );
      }
    }
    setCardContainer(cardContainerTemp);
  }, []);

  const typeChangeHandler = (event) => {
    setType(event.target.value);
    setSearch("");
    const selectElement = document.getElementById("category-select");
    selectElement.value = event.target.value;
    let cardContainerTemp = [];
    if (event.target.value == "Y2K") {
      for (let i = 0; i < 8; i++) {
        cardContainerTemp.push(
          <CardShopPage
            itemName={names[i]}
            imgSrc={images[i]}
            link={links[i]}
          />
        );
      }
    } else if (event.target.value == "Cottage Core") {
      for (let i = 8; i < 17; i++) {
        cardContainerTemp.push(
          <CardShopPage
            itemName={names[i]}
            imgSrc={images[i]}
            link={links[i]}
          />
        );
      }
    } else if (event.target.value == "Academia") {
      for (let i = 17; i < 25; i++) {
        cardContainerTemp.push(
          <CardShopPage
            itemName={names[i]}
            imgSrc={images[i]}
            link={links[i]}
          />
        );
      }
    } else {
      for (let i = 0; i < names.length; i++) {
        cardContainerTemp.push(
          <CardShopPage
            itemName={names[i]}
            imgSrc={images[i]}
            link={links[i]}
          />
        );
      }
    }
    setCardContainer(cardContainerTemp);
  };

  const searchChangeHandler = (event) => {
    setType("all");
    document.getElementById('category-select').getElementsByTagName('option')[0].selected = 'selected';
    document.getElementById('filter-select').getElementsByTagName('option')[0].selected = 'selected';
    setSearch(event.target.value);
    const results = fuse.search(event.target.value);
    console.log(results);
    let cardContainerTemp = [];
    for (let i = 0; i < results.length; i++) {
      const num = results[i].refIndex;
      cardContainerTemp.push(
        <CardShopPage
          itemName={names[num]}
          imgSrc={images[num]}
          link={links[num]}
        />
      );
    }
    if (event.target.value == "") {
      for (let i = 0; i < names.length; i++) {
        cardContainerTemp.push(
          <CardShopPage
            itemName={names[i]}
            imgSrc={images[i]}
            link={links[i]}
          />
        );
      }
    }
    setCardContainer(cardContainerTemp);
  };

  const filterChangeHandler = (event) => {
    setSearch("");
    setType("all");
    document.getElementById('category-select').getElementsByTagName('option')[0].selected = 'selected';
    setFilter(event.target.value);
    let cardContainerTemp = [];
    if (event.target.value == "no-filter") {
      for (let i = 0; i < names.length; i++) {
        cardContainerTemp.push(
          <CardShopPage
            itemName={names[i]}
            imgSrc={images[i]}
            link={links[i]}
          />
        );
      }
    } else {
      for (let i = 0; i < names.length; i++) {
        if (categories[i] == event.target.value) {
          cardContainerTemp.push(
            <CardShopPage
              itemName={names[i]}
              imgSrc={images[i]}
              link={links[i]}
            />
          );
        }
      }
    }
    setCardContainer(cardContainerTemp);
  };

  return (
    <>
      <header className="main-header">
        <Link to="/"><h1 className="title satisfy-regular">
          <img className="logo" src={Star} alt="Fashion Style Poster" />
          My Closet
          <img className="logo" src={Star} alt="Fashion Style Poster" />
        </h1></Link>
      </header>
      <div id="category-filter">
        <select id="filter-select" onChange={filterChangeHandler}>
          <option value="no-filter">Filter</option>
          <option value="Top">Top</option>
          <option value="Bottom">Bottom</option>
          <option value="Shoes">Shoes</option>
          <option value="Accessory">Accessory</option>
        </select>
        <select id="category-select" onChange={typeChangeHandler}>
          <option value="all">All</option>
          <option value="Y2K">Y2K</option>
          <option value="Cottage Core">Cottage Core</option>
          <option value="Academia">Academia</option>
        </select>
        <input type="text" onChange={searchChangeHandler} value={search} placeholder="Search" />
      </div>
      <div id="card-container">{cardContainer}</div>
    </>
  );
};

export default ShopPage;
