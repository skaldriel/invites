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
      </div>
    </>
  );
}
