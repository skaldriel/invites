import ByeSection from "../components/byeSection/ByeSection";
import DateSection from "../components/dateSection/DateSection";
import GalerySection from "../components/galerySection/GalerySection";
import GiftTable from "../components/GiftsTable/GiftTable";
import ReceptionSection from "../components/receptionSection/ReceptionSection";
import Hero from "../components/section1/Hero";
import Section2 from "../components/section2/Section2";
import sleepP from "../img/aziel/penguin-removebg-preview.png";

const AzielBby = ({
  firstname,
  lastname,
  confirmation,
  id,
  loading,
  setSpiner,
}) => {
  return (
    <>
      <Hero sticker={sleepP} />
      <Section2 firstname={firstname} lastname={lastname} />
      <DateSection
        confirmation={confirmation}
        guestId={id}
        loading={loading}
        setSpiner={setSpiner}
      />
      <ReceptionSection title="Recepción" />
      <GiftTable />
      <GalerySection />
      <ByeSection
        text1="¡Esperamos contar con tu asistencia!"
        name="Ian Rosas & Estefany Ramos"
        event="Aziel baby shower"
        bgColor="#c2c2e9"
      />
    </>
  );
};

export default AzielBby;
