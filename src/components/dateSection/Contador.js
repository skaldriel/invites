import React, { useEffect, useState } from "react";
import Digit from "./Digit/Digit";
import DigitSeparator from "./DigitSeparator/DigitSeparator";
import "./Contador.css";

const Contador = ({ style }) => {
  const [left, setLeft] = useState("");
  const [leftDays, setLeftDays] = useState("");
  const [leftHours, setLeftHours] = useState("");
  const [leftMinutes, setLeftMinutes] = useState("");
  const [leftSeconds, setLeftSeconds] = useState("");

  // Date.UTC(year, monthIndex, day, hour, minute, second, millisecond)
  useEffect(() => {
    const actualDate = new Date();
    const partyDate = new Date(Date.UTC(2026, 6, 11, 14, 30, 0, 0));

    partyDate.setHours(partyDate.getHours() + 6);
    const interval = setInterval(() => {
      setLeft(partyDate - actualDate);
    }, 1000);
    return () => clearInterval(interval);
  }, [left]);

  useEffect(() => {
    const dias = Math.floor(left / (1000 * 3600 * 24));
    const horas = Math.floor(left / (1000 * 3600));
    const min = Math.floor(left / (1000 * 60));
    const sec = Math.ceil(left / 1000);

    setLeftDays(dias);
    setLeftHours(horas);
    setLeftMinutes(min);
    setLeftSeconds(sec);
  }, [left]);

  return (
    <div className="counter-container" style={{ color: "#662e50", ...style }}>
      <Digit textDigit={leftDays < 1 ? 0 : leftDays} textDescription="Días" />
      <DigitSeparator />
      <Digit
        textDigit={leftHours % 24 < 1 ? 0 : leftHours % 24}
        textDescription="Horas"
      />
      <DigitSeparator />
      <Digit
        textDigit={leftMinutes % 60 < 1 ? 0 : leftMinutes % 60}
        textDescription="Min"
      />
      <DigitSeparator />
      <Digit
        textDigit={leftSeconds % 60 < 1 ? 0 : leftSeconds % 60}
        textDescription="Seg"
      />
    </div>
  );
};

export default Contador;
