import React from "react";
import "./hero.css";
import angel from "../../../../img/aldara/penguin.png";
import pila from "../../../../img/bautizo/pila-bautismo.png";
import corner from "../../../../img/aldara/pink-corner.png";
import bg from "../../../../img/aldara/pink-texture.jpg";

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
      <div className="corner top left">
        <img
          src={corner}
          style={{ width: "100%", transform: "rotate(180deg)" }}
        />
      </div>
      <div className="corner top right">
        <img
          src={corner}
          style={{ width: "100%", transform: "rotate(270deg)" }}
        />
      </div>
      <div className="corner bottom right">
        <img src={corner} style={{ width: "100%" }} />
      </div>
      <div className="corner bottom left">
        <img
          src={corner}
          style={{ width: "100%", transform: "rotate(90deg)" }}
        />
      </div>
    </div>
  );
}

export default Hero;
