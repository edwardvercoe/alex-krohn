import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PlayHeader from "./PlayHeader";

import useSinglePlay from "../../custom-hooks/useSinglePlay";

export default function PlayPost() {
  const { slug } = useParams();
  const [post, isLoading] = useSinglePlay(slug);
  let supportingImgs;

  if (isLoading) return <p>Loading...</p>;

  if (post)
    supportingImgs = post.supportingImages.map((img) => (
      <div
        className={
          img.fields.description
            ? img.fields.description.split(" ").map((x) => `${x} `) +
              "playpost__images__container"
            : "column-md-12 playpost__images__container"
        }
      >
        <img src={`http:${img.fields.file.url}`} alt={img.fields.title} />
      </div>
    ));

  return (
    <React.Fragment>
      <Header />
      <div className="playpost">
        <PlayHeader />

        <div className="playpost__infobar">
          <span>{post.title}</span>
          <span>{post.description}</span>
          <span>{post.details}</span>
        </div>
        {supportingImgs}
      </div>

      <Footer />
    </React.Fragment>
  );
}
