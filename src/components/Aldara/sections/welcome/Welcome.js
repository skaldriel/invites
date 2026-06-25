import React from "react";
import WelcomeOrnaments from "./components/WelcomeOrnaments";
import "./welcome.css";
function Welcome({ name }) {
  return (
    <>
      <WelcomeOrnaments>
        <div className="welcome-container">
          <h2 className="bb-shower center bb-shadow">Familia Rosas Ramos</h2>
          <p className="text center bb-shadow" style={{ lineHeight: "0.5" }}>
            Estefany Ramos López
          </p>
          <p className="text center bb-shadow" style={{ lineHeight: ".5" }}>
            Ian Adriel Rosas Maldonado
          </p>
          <h3 className="bb-shower center bb-shadow">
            <span style={{ fontSize: "28px", lineHeight: "2.5" }}>
              Tienen el honor de invitar a:{" "}
            </span>{" "}
            <br /> {name}
          </h3>
          <p className="text center bb-shadow">
            a celebrar un momento especial en sus vidas
          </p>
        </div>
      </WelcomeOrnaments>
    </>
  );
}

export default Welcome;
