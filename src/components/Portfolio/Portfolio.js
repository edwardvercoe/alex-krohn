import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PortfolioHeader from "./PortfolioHeader";
import usePorfolioPosts from "../custom-hooks/usePortfolioPosts";

export default function Portfolio() {
  const [portfolioPosts] = usePorfolioPosts();

  return (
    <>
      <main id="portfolio">
        <Header />
        <PortfolioHeader />
        <div className="container">
          {portfolioPosts.map((project, index) => (
            <Link
              className="card"
              key={project.fields.slug}
              to={project.fields.slug}
            >
              <img
                src={`http:${project.fields.heroImage.fields.file.url}`}
                alt="placeholder"
              />
              <div className="card__copy">
                <div className="card__details">
                  <span>{`${index < 9 ? "0" + (index + 1) : index + 1}/${
                    portfolioPosts.length < 10
                      ? "0" + portfolioPosts.length
                      : portfolioPosts.length
                  }`}</span>
                  <span>{project.fields.companyName}</span>
                </div>
                <div className="card__detailsTwo">
                  <span>{project.fields.title}</span>
                  <span>{project.fields.services}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
