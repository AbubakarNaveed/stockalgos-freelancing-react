import React from "react";
import "../../styles/Feature/feature.css";
import Star from "../../assets/Star.png";
import Signal from "../../assets/Signals.svg";
import WatchList from "../../assets/Dynamic-watchlist.svg";

const Features = () => {
  return (
    <div className="features__container">
      <div className="features__wrapper">
        <div className="featurs__card_group">
          <div className="features__card__heading">
            <h2>Folks are already talking </h2>
          </div>
          <div className="features__card__flexbox">
            <div className="features__card__flexitem">
              <p>
                “Lorem ipsum dolor sit amet consectetur. Leo sem cras luctus
                neque. <span>Egestas mauris</span> leo netus sed tellus urna
                duis.“
              </p>
              <h3>- Testimonial by You</h3>
            </div>
            <div className="features__card__flexitem">
              <p>
                “Lorem ipsum dolor sit amet consectetur. Leo sem cras luctus
                neque. Egestas mauris leo netus sed tellus urna duis. Egestas
                mauris leo netus sed tellus urna duis.
                <span>Egestas mauris</span> leo netus.“
              </p>
              <h3>- Testimonial by You</h3>
            </div>
            <div className="features__card__flexitem">
              <p>
                “Lorem ipsum dolor sit amet consectetur. Leo sem cras luctus
                neque. Egestas mauris leo netus sed tellus urna duis.
                <span>Egestas mauris </span>leo netus sed tellus urna duis.“
              </p>
              <h3>- Testimonial by You</h3>
            </div>
            <div className="features__card__flexitem">
              <p>
                “Lorem ipsum dolor sit amet consectetur. Leo sem cras luctus
                neque. Egestas mauris leo netus sed tellus urna duis. Egestas
                mauris leo netus sed tellus urna duis.
                <span>Egestas mauris</span> leo netus.“
              </p>
              <h3>- Testimonial by You</h3>
            </div>
          </div>
        </div>
        <div className="features_star_card">
          <div className="features__star_card__heading">
            <img src={Star} alt="Star" />
            <h1>Star Features</h1>
          </div>
          <div className="features__star_card__feature1">
            <div className="features__star_card__feature1__text">
              <h1>Signals</h1>
              <p>
                Find stocks with upcoming FDA dates and the details on their
                drugs, market potential, and competitors.
              </p>
            </div>
            <div className="features__star_card__feature1__image1">
              <img src={Signal} />
            </div>
          </div>
          <div className="features__star_card__feature2">
            <div className="features__star_card__feature1__text">
              <h1>Dynamic Watchlist</h1>
              <p>
                Find stocks with upcoming FDA dates and the details on their
                drugs, market potential, and competitors.
              </p>
            </div>
            <div className="features__star_card__feature1__image2">
              <img src={WatchList} />
            </div>
          </div>
        </div>
        <div className="features__end_section">
          <div className="features__end_section__heading">
            <h1>
              You can easily track your favourite stocks or find new hot ones.
            </h1>
            <p>But don't take our world for it </p>
          </div>
          <div className="features__end_section__button__section">
            <button className="features__end_section__button">
              Try at $0 for 7 days
            </button>
            <h2 className="features__end_section__button__bottom__text">
              and see how more can you know about the market
            </h2>
          </div>
        </div>
        <div className="features__end_section__note">
          <button>Note</button>
          <p>
            <span>$214.00</span> $99/month offer is limited and won’t last long.
            So don’t miss out on this opportunity to get access to the best
            stock research platform ever.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
