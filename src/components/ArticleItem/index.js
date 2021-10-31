import "./styles.css";

const ArtcileItem = ({ item }) => {
  const { title, sub_title, publish_date, image, views } = item;

  const dateExtractor = (date) => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    let formatDate = "";
    formatDate = new Date(date).toLocaleDateString("en-US", options);
    return formatDate;
  };

  return (
    <div className="article">
      <img
        src={image}
        alt={title}
        width="200px"
        height="200px"
        className="image"
      />
      <div className="content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "grey",
            fontSize: "0.75em",
          }}
        >
          <div className="date">{dateExtractor(publish_date)}</div>
          <div className="views">&#128065; {views}</div>
        </div>
        <div className="title">{title}</div>
        <div className="sub-title">{sub_title}</div>

        <div className="cta">Read More</div>
      </div>
    </div>
  );
};

export default ArtcileItem;
