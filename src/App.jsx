import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Projets from "./pages/Perso";
import OpenClassrooms from "./pages/OpenClassrooms";
import About from "./pages/About";
import SophieBluel from "./pages/formation/SophieBluel";
import Qwenta from "./pages/formation/Qwenta";
import Kasa from "./pages/formation/Kasa";
import NinaCarducci from "./pages/formation/NinaCarducci";
import Debugging from "./pages/formation/Debugging";
import ArgentBank from "./pages/formation/ArgentBank";
import "./../sass/main.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="Portfolio-Lucas-Hammerer/" element={<Home />} />
        <Route path="Portfolio-Lucas-Hammerer/projets" element={<Projets />} />
        <Route path="openclassrooms" element={<OpenClassrooms />} />
        <Route path="/about" element={<About />} />
        <Route path="openclassrooms/sophie-bluel" element={<SophieBluel />} />
        <Route path="openclassrooms/qwenta" element={<Qwenta />} />
        <Route path="openclassrooms/kasa" element={<Kasa />} />
        <Route path="openclassrooms/nina-carducci" element={<NinaCarducci />} />
        <Route path="openclassrooms/77events" element={<Debugging />} />
        <Route path="openclassrooms/argent-bank" element={<ArgentBank />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;