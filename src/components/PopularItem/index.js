import "./styles.css";

// <div className="pop-item">{item.items[1].name}</div>

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
