import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ConstructionImage from "../../../public/error.jpg";

function Qwenta() {
  return (
    <div className="main">
      <Header />
      <div className="error">
        <img
          src={ConstructionImage}
          alt="Petits lapins tenant une pancarte sur laquelle est écrit '404'"
        />
      </div>
      <div className="credits">
        <p>Ilustration par</p>
        <a href="https://www.instagram.com/lilith.regina.immortalis/">
          Bahar AVUNCA
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Qwenta;
