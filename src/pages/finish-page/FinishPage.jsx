import React from "react";
import Resume from "../../components/resume/Resume";

const FinishPage = () => {
  return (
    <div className="last-page-wraper">
      <div className="resume-wraper">
        <Resume />
      </div>
      <div className="pop-up">რეზიუმე წარმატებით გაიგზავნა</div>
    </div>
  );
};

export default FinishPage;
