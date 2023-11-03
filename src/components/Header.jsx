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
        <div>
          <Link to="/about">Qui suis-je ?</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
