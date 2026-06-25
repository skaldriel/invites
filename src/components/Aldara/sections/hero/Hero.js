import "./hero.css";
import angel from "../../../../img/aldara/penguin.png";
import corner from "../../../../img/aldara/pink-corner.png";

function Hero() {
  return (
    <div className="hero-container-bg">
      <div className="hero-angel">
        <div className="center-image">
          <img src={angel} />
        </div>
      </div>
      <div className="center-content">
        <p className="text semi-bold center bb-shower bb-shadow">
          Acompañanos a celebrar el
        </p>
        <h1 className="center bb-shower p-shadow">Baby Shower</h1>
        <p className="text semi-bold center bb-shower bb-shadow">
          de nuestra hija
        </p>
        <h2 className="center bb-shower p-shadow">Luz Aldara Rosos Ramos</h2>
      </div>
      <div className="hero-pila pa0">
        <div className="center-image"></div>
      </div>
    </div>
  );
}

export default Hero;
