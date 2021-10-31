import "./styles.css";
const SliderItem = ({ item }) => {
  const { image, name, mrp, sp, weight, discount } = item;
  // console.log("Slider")
  return (
    <div className="box">
      <img
        src={image}
        alt={name}
        width="150px"
        height="150px"
        onError={(e) => {
          e.target.onError = null;
          e.target.src =
            // "https://ff360-media.s3.ap-south-1.amazonaws.com/inventory/4516443d94c741238b24307f3d96298d.jpg";
            "https://meatmarket.in/wp-content/uploads/2020/01/loading-bar-animated-gif-transparent-background-3.gif";
        }}
      />
      <div className="pdt-title">{name}</div>
      <div style={{ padding: "2px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>{weight}</div>
          <div className="discount">{discount}% Off</div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div className="price sp">&#8377;{sp}</div>
            <div className="price mrp">&#8377;{mrp}</div>
          </div>
          <div style={{ color: "#b27a2f" }}>
            <div style={{ textAlign: "right" }}>&#9734;0</div>
            <div>(0 reviews)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
