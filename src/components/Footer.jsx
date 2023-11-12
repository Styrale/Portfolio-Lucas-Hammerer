import React from "react";
import "../../sass/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="credits">
        <p>Les illustrations de ce site ont été réalisées par</p>
        <a href="https://www.instagram.com/lilith.regina.immortalis/">
          <p>Bahar AVUNCA</p>
        </a>
      </div>
      <div className="contact">
        <h4 className="logo">Me contacter :</h4>
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
