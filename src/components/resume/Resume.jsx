import React, { useEffect } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { useState } from "react";
import "./Resume.css";

const Resume = () => {
  useEffect(() => {
    setResumeName(localStorage.getItem("name"));
    setResumeSurname(localStorage.getItem("surname"));
    setResumeEmail(localStorage.getItem("email"));
    setResumePhone(localStorage.getItem("resumePhone"));
    setResumeAboutMe(localStorage.getItem("aboutMe"));
    setResumePosition(localStorage.getItem("position"));
    setResumeEmployeer(localStorage.getItem("employer"));
    setResWorkStartDate(localStorage.getItem("startDate"));
    setResWorkEndDate(localStorage.getItem("endDate"));
    setResWordDescription(localStorage.getItem("description"));
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
  const [resWordDescription, setResWordDescription] = useState("");
  const [resSchool, setResSchool] = useState("");
  const [resSchoolDegree, setResSchoolDegree] = useState("");
  const [resSchoolEndDate, setResSchoolEndDate] = useState("");
  const [resEducationDescription, setResEducationDescription] = useState("");

  return (
    <div className="wraper">
      <div className="resume-info-wraper">
        <div className="resume-info-text">
          <div className="res-info-photo-wraper">
            <div>
              <div className="resume-name-surname">
                <h2>{resumeName}</h2>
                <h2 className="res-surname">{resumeSurname}</h2>
              </div>
              <div className="res-mail-wraper">
                <p>
                  <MdAlternateEmail />
                </p>
                <p className="res-mail">{resumeEmail}</p>
              </div>
              <div className="res-phone-wraper">
                <p>
                  <AiOutlinePhone />
                </p>
                <p className="res-phone">{resumePhone}</p>
              </div>
            </div>
            <div className="resume-img">
              <img src="" alt="IMG-20200925-134000" border="0" />
            </div>
          </div>
          <div className="res-about-me">
            <label>ჩემს შესახებ</label>
            <p>{resumeAboutMe}</p>
          </div>
        </div>
        {/* <div className="resume-img">
          <img src="" alt="IMG-20200925-134000" border="0" />
        </div> */}
      </div>
      <div className="resume-exp-wraper">
        <label className="resume-exp-label">გამოცდილება</label>
        <p className="res-exp-position">
          {resumePosition} {resumeEmployeer}
        </p>
        <p className="res-exp-date">{`${resWorkStartDate}-${resWorkEndDate}`}</p>
        <p>{resWordDescription}</p>
      </div>
      <div className="res-education-wraper">
        <label className="res-education-label">განათლება</label>
        <p className="res-education-position">{`${resSchool} , ${resSchoolDegree}`}</p>
        <p className="res-education-date">{resSchoolEndDate}</p>
        <p>{resEducationDescription}</p>
      </div>
    </div>
  );
};

export default Resume;
