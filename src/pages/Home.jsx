import React from "react";
import { NavLink } from "react-router-dom";
import "../../sass/home.scss";
import Header from "./../components/Header";
import Footer from "../components/Footer";
import imgProjets from "../../src/assets//projets.jpg";
import imgFormation from "../../src/assets/formation.jpg";

function Home() {
  useEffect(() => {
    document.title = "Accueil - Lucas Hammerer";
  }, []);
  return (
    <div className="main">
      <Header />
      <div className="sections">
        <div className="thumbnail">
          <NavLink to="/openclassrooms">
            <img
              src={imgFormation}
              alt="Petits lapins tenant une pancarte sur laquelle est écrit '404'"
            />
          </NavLink>
          <h2>Réalisations dans le cadre de la formation</h2>
        </div>
        <div className="thumbnail">
          <NavLink to="/projets">
            <img
              src={imgProjets}
              alt="Petits lapins tenant une pancarte sur laquelle est écrit '404'"
            />
          </NavLink>
          <h2>Projets Personnels</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
