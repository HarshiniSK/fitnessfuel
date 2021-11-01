/*
Component for Popular type items - Popular Categories, Shop by Product Types, Popular Brands
Header Title - Title for the data category
Title - Description for each individual item
*/

import "./styles.css";


const colors = ["#6583a8", "#6b7b8e", "#8fbbaf", "#acdeaa"];

const IndividualCategory = ({ items }) => {
  return (
    <div className="categ">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="pop-item"
            style={{ backgroundColor: colors[index] }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

const PopularItem = ({ item_ }) => {
  return (
    <div className="main-item">
      <div className="title">{item_.header.title}</div>
      <IndividualCategory items={item_.items} />
    </div>
  );
};

export default PopularItem;
