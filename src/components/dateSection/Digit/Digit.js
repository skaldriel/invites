import React from "react";
import "./Digit.css";

const Digit = ({ textDigit, textDescription }) => {
  const formatDigit = (digit) => {
    if (digit < 10) return `0${digit}`;
    return `${digit}`;
  };
  return (
    <div className="centerItem">
      <p style={{ margin: "0" }} className=" bb-shower digit a-shadow">
        {formatDigit(textDigit)}
      </p>
      <p
        className="bb-shadow bb-shower"
        style={{ fontSize: "14px", margin: "0" }}
      >
        {textDescription}
      </p>
    </div>
  );
};

export default Digit;
