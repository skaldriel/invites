import React, { useState, useEffect } from "react";
import Contador from "../../../dateSection/Contador";
import sweetPenguin from "../../../../img/aldara/sweet-penguin.png";
import corner from "../../../../img/aldara/pink-corner.png";
import "./date.css";
import Loader from "../../../Loader";

function Date({
  guestId,
  confirmation,
  loading,
  setSpiner,
  setRefetch,
  date,
  blurred,
  hide,
}) {
  const handleConfirmation = () => {
    setSpiner(true);
    fetch(
      `https://wenvel-backend-dev-gdgs.1.us-1.fl0.io/api/v1/guests/${guestId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation: true }),
      },
    )
      .then(() => {
        setRefetch(true);
        setSpiner(false);
      })
      .catch((error) =>
        window.alert("No se pudo confirmar tu asistencia, intenta más tarde"),
      );
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "7px",
          background: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <div>
          <h5
            className="bb-shower a-shadow"
            style={{ padding: "16px 0", margin: 0, fontSize: "32px" }}
          >
            Mis padres: Ian y Estefany
          </h5>

          <p
            className="center bb-shower a-shadow"
            style={{ fontWeight: "500" }}
          >
            Les esperan este:
          </p>
        </div>
        <h3 className="bb-shower center a-shadow">11 de Julio</h3>
        <Contador eventDate={date} />
        {/* loading ? (
          <Loader />
        ) : !confirmation ? (
          <button
            className="confirmButton"
            onClick={() => handleConfirmation()}
          >
            Confirmar asistencia
          </button>
        ) : (
          <p className="text bb-shower">Gracias por confirmar tu asistencia</p>
          ) */}
      </div>
    </div>
  );
}

export default Date;
