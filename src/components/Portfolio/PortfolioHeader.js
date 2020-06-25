import React from "react";

export default function PortfolioHeader({ slug }) {
  return (
    <div className="porfolio__header">
      <div>
        <span>PROJECTS</span>
        <span>{slug ? slug : null}</span>
      </div>
      <p>©2020</p>
    </div>
  );
}
