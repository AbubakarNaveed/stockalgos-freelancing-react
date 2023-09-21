import React from "react";
import "../../styles/Information/information.css";
import Slider from "./slider";
import Feature from "./feature";
import Questionare from "./questionare";

const Information = () => {
  return (
    <div className="information__container">
      <div className="information__wrapper">
        <Slider />
        {/* <Feature /> */}
        <div
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            color: "transparent",
          }}
        >
          <p>ok</p>
        </div>
        <Questionare />
      </div>
    </div>
  );
};

export default Information;
