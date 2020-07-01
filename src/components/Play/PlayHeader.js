import React from "react";
import { Link } from "react-router-dom";

export default function PlayHeader() {
  return (
    <div className="play__header">
      <div>
        <Link to="/play">
          <span>PLAY</span>
        </Link>
      </div>
      <p>©2020</p>
    </div>
  );
}
