import React from "react";
// import { Demo } from "./pages/Demo/Demo";
// import { Event, EventProps } from "./components/Event/Event";
import { Events } from "./pages/Events/Events";
import { EventDetail } from "./pages/EventDetail/EventDetail";
import { NovaAkceFormik } from "./pages/NovaAkceFormik/NovaAkceFormik";
// import { Navigation } from "./components/Navigation/Navigation";
import { Route, BrowserRouter, Routes } from "react-router";
import { data } from "./eventData";

const App: React.FC = () => {
  return (
    <div>
      {/* <Demo name="Lenka Kocianova" /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Events data={data} />} />
          <Route path="/events" element={<Events data={data} />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/formik" element={<NovaAkceFormik />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  ;
};

export default App;
