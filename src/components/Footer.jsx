import React from "react";
import "../../sass/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <h4>Me contacter :</h4>
      </div>
      <div className="contact">
        <a href="mailto: hammererlucas@gmail.com">
          Envoyer un mail : hammererlucas@gmail.com
        </a>
        <a href="tel: 0678244719">
          Me contacter par téléphone au 06 78 24 47 19
        </a>
      </div>
    </footer>
  );
}

export default Footer;
