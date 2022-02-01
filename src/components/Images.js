import data from "../assets/movies.json";
import "./images.css";

const Images = (props) => {
  return (
    <div className="image-container">
      {data[props.index].images.map((source) => {
        return <img src={source} alt="" />;
      })}
    </div>
  );
};

export default Images;
