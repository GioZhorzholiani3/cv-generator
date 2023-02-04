import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import "./Experience.css";
import ExperienceForm from "../../components/forms/ExperienceForm";
import { useNavigate } from "react-router-dom";
import Resume from "../../components/resume/Resume";

const Experience = () => {
  const navigate = useNavigate();

  const moveStartPageHandler = (e) => {
    e.preventDefault();
    console.log("move start page");
    navigate("/");
  };

  return (
    <div className="wrap-exp-page">
      <div className="exp-left">
        <div className="exp-head">
          <div className="exp-icon" onClick={moveStartPageHandler}>
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
      <div className="exp-right">
        <Resume />
      </div>
    </div>
  );
};

export default Experience;
