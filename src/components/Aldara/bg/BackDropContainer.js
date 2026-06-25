import React from "react";
import "./BackDropContainer.css";

function BackDropContainer({ img, children }) {
  return (
    <section
      className="backdrop-container"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="backdrop" />
      <div className="backdrop-children">{children}</div>
    </section>
  );
}

export default BackDropContainer;
