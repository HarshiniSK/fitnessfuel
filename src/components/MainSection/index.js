// Importing the required packages
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import ReactLoading from "react-loading";

// Importing the components
import Banner from "../Banner";
import PopularItem from "../PopularItem";
import Slider from "../Slider";

// Importing the styling files
import "./styles.css";


const MainSection = ({ fetchData }) => {
  const [sections, setSections] = useState([]);

  // Fetching the data using react query
  const { data, error, isError, isLoading } = useQuery("sections", fetchData);

  useEffect(() => {
    if (isError) {
      console.log("Error!!");
    }
    if (data) {
      setSections(data.sections);
    }
  }, [data, error, isError, isLoading]);
  // Loader Implementation
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
        // Rendering the required component based on the type of data section
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
