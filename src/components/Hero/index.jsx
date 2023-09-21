import React from "react";
import Unlimited from "../../assets/Unlimited Icon.svg";
import "../../styles/Hero/hero.css";
const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__wrapper">
        <div className="hero__textgroup__section__1">
          <img src={Unlimited} alt="UnlimitedSVG" />
          <h2 style={{ display: "flex", gap: "5px" }}>
            <span>StockAlgos</span>
            <span>Unlimited</span>
          </h2>
        </div>
        <div className="hero__textgroup__section__2">
          <h1>
            The smarter way to <br />
            search for stocks.
          </h1>
        </div>
        <div className="hero__textgroup__section__3">
          <h2>
            Get access to tools and algorithms that help you find the best
            stocks to buy,sell,or hold. You can also get insights into how
            insiders,hedge funds,congress,and the goverment are trading the
            market
          </h2>
        </div>
        <div className="hero__textgroup__section__4">
          <button>Try at $0 for 7 days</button>
          <h2>
            <span>$214.00</span> $99/month after
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
