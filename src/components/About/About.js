import React from "react";

export default function About() {
  return (
    <div id="about">
      <img
        className="about__image"
        alt="placeholder"
        src={process.env.PUBLIC_URL + "/assets/placeholder.jpg"}
      />
      <div className="about__container">
        <h2>
          I’m an independent creative living in Sydney, Australia by way of Los
          Angeles.
        </h2>
        <p><em>
          My focus is branding, art direction, content development and
          execution.
          </em></p>

        <ul className="about__socials">
          <li>EMAIL</li>
          <li>INSTAGRAM</li>
          <li>LINKEDIN</li>
          <li>TUMBLR</li>
        </ul>
      </div>
    </div>
  );
}
