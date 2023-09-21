import React, { useState, useEffect } from "react";
import "../../styles/Information/slider.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { imageSliderData } from "./data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleLeft = () => {
    setSlideIndex((slideIndex) => (slideIndex <= 0 ? 4 : slideIndex - 1));
  };
  const handleRight = () => {
    setSlideIndex((slideIndex) => (slideIndex >= 4 ? 0 : slideIndex + 1));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSlideIndex((slideIndex) => (slideIndex >= 4 ? 0 : slideIndex + 1));
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [slideIndex]);
  return (
    <div className="slider__container">
      <div className="slider__wrapper">
        <div className="slider__body">
          <img
            src={imageSliderData[slideIndex].Image}
            className={`fade-in${slideIndex}`}
          />
        </div>
      </div>
      <div className="slider__navigation">
        <div className="slider__navigation__body ">
          <div className="slider__navigation__btn">
            <button
              onClick={() => {
                handleLeft();
              }}
            >
              <AiOutlineLeft color="#ffff" size={"16px"} />
            </button>
          </div>
          <div className={`slider__navigation__text`}>
            <div
              style={{ display: "flex", gap: "15px", alignItems: "center" }}
              className={`fade-text${slideIndex}`}
            >
              <p>{imageSliderData[slideIndex].text} </p>{" "}
              <p style={{ color: "#808080", marginTop: "1px" }}>
                {slideIndex + 1}/5
              </p>
            </div>
          </div>
          <div className="slider__navigation__btn">
            <button onClick={() => handleRight()}>
              <AiOutlineRight color="#ffff" size={"16px"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
