import React, { useEffect } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { useState } from "react";
import "./Resume.css";

const Resume = (props) => {
  // console.log(props.onWorkDescription);
  useEffect(() => {
    setResumeName(localStorage.getItem("name"));
    setResumeSurname(localStorage.getItem("surname"));
    setResumeEmail(localStorage.getItem("email"));
    setResumePhone(localStorage.getItem("phone"));
    setResumeAboutMe(localStorage.getItem("aboutMe"));
    setResumePosition(localStorage.getItem("position"));
    setResumeEmployeer(localStorage.getItem("employer"));
    setResWorkStartDate(localStorage.getItem("startDate"));
    setResWorkEndDate(localStorage.getItem("endDate"));
    setResWorkDescription(localStorage.getItem("description"));
    setResSchool(localStorage.getItem("school"));
    setResSchoolDegree(localStorage.getItem("degreeValue"));
    setResSchoolEndDate(localStorage.getItem("endEducationDate"));
    setResEducationDescription(localStorage.getItem("educationDescription"));
  }, []);

  const [resumeName, setResumeName] = useState("");
  const [resumeSurname, setResumeSurname] = useState("");
  const [resumeEmail, setResumeEmail] = useState("");
  const [resumePhone, setResumePhone] = useState("");
  const [resumeAboutMe, setResumeAboutMe] = useState("");
  const [resumePosition, setResumePosition] = useState("");
  const [resumeEmployeer, setResumeEmployeer] = useState("");
  const [resWorkStartDate, setResWorkStartDate] = useState("");
  const [resWorkEndDate, setResWorkEndDate] = useState("");
  const [resWorkDescription, setResWorkDescription] = useState("");
  const [resSchool, setResSchool] = useState("");
  const [resSchoolDegree, setResSchoolDegree] = useState("");
  const [resSchoolEndDate, setResSchoolEndDate] = useState("");
  const [resEducationDescription, setResEducationDescription] = useState("");

  // console.log(props.onWorkDesctiption);

  return (
    <div className="wraper">
      <div className="resume-info-wraper">
        <div className="resume-info-text">
          <div className="res-info-photo-wraper">
            <div>
              <div className="resume-name-surname">
                <h2>{props.onName ? props.onName : resumeName}</h2>
                <h2 className="res-surname">
                  {props.onSurname ? props.onSurname : resumeSurname}
                </h2>
              </div>
              <div className="res-mail-wraper">
                <p>
                  <MdAlternateEmail />
                </p>
                <p className="res-mail">
                  {props.onEmail ? props.onEmail : resumeEmail}
                </p>
              </div>
              <div className="res-phone-wraper">
                <p>
                  <AiOutlinePhone />
                </p>
                <p className="res-phone">
                  {props.onPhone ? props.onPhone : resumePhone}
                </p>
              </div>
            </div>
            {/* <div className="resume-img">
              <img src="" alt="IMG-20200925-134000" border="0" />
            </div> */}
          </div>
          <div className="res-about-me">
            <label>ჩემს შესახებ</label>
            <p>{props.onAboutMe ? props.onAboutMe : resumeAboutMe}</p>
          </div>
        </div>
        <div className="resume-img">
          <img src="" alt="IMG-20200925-134000" border="0" />
        </div>
      </div>
      <div className="resume-exp-wraper">
        <label className="resume-exp-label">გამოცდილება</label>
        <p className="res-exp-position">
          {props.onPosition ? props.onPosition : resumePosition}
          {(props.onPosition || resumePosition) && " , "}
          {props.onEmployeer ? props.onEmployeer : resumeEmployeer}
        </p>
        {/* <p className="res-exp-date">{`${resWorkStartDate}-${resWorkEndDate}`}</p> */}
        <div className="wrap-start-end-date">
          <p className="res-exp-date">
            {props.onWorkStartDate ? props.onWorkStartDate : resWorkStartDate}
            {(props.onWorkStartDate || resWorkStartDate) && "/  "}
          </p>
          <p className="res-exp-date">
            {props.onWorkEndDate ? props.onWorkEndDate : resWorkEndDate}
          </p>
        </div>
        <p>
          {props.onWorkDescription
            ? props.onWorkDescription
            : resWorkDescription}
        </p>
      </div>
      <div className="res-education-wraper">
        <label className="res-education-label">განათლება</label>
        <p className="res-education-position">
          {props.onSchool ? props.onSchool : resSchool}
          {(props.onSchool || resSchool) && " , "}
          {props.onDegree ? props.onDegree : resSchoolDegree}
        </p>
        <p className="res-education-date">
          {props.onSchoolEndDate ? props.onSchoolEndDate : resSchoolEndDate}
        </p>
        <p>
          {props.onSchoolDescription
            ? props.onSchoolDescription
            : resEducationDescription}
        </p>
      </div>
    </div>
  );
};

export default Resume;
