import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PlayHeader from "./PlayHeader";

export default function Play() {
  return (
    <React.Fragment>
      <Header />
      <main className="play">
        <PlayHeader />
        <div className="play__filters">
          <div>Tags</div>
          <div>CERAMICS , ILLUSTRATION , ART , PHOTOGRAPHY</div>
          <div>2018 , 2019 , 2020</div>
        </div>
        WEll hello there
      </main>
      <Footer />
    </React.Fragment>
  );
}
