import React from "react";
function Place({ image, name, address, hour, link, buttonStyles }) {
  return (
    <div
      style={{
        width: "90%",
        boxShadow: "0 3px 7px 1px #bdbdbd",
        paddingBottom: "10px",
        borderRadius: "8px",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "200px",
          margin: "0 0 35px 0",
        }}
        src={image}
        alt="ubicación del sitio"
      />
      <div style={{ padding: "0 10px" }}>
        <h5 className="text-center bb-shadow bb-shower">{name}</h5>
        <p className="text-center bb-shower">{address}</p>
        <h5
          style={{ marginBottom: "35px" }}
          className="bb-shower text-center bb-shadow"
        >
          {hour}
        </h5>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={buttonStyles}
          >
            ¿Cómo llegar?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Place;
