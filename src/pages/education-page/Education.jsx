import React from "react";
import "./Education.css";
import { AiOutlineLeft } from "react-icons/ai";
import EducationForm from "../../components/forms/EducationForm";
import { useNavigate } from "react-router-dom";
import Resume from "../../components/resume/Resume";
import { useState } from "react";

const Education = () => {
  const [schoolFromChild, setSchoolFromChild] = useState("");
  const [degreeFromChild, setDegreeFromChild] = useState("");
  const [schoolEndDateFromChild, setSchoolEndDateFromChild] = useState("");
  const [schoolDescriptionFromChild, setSchoolDescriptionFromChild] =
    useState("");

  const handleSchool = (school) => {
    setSchoolFromChild(school);
  };

  const handleDegree = (degree) => {
    setDegreeFromChild(degree);
  };

  const handleSchoolEndDate = (schoolEndDate) => {
    setSchoolEndDateFromChild(schoolEndDate);
  };

  const handleSchoolDescription = (schoolDescription) => {
    setSchoolDescriptionFromChild(schoolDescription);
  };

  const navigate = useNavigate();

  const moveStartPageHandler = (e) => {
    e.preventDefault();
    navigate("/");
    localStorage.clear();
  };

  return (
    <div className="wrap-edu-page">
      <div className="edu-left">
        <div className="edu-head">
          <div className="edu-icon" onClick={moveStartPageHandler}>
            <AiOutlineLeft />
          </div>
          <div className="edu-text">
            <div className="wrap-edu-text">
              <h2>განათლება</h2>
              <p>3/3</p>
            </div>
            <div className="edu-head-line"></div>
          </div>
        </div>

        {
          <EducationForm
            onSchool={handleSchool}
            onDegree={handleDegree}
            onSchoolEndDate={handleSchoolEndDate}
            onSchoolDescription={handleSchoolDescription}
          />
        }
      </div>
      <div className="edu-right">
        <Resume
          onSchool={schoolFromChild}
          onDegree={degreeFromChild}
          onSchoolEndDate={schoolEndDateFromChild}
          onSchoolDescription={schoolDescriptionFromChild}
        />
      </div>
    </div>
  );
};

export default Education;
