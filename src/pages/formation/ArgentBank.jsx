import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ConstructionImage from "../../../src/assets/error.png";
import { useEffect } from "react";

function ArgentBank() {
  useEffect(() => {
    document.title = "ArgentBank";
  }, []);
  return (
    <div className="main">
      <Header />
      <div className="error">
        <img
          src={ConstructionImage}
          alt="Petits lapins tenant une pancarte sur laquelle est écrit '404'"
        />
      </div>
      <Footer />
    </div>
  );
}

export default ArgentBank;
