import "../../sass/error.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorImage from "../../src/assets/error.png";
import { useEffect } from "react";

function Error() {
  useEffect(() => {
    document.title = "Oopsie Doopsie";
  }, []);
  return (
    <div className="main">
      <Header />
      <div className="error">
        <img
          src={ErrorImage}
          alt="Petits lapins tenant une pancarte sur laquelle est écrit '404'"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Error;
