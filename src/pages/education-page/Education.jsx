import React from "react";
import "./Education.css";
import { AiOutlineLeft } from "react-icons/ai";
import EducationForm from "../../components/forms/EducationForm";

const Education = () => {
  return (
    <div className="wrap-edu-page">
      <div className="edu-left">
        <div className="edu-head">
          <div className="edu-icon">
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
      <div className="edu-right">right</div>
    </div>
  );
};

export default Education;
