import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PlayHeader from "./PlayHeader";
import Masonry from "react-masonry-component";
import usePlayPosts from "../custom-hooks/usePlayPosts";

export default function Play() {
  const [selectedOption, setSelectedOption] = useState("all");
  const [playPosts, isLoading] = usePlayPosts();
  if (isLoading) return <p>Loading...</p>;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const playCards = playPosts[0].fields.playItems.map((item) => ({
    id: item.fields.slug,
    filter: item.fields.tags,
    title: item.fields.title,
    featuredImage: item.fields.featuredImage.fields.file.url,
    slug: item.fields.slug,
  }));

  const updateCards = (filter) => {
    if (filter === "all")
      return (
        <Masonry className={"my-gallery-class"}>
          {playCards.map((card) => (
            <PlayCard
              key={card.id}
              title={card.title}
              featuredImage={card.featuredImage}
              filter={card.filter}
              slug={card.slug}
            />
          ))}
        </Masonry>
      );

    return (
      <Masonry className={"my-gallery-class"}>
        {playCards
          .filter(
            (item) =>
              item.filter.some(
                (tag) => tag.toLowerCase() === selectedOption
              ) === true
          )
          .map((card) => (
            <PlayCard
              key={card.id}
              title={card.title}
              featuredImage={card.featuredImage}
              filter={card.filter}
              slug={card.slug}
            />
          ))}
      </Masonry>
    );
  };

  return (
    <React.Fragment>
      <Header />
      <main className="play">
        <PlayHeader />
        <div className="play__filters">
          <div>Tags</div>
          <div>
            <form>
              <div className="radio">
                <input
                  type="radio"
                  value="all"
                  checked={selectedOption === "all"}
                  onChange={(e) => handleOptionChange(e)}
                />
                <label>ALL</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value="ceramics"
                  checked={selectedOption === "ceramics"}
                  onChange={(e) => handleOptionChange(e)}
                />
                <label>CERAMICS</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value="illustration"
                  checked={selectedOption === "illustration"}
                  onChange={(e) => handleOptionChange(e)}
                />
                <label>ILLUSTRATION</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value="art"
                  checked={selectedOption === "art"}
                  onChange={(e) => handleOptionChange(e)}
                />
                <label>ART</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  value="photography"
                  checked={selectedOption === "photography"}
                  onChange={(e) => handleOptionChange(e)}
                />
                <label>PHOTOGRAPHY</label>
              </div>
            </form>
          </div>
          <div>2018, 2019, 2020</div>
        </div>
        <div>
          <div className="play__masonry">{updateCards(selectedOption)}</div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

const PlayCard = ({ title, filter, featuredImage, slug }) => {
  return (
    <Link className="play__card" to={`/play/${slug}`}>
      <div className="play__card__img">
        <img src={`http:${featuredImage} `} alt={slug} />
      </div>
      <div className="play__card__contents">
        <span>{title}</span>
        <span>Tags: {filter}</span>
      </div>
    </Link>
  );
};
