import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import "./Experience.css";
import ExperienceForm from "../../components/forms/ExperienceForm";
const Experience = () => {
  return (
    <div className="wrap-exp-page">
      <div className="exp-left">
        <div className="exp-head">
          <div className="exp-icon">
            <AiOutlineLeft />
          </div>
          <div className="exp-text">
            <div className="wrap-exp-text">
              <h2>გამოცდილება</h2>
              <p>2/3</p>
            </div>
            <div className="exp-head-line"></div>
          </div>
        </div>

        {<ExperienceForm />}
      </div>
      <div className="exp-right">right</div>
    </div>
  );
};

export default Experience;
