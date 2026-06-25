import React from "react";
import BackDropContainer from "../bg/BackDropContainer";
import "./section-container.css";

function SectionContainer({
  noBorder,
  style,
  children,
  bgColor,
  withBgImage,
  img,
  blurred,
}) {
  const prepareClassNames = () => {
    const classes = ["section-content"];

    const borderStyle = `border-${style}`;

    if (!noBorder) {
      classes.push(borderStyle);
    }
    return classes;
  };

  const styles = prepareClassNames();

  return (
    <BackDropContainer img={img}>
      <div
        className="section-container "
        style={{
          overflow: "hidden",
          background: `${bgColor ?? ""}`,
          backgroundImage: `${withBgImage && `url(${img})`}`,
          backgroundSize: blurred ? "200%" : "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div className={styles.join(" ")}>{children}</div>
      </div>
    </BackDropContainer>
  );
}

export default SectionContainer;
