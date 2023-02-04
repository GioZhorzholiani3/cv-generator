import React from "react";
import "./Education.css";
import { AiOutlineLeft } from "react-icons/ai";
import EducationForm from "../../components/forms/EducationForm";
import { useNavigate } from "react-router-dom";
import Resume from "../../components/resume/Resume";

const Education = () => {
  const navigate = useNavigate();

  const moveStartPageHandler = (e) => {
    e.preventDefault();
    navigate("/");
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

        {<EducationForm />}
      </div>
      <div className="edu-right">
        <Resume />
      </div>
    </div>
  );
};

export default Education;
