import "../../sass/error.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ErrorImage from "../../src/assets/error.png";

function Error() {
  return (
    <div className="main">
      <Header />
      <div className="error">
        <img
          src={ErrorImage}
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

export default Error;
