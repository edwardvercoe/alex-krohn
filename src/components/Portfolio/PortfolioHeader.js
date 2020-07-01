import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioHeader() {
  return (
    <div className="porfolio__header">
      <div>
        <Link to="/portfolio">
          <span>PROJECTS</span>
        </Link>
      </div>
      <p>©2020</p>
    </div>
  );
}
