import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PortfolioHeader from "../components/Portfolio/PortfolioHeader";
import usePorfolioPosts from "../custom-hooks/usePortfolioPosts";

export default function Portfolio() {
  const [portfolioPosts, isLoading] = usePorfolioPosts();

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <Header />
      <main id="portfolio">
        <PortfolioHeader />
        <div className="container">
          {portfolioPosts[0].fields.order.map((project, index) => (
            <Link
              className="card"
              key={project.fields.slug}
              to={`/portfolio/${project.fields.slug}`}
            >
              <img
                src={`http:${project.fields.heroImage.fields.file.url}`}
                alt="placeholder"
              />
              <div className="card__copy">
                <div className="card__details">
                  <span>{`${index < 9 ? "0" + (index + 1) : index + 1}/${
                    portfolioPosts[0].fields.order.length < 10
                      ? "0" + portfolioPosts[0].fields.order.length
                      : portfolioPosts[0].fields.order.length
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
