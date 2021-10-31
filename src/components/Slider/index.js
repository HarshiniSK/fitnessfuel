import ArticleItem from "../ArticleItem";
import SliderItem from "../SliderItem";
import SliderS from "react-slick";

import "./styles.css";

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
  const Item =
    item_.item_type && item_.item_type === "article" ? ArticleItem : SliderItem;
  return (
    <div className="main-item">
      <div className="title">{item_.header.title}</div>
      {/* <div className="pop-prod"> */}
      <SliderS {...settings}>
        {item_.items.map((item, index) => {
          return <Item item={item} key={index} />;
        })}
      </SliderS>
      {/* </div> */}
    </div>
  );
};

export default Slider;
