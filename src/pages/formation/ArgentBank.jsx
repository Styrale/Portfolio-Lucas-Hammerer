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
        <p>Esta el Testerino</p>
      </div>
      <Footer />
    </div>
  );
}

export default ArgentBank;
