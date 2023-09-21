import React, { useState, useRef } from "react";
import "../../styles/Information/questionare.css";
import { questionareQuestions } from "./data";
import { BsChevronLeft as AiOutlineLeft } from "react-icons/bs";

const Questionare = () => {
  const [sliderConditions, setSliderConditions] = useState({
    questionNumber: 0,
    reverse: false,
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  window.addEventListener("resize", handleResize);
  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    console.log("ok");
  }, [sliderConditions]);

  const handleReverseClick = () => {
    setSliderConditions({
      reverse: true,
      questionNumber: sliderConditions.questionNumber - 1,
    });
  };

  const handleQuestionChange = () => {
    if (sliderConditions.reverse) {
      return (
        <div
          className={`questionare__body__wrapper slide-reverse${
            questionareQuestions[sliderConditions.questionNumber].id
          }`}
        >
          <div className="questionare__body__indicator">
            <p>
              {questionareQuestions[sliderConditions.questionNumber].id} of 5
            </p>
          </div>
          <div className="questionare__body__question">
            <h2 className="slide-in">
              {questionareQuestions[sliderConditions.questionNumber].question}
            </h2>
          </div>
          <div className="questionare__body__choice">
            <button
              onClick={() => {
                setSliderConditions({
                  reverse: false,
                  questionNumber: sliderConditions.questionNumber + 1,
                });
              }}
            >
              Yes
            </button>
            <button
              onClick={() => {
                setSliderConditions({
                  reverse: false,
                  questionNumber: sliderConditions.questionNumber + 1,
                });
              }}
            >
              No
            </button>
            {console.log("in")}
          </div>
        </div>
      );
    } else {
      //in future if you want to increase the number of question,add the slide-in class in questionare.scss file for every increament
      if (sliderConditions.questionNumber === 5) {
        return (
          <div className="questionare__body__last__pannel slide-in5">
            <h1>
              Seems like StockAlgos is suitable to you. Would you like to give
              us a try?
            </h1>
            <div className="hero__textgroup__section__4 questionare__section">
              <button>Try at $0 for 7 days</button>
              <h2>
                <span>$214.00</span> $99/month after
              </h2>
            </div>
          </div>
        );
      } else {
        return (
          <div
            className={`questionare__body__wrapper ${
              sliderConditions.questionNumber === 0
                ? `slide-in`
                : `slide-in${sliderConditions.questionNumber}`
            }`}
          >
            <div className="questionare__body__indicator">
              <p>
                {questionareQuestions[sliderConditions.questionNumber].id} of 5
              </p>
            </div>
            <div className="questionare__body__question">
              <h2 className="slide-in">
                {questionareQuestions[sliderConditions.questionNumber].question}
              </h2>
            </div>
            <div className="questionare__body__choice">
              <button
                onClick={() => {
                  setSliderConditions({
                    reverse: false,
                    questionNumber: sliderConditions.questionNumber + 1,
                  });
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setSliderConditions({
                    reverse: false,
                    questionNumber: sliderConditions.questionNumber + 1,
                  });
                }}
              >
                No
              </button>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <div>
      <div className="questionare__container">
        <div className="questionare__wrapper">
          <div className="questionare__text">
            <h1>Find out if you're interested</h1>
            <p>
              Answer some questions to learn if you can be benefited from the
              StockAlgos Unlimited
            </p>
          </div>
          <div
            className={`questionare__body ${
              sliderConditions.questionNumber === 5 ? "changeBackground" : ""
            }`}
          >
            {sliderConditions.questionNumber === 0 ||
            sliderConditions.questionNumber === 5 ? (
              <></>
            ) : (
              <>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "transparent",
                      color: "#808080;",
                      zIndex: 100,
                    }}
                    onClick={() => {
                      handleReverseClick();
                      console.log("CL");
                    }}
                  >
                    <AiOutlineLeft
                      size={screenWidth <= 450 ? "25" : "44"}
                      color="#808080"
                    />
                  </button>
                </div>
              </>
            )}

            {handleQuestionChange()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionare;
