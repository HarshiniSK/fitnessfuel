import { useState, useEffect } from "react";
import { useQuery } from "react-query";

import Banner from "../Banner";
import PopularItem from "../PopularItem";
import Slider from "../Slider";

import "./styles.css";

import ReactLoading from "react-loading";

const MainSection = ({ fetchData }) => {
  const [sections, setSections] = useState([]);

  const { data, error, isError, isLoading } = useQuery("sections", fetchData);

  useEffect(() => {
    if (isError) {
      console.log("Error!!");
    }
    if (data) {
      setSections(data.sections);
    }
  }, [data, error, isError, isLoading]);
  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ReactLoading type={"bars"} color={"#000"} height={100} width={100} />
      </div>
    );
  }
  return (
    <div className="main-section">
      {sections.map((item, index) => {
        const { type } = item;
        if (type === "slider") {
          return <Slider item_={item} key={index} />;
        } else if (type === "banner") {
          return <Banner item_={item} key={index} />;
        } else if (type === "popular_items") {
          return <PopularItem item_={item} key={index} />;
        } else {
          return <></>;
        }
      })}
    </div>
  );
};

export default MainSection;
