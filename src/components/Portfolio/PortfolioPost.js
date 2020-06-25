import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PortfolioHeader from "./PortfolioHeader";

import useSinglePost from "../custom-hooks/useSinglePost";

export default function SinglePost() {
  const { id } = useParams();
  const [post, isLoading] = useSinglePost(id);

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;

    return (
      <React.Fragment>
        <Header />
        <PortfolioHeader />
        <div className="post__intro">
          <h2 className="post__intro__title">{post.title}</h2>
          <p className="post__intro__desc">{post.description}</p>
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
