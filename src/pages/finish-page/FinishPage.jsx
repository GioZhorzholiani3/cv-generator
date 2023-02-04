import React from "react";
import Resume from "../../components/resume/Resume";
import "./FinishPage.css";

import { useNavigate } from "react-router-dom";
const FinishPage = () => {
  const navigate = useNavigate();

  const goStartPage = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="last-page-wraper">
      <div className="resume-wraper">
        <Resume />
      </div>
      <div className="pop-up">
        <div>რეზიუმე წარმატებით გაიგზავნა</div>
        <div onClick={goStartPage} className="btn-close">
          x
        </div>
      </div>
    </div>
  );
};

export default FinishPage;
