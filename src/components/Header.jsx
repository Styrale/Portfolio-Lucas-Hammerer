import React from "react";
import { Link } from "react-router-dom";
import "../../sass/header.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>
          <Link to="/">Lucas Hammerer </Link>
        </h2>
      </div>
      <nav className="nav">
        <Link to="/openclassrooms">Projets de ma formation</Link>
        <Link to="/projets">Mes projets personnels</Link>
        <Link to="/about">Qui suis-je ?</Link>
      </nav>
    </header>
  );
}

export default Header;
