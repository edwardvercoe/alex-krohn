import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PortfolioHeader from "./PortfolioHeader";

import useSinglePost from "../../custom-hooks/useSinglePost";

export default function SinglePost() {
  const { slug } = useParams();
  const [post, isLoading] = useSinglePost(slug);
  let supportingImgs;
  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;

    if (post)
      supportingImgs = post.supportingImages.map((img) => (
        <div
          className={
            img.fields.description
              ? img.fields.description.split(" ").map((x) => `${x} `) +
                "post__images__container"
              : "column-md-12 post__images__container"
          }
        >
          <img src={`http:${img.fields.file.url}`} alt={img.fields.title} />
        </div>
      ));

    return (
      <React.Fragment>
        <Header />
        <div id="portfolioPost">
          <PortfolioHeader title={post.title} companyName={post.companyName} />
          <div className="post__intro">
            <div>
              <p className="post__intro__title">{post.title}</p>
              <p className="post__intro__companyName">{post.companyName}</p>
            </div>
            <div>
              <p className="post__intro__desc">{post.description}</p>
            </div>
            <div>
              <p className="post__intro__services">{post.services}</p>
            </div>
          </div>

          <div className="grid"></div>
          {supportingImgs}
        </div>
        <Footer />
      </React.Fragment>
    );
  };

  return (
    <div className="post">
      {renderPost()}
      {console.log("redering component...")}
    </div>
  );
}
