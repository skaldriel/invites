import React from "react";
import Hero from "./sections/hero/Hero";
import SectionContainer from "./section-container/SectionContainer";
import Welcome from "./sections/welcome/Welcome";
import "./aldara.css";
import DateCard from "./sections/date/Date";
import PlaceSection from "./sections/places/PlaceSection";
import location from "../../img/aldara/location.png";
import sectionBg from "../../img/bautizo/byebg.jpeg";
import bg from "../../img/aldara/aldara1.jpeg";
import Page from "../Page";
import welcomeImage from "../../img/aldara/pink-texture.jpg";
import Carousel from "./Carousel";

function Bautizo({
  firstname,
  lastname,
  confirmation,
  id,
  loading,
  setSpiner,
  setRefetch,
}) {
  const currentDate = new Date();
  const eventDate = new Date(Date.UTC(2026, 6, 11, 14, 0, 0, 0));

  // const isTimeTo = isPast(eventDate);

  return (
    <Page
      title={`Invitación ${firstname}`}
      description={`Hola ${firstname} nos complace invitarte al bautizo de nuestro hijo: Aziel Eduardo`}
    >
      <SectionContainer withBgImage img={welcomeImage}>
        <Hero />
      </SectionContainer>
      <SectionContainer bgColor="#fdfafb">
        <Welcome name={`${firstname} ${lastname}`} />
      </SectionContainer>
      <SectionContainer
        withBgImage
        img={bg}
        noBorder
        bgColor="transparent"
        blurred
      >
        <DateCard
          guestId={id}
          confirmation={confirmation}
          loading={loading}
          setSpiner={setSpiner}
          setRefetch={setRefetch}
          date={eventDate}
          blurred
          hide
        />
      </SectionContainer>
      <SectionContainer bgColor="#fdfafb">
        <PlaceSection
          heading="Ubicación"
          image={location}
          name="Salón de eventos el almendro"
          address="C. Pedro Moreno, Sascalum, 24095 San Francisco de Campeche, Camp."
          hour="2:00 pm"
          link="https://maps.app.goo.gl/qhgYyp2BuBWjkey56"
          buttonStyles="confirmButton"
        />
      </SectionContainer>

      <SectionContainer withBgImage img={welcomeImage}>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Carousel />
          <div className="bb-shower" style={{ padding: "0 20px" }}>
            <blockquote
              style={{
                marginInline: "20px",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              Los pies más pequeños hacen las huellas más grandes en nuestros
              corazones.
            </blockquote>
            <p style={{ textAlign: "right", paddingRight: "20px" }}>
              Lucas 3:21-22
            </p>
          </div>
          <h2 className="bb-shower bb-shadow">Te esperamos</h2>
        </div>
      </SectionContainer>
    </Page>
  );
}

export default Bautizo;
