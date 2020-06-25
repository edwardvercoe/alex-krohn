import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img
          className="nav__logo"
          src={process.env.PUBLIC_URL + "/assets/logo.svg"}
          alt="Alexandria Logo"
        />
      </Link>

      <nav>
        <Link to="/portfolio">
          <p>Projects</p>
        </Link>
        <Link to="/">
          <p>Play</p>
        </Link>
        <Link to="/about">
          <p>Info</p>
        </Link>
      </nav>
    </header>
  );
}
