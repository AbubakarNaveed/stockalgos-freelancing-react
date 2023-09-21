import React from "react";
import "../../styles/Information/feature.css";
import BussinessInsider from "../../assets/bussiness.png";
import Institutional from "../../assets/instituaional.png";
import Barron from "../../assets/Baron.png";
import USNews from "../../assets/us_news.png";
import Kipler from "../../assets/kiplinger.png";
const Feature = () => {
  return (
    <div className="feature__container">
      <div className="feature__wrapper">
        <div className="feature__heading">
          <p>As featured in </p>
        </div>
        <div className="feature__news__logos">
          <div>
            <img src={BussinessInsider} />
          </div>
          <div>
            <img src={Institutional} />
          </div>
          <div>
            <img src={Barron} />
          </div>
          <div>
            <img src={USNews} />
          </div>
          <div>
            <img src={Kipler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
