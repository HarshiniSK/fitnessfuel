/*
Banner Component
To display the banner type data from api
As Banner in website stretched across the screen
Url - Link Address of the image to be displayed as Banner
*/


const Banner = ({ item_ }) => {
  return (
    <div>
      {item_.items.map((item, index) => {
        const { url } = item;
        return (
          <div key={index}>
            {<img src={url} alt="Banner" width="100%" height="350px" />}
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
