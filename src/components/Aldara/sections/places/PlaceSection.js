import React from "react";
import corner from "../../../../img/aldara/pink-corner.png";
import PlaceContainer from "../../place/components/PlaceContainer";

export default function PlaceSection({
  text,
  heading,
  image,
  name,
  address,
  hour,
  link,
  buttonStyles,
  inverted,
}) {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{text}</p>
        <PlaceContainer
          heading={heading}
          image={image}
          name={name}
          address={address}
          hour={hour}
          link={link}
          buttonStyles={buttonStyles}
        />
        <div
          className={`corner top ${inverted ? "right" : "left"}`}
          style={{ width: "150px" }}
        >
          <img
            src={corner}
            style={{
              width: "100%",
              transform: `${inverted ? "rotate(90deg)" : "rotate(180deg)"}`,
            }}
          />
        </div>
        <div
          className={`corner bottom ${inverted ? "left" : "right"}`}
          style={{ width: "150px", margin: "0 -20px 0 0" }}
        >
          <img
            src={corner}
            style={{
              width: "100%",
              transform: `${inverted ? "rotate(270deg)" : "rotate(0deg)"}`,
            }}
          />
        </div>
      </div>
    </>
  );
}
