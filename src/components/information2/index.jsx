import React from "react";
import "../../styles/Information2/information2.css";
import HedgeSVG from "../../assets/01 hedge-funds.svg";
import Nividia from "../../assets/02 fundamentals.svg";
import Pharma from "../../assets/03 FDA.svg";
const Information2 = () => {
  return (
    <div className="information2__container">
      <div className="information2__wrapper">
        <div className="information2__heading">
          <h2>With StockAlgos Unlimited</h2>
          <h1>
            You will know what <br />
            you dont know
          </h1>
        </div>
        <div className="information2__card__group">
          <div className="information2__card1">
            <div className="information2__card1__text">
              <p>
                Track the portfolios and stock picks of famous investors like
                Warren Buffet,Ray Dalio,George Soros and more
              </p>
              <h2>Hedge Funds Analysis</h2>
            </div>
            <div className="information2__card1__image">
              <img src={HedgeSVG} />
            </div>
          </div>
          <div className="information2__card2">
            <div className="information2__card2__image">
              <img src={Nividia} />
            </div>
            <div className="information2__card2__text">
              <div>
                <p>
                  Evaluate companies based on their fundamental ratios and
                  metrics such as earnings,dividends,growth,and valuaion
                </p>
                <h2>Fundamentals</h2>
              </div>
            </div>
          </div>
          <div className="information2__card1">
            <div className="information2__card1__text">
              <p>
                Find stocks with upcoming FDA dates and the details on their
                drugs, market potential, and competitors.
              </p>
              <h2>FDA Stock Analysis</h2>
            </div>
            <div className="information2__card1__image">
              <img src={Pharma} />
            </div>
          </div>
        </div>
        <div className="information2__heading2">
          <h1>And there is much more data.</h1>
          <h2>
            Absorb the information and make informed trading decisions. <br />
            That’s what we call trade like a PRO.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Information2;
