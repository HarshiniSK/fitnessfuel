import SliderS from "react-slick";

import ArticleItem from "../ArticleItem";
import SliderItem from "../SliderItem";

import "./styles.css";

// Configurations for the slider
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Slider = ({ item_ }) => {
  // Rendering either normal SliderItem or ArticleItem based on the data item type
  const Item =
    item_.item_type && item_.item_type === "article" ? ArticleItem : SliderItem;
  return (
    <div className="main-item">
      <div className="title">{item_.header.title}</div>
      {/* Rendering the slider */}
      <SliderS {...settings}>
        {item_.items.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </SliderS>
    </div>
  );
};

export default Slider;
