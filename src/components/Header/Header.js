import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link to="/portfolio">
            <p>Projects</p>
          </Link>
          <Link to="/play">
            <p>Play</p>
          </Link>
        </div>
        <Link to="/">
          <img
            className="nav__logo"
            src={process.env.PUBLIC_URL + "/assets/logo.svg"}
            alt="Alexandria Logo"
          />
        </Link>
        <div>
          <Link to="/about">
            <p>Info</p>
          </Link>
          <a href="mailto:test@example.com">
            <p>Contact</p>
          </a>
        </div>
      </nav>
    </header>
  );
}
