// const Banner = ({ item_ }) => {
//   const {url} = item_
// //   console.log(item, "++++++++++++++");
//   return (
//     <div>{<img src={url} alt="Banner" width="100%" height="50%" /> }</div>
//   );
// };

// export default Banner;
const Banner = ({ item_ }) => {
  // console.log(item_.items)
  return (
    <div>
      {item_.items.map((item, index) => {
        const { url } = item;
        return (
          <div key={index}>{<img src={url} alt="Banner" width="100%" />}</div>
        );
      })}
    </div>
  );
};

export default Banner;
