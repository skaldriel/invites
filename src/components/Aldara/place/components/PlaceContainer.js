import React from "react";
import Place from "../Place";

export default function PlaceContainer({
  image,
  hour,
  name,
  address,
  link,
  buttonStyles,
  heading,
}) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "25px",
      }}
    >
      <h2 className="bb-shower">{heading}</h2>
      <Place
        image={image}
        name={name}
        address={address}
        hour={hour}
        link={link}
        buttonStyles={buttonStyles}
      />
    </div>
  );
}
