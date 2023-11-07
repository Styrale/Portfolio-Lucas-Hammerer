import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import projects from "../data/projects.json";
import "./../../sass/openclassrooms.scss";

function OpenClassrooms() {
  return (
    <div className="app">
      <Header />
      <div className="disclaimer-container">
        <p className="disclaimer">
          La formation OpenClassrooms que j'ai suivi se compose de 12 projets,
          répartis sur une durée de 6 mois, mais les projets 1, 2 et 5 ne sont
          pas suffisament conséquents pour apparaître dans ce carrousel, tandis
          que le projet 12 consiste en la réalisation d'un portfolio.{" "}
        </p>
      </div>
      <Slider slides={projects} />
      <Footer />
    </div>
  );
}

export default OpenClassrooms;
