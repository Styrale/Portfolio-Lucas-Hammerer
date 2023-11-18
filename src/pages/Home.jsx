import React from "react";
import { NavLink } from "react-router-dom";
import "../../sass/home.scss";
import Header from "./../components/Header";
import Footer from "../components/Footer";
import imgProjets from "/projets.jpg";
import imgFormation from "/formation.jpg";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Accueil - Lucas Hammerer";
  }, []);
  return (
    <div className="main-white">
      <Header />
      <div className="sections">
        <div className="thumbnail">
          <NavLink to="/openclassrooms">
            <img src={imgFormation} alt="Lapin habillé comme un étudiant" />
          </NavLink>
          <h2>Réalisations dans le cadre de la formation</h2>
        </div>
        <div className="thumbnail">
          <NavLink to="/projets">
            <img src={imgProjets} alt="Lapin informaticien devant un PC" />
          </NavLink>
          <h2>Projets Personnels</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
