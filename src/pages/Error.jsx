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
      <Footer />
    </div>
  );
}

export default Error;
