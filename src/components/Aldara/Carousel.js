import Flickity from "react-flickity-component";
import uno from "../../img/aldara/aldara1.jpeg";
import dos from "../../img/aldara/aldara2.jpeg";
import tres from "../../img/aldara/aldara3.jpeg";
import cuatro from "../../img/aldara/aldara4.jpeg";
import cinco from "../../img/aldara/aldara5.jpeg";
import seis from "../../img/aldara/aldara6.jpeg";

const flickityOptions = {
  intialIndex: 1,
  adaptiveHeight: true,
};

const Carousel = () => {
  return (
    <Flickity className={"carousel"} options={flickityOptions}>
      <img style={{ width: "100%" }} src={uno} alt="carousel item camila" />
      <img style={{ width: "100%" }} src={dos} alt="carousel item camila" />
      <img style={{ width: "100%" }} src={tres} alt="carousel item camila" />
      <img style={{ width: "100%" }} src={cuatro} alt="carousel item camila" />
      <img style={{ width: "100%" }} src={cinco} alt="carousel item camila" />
      <img style={{ width: "100%" }} src={seis} alt="carousel item camila" />
    </Flickity>
  );
};

export default Carousel;
