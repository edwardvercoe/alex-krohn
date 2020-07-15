import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PlayHeader from "./PlayHeader";
import PlayFilter from "./PlayFilter";
import IsoTopeGrid from "react-isotope";
import usePlayPosts from "../custom-hooks/usePlayPosts";

const filtersDefault = [
  { label: "all", isChecked: true },
  { label: "Ceramics", isChecked: false },
  { label: "Illustration", isChecked: false },
  { label: "Art", isChecked: false },
  { label: "Photography", isChecked: false },
];

export default function Play() {
  const [filters, setFilter] = useState(filtersDefault);
  const [playPosts, isLoading] = usePlayPosts();

  if (isLoading) return <p>Loading...</p>;

  const playCards = playPosts[0].fields.playItems.map((item) => ({
    id: item.fields.slug,
    filter: item.fields.tags,
    title: item.fields.title,
    featuredImage: item.fields.featuredImage.fields.file.url,
    slug: item.fields.slug,
  }));

  const onFilter = (event) => {
    const {
      target: { value, checked },
    } = event;

    setFilter((state) =>
      state.map((f) => {
        if (f.label !== value) {
          return {
            ...f,
            isChecked: false,
          };
        }

        return {
          ...f,
          isChecked: checked,
        };
      })
    );
  };

  return (
    <React.Fragment>
      <Header />
      <main className="play">
        <PlayHeader />
        <PlayFilter />
        <div>
          <div className="play__filters">
            {filters.map((f) => (
              <button key={`${f.label}_key`}>
                <input
                  id={f.label}
                  type="checkbox"
                  value={f.label}
                  onChange={onFilter}
                  checked={f.isChecked}
                />
                <label htmlFor={f.label}>{f.label}</label>
              </button>
            ))}
          </div>
          <div className="play__isotopeGrid">
            <IsoTopeGrid gridLayout={playCards} noOfCols={3} filters={filters}>
              {playCards.map((card) => (
                <PlayCard
                  key={card.id}
                  title={card.title}
                  featuredImage={card.featuredImage}
                  filter={card.filter}
                  slug={card.slug}
                />
              ))}
            </IsoTopeGrid>
          </div>
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
