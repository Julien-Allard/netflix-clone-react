import data from "../assets/movies.json";
import Images from "../components/Images";
import "./section.css";

const Section = (props) => {
  return (
    <section className="section-container">
      <div>
        <h2>{data[props.index].category}</h2>
        <div className="all-images">
          <Images index={props.index} />
        </div>
      </div>
    </section>
  );
};

export default Section;
