import React, {useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {

  const mouseScale = 0.01;
  const activeBackground = useRef()
  const [mousePos, setMousePos] = useState({x:0,y:0})

  const _onMouseMove = e => {
    setMousePos({
      x: e.screenX,
      y: e.screenY,
    })

    e.target.style.setProperty("--mouseX", `${(mousePos.x * mouseScale).toFixed(3)}%`);
    e.target.style.setProperty("--mouseY", `${(mousePos.y * mouseScale).toFixed(3)}%`);

  }

  return (
    <div id="home" ref={activeBackground} onMouseMove={e => _onMouseMove(e)}>
      <ul className="directory__list">
        <Link to="/portfolio">
          <li>Projects</li>
        </Link>
        <Link to="/illustration">
          <li>■ Illustration</li>
        </Link>
        <li>■ Photo</li>
        <br />
        <Link to="/ceramics">
          <li>■ Ceramic</li>
        </Link>
        <Link to="/about">
          <li>■ About</li>
        </Link>
      </ul>

      <span className="copyright">©2020</span>
    </div>
  );
}
