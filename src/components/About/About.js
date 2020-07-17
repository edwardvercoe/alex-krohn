import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <Header />
      <div id="about" className="about">
        <div className="about__facts">
          <h2>enter facts about AK here</h2>
        </div>
        <div className="about__image">
          <img
            alt="placeholder"
            src={process.env.PUBLIC_URL + "/assets/placeholder.jpg"}
          />
        </div>

        <div className="about__container">
          <p>
            I’m an independent creative living in Sydney, Australia by way of
            Los Angeles. My focus is branding, art direction, content
            development and execution.
          </p>
          <br />
          <p>
            Email for chats, proposals and collaborations
            alex@alexandriakrohn.com
          </p>

          <ul className="about__socials">
            <li>LINKEDIN</li>
            <li>TUMBLR</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
