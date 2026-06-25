import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import XVCamila from './pages/XVCamila';
import Home from "./pages/Home";
import "./App.css";
// import Dashboard from './pages/Dashboard';
// import BautizoAndreti from './pages/BautizoAndreti';
import Admin from "./pages/Admin";
import AzielBby from "./pages/AzielBby";
import Envelope from "./components/envelop/Envelope";
import Bautizo from "./components/Bautizo/Bautizo";
import Aldara from "./components/Aldara";

function App() {
  const [refetch, setRefetch] = useState(true);
  const [eventInformation, setEventInformation] = useState(null);
  // const [eventGuest, setEventGuest] = useState([]);
  // const [andrettiEventInformation, setAndrettiEventInformation] = useState(null);
  // const [andrettiGuest, setAndrettiGuest] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (refetch) {
      fetch(
        "https://wenvel-backend-dev-gdgs.1.us-1.fl0.io/api/v1/events/1/information",
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setEventInformation(data);
        })
        .finally(() => {
          setRefetch(false);
        });
    }
  }, [refetch]);

  // useEffect(() => {
  //   fetch('http://localhost:8000/api/v1/events/2/information')
  //   .then(response => response.json())
  //   .then(data => setAndrettiEventInformation(data));
  // }, []);

  // useEffect(() => {
  //   if(eventInformation !== null){
  //     console.log(eventInformation.guests);
  //     setEventGuest(eventInformation.guests);

  //   }
  //   if(andrettiEventInformation !== null){
  //     console.log(andrettiEventInformation.guests);
  //     setAndrettiGuest(andrettiEventInformation.guests)
  //   }
  // }, [eventInformation, andrettiEventInformation]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/dashboard" element={<Dashboard guests={eventGuest}/>} /> */}
        {/* <Route path="/andretti/dashboard" element={<Dashboard guests={andrettiGuest}/>} /> */}
        {/* {
            andrettiGuest.map((guest) =>
                  <Route
                    path={`/andretti/${guest.id}`}
                    element={
                      <BautizoAndreti
                        firstname={guest.firstname}
                        lastname={guest.lastname}
                        confirmation={guest.confirmation}
                        id={guest.id}
                        loading={loading}
                        setSpiner={setLoading}
                      />
                    }
                    key={guest.id}
                  />
            )
          } */}
        {/* {
            eventGuest.map((guest, i) =>
                  <Route
                    path={`/camila/${guest.id}`}
                    element={
                      <XVCamila
                        firstname={guest.firstname}
                        lastname={guest.lastname}
                        confirmation={guest.confirmation}
                        id={guest.id}
                        loading={loading}
                        setSpiner={setLoading}
                      />
                    }
                    key={i}
                  />
            )
          } */}

        <Route path="/envelope" element={<Envelope />} />

        <Route
          path={`/aziel-bautizo`}
          element={
            <Bautizo
              firstname="Ian"
              lastname="Rosas"
              confirmation={true}
              id={5}
              loading={loading}
              setSpiner={setLoading}
            />
          }
        />
        <Route
          path="/aziel-bby-shower"
          element={
            <AzielBby
              firstname="Ian"
              lastname="Rosas"
              confirmation={false}
              id={234}
              loading={loading}
              setSpiner={setLoading}
            />
          }
        />
        <Route
          path="/aldara"
          element={
            <Aldara
              firstname="Ian"
              lastname="Rosas"
              confirmation={false}
              id={1}
              loading={loading}
              setSpiner={setLoading}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
