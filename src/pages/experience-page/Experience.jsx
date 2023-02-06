import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import "./Experience.css";
import ExperienceForm from "../../components/forms/ExperienceForm";
import { useNavigate } from "react-router-dom";
import Resume from "../../components/resume/Resume";

import { useState } from "react";

const Experience = () => {
  const [positionFromChild, setPositionFromChild] = useState("");
  const [employeerFromChild, setEmployeerFromChild] = useState("");
  const [workStartDateFromChild, setWorkStartDateFromChild] = useState("");
  const [workEndDateFromChild, setWorkEndDateFromChild] = useState("");
  const [workDescriptionFromChild, setWorkDescriptionFromChild] = useState("");

  const handlePosition = (position) => {
    setPositionFromChild(position);
  };

  const handleEmployeer = (employeer) => {
    setEmployeerFromChild(employeer);
  };

  const handleWorkStartDate = (workStartDate) => {
    setWorkStartDateFromChild(workStartDate);
  };

  const handleWorkEndDate = (workEndDate) => {
    setWorkEndDateFromChild(workEndDate);
  };

  const handleWorkDescription = (workDescription) => {
    setWorkDescriptionFromChild(workDescription);
  };

  const navigate = useNavigate();

  const moveStartPageHandler = (e) => {
    e.preventDefault();
    console.log("move start page");
    navigate("/");
    localStorage.clear();
  };

  // console.log(workDescriptionFromChild);

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

        {
          <ExperienceForm
            onPosition={handlePosition}
            onEmployeer={handleEmployeer}
            onWorkStartDate={handleWorkStartDate}
            onWorkEndDate={handleWorkEndDate}
            onWorkDescription={handleWorkDescription}
          />
        }
      </div>
      <div className="exp-right">
        <Resume
          onPosition={positionFromChild}
          onEmployeer={employeerFromChild}
          onWorkStartDate={workStartDateFromChild}
          onWorkEndDate={workEndDateFromChild}
          onWorkDescription={workDescriptionFromChild}
        />
      </div>
    </div>
  );
};

export default Experience;
