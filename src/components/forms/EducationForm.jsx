import React from "react";
import "./EducationForm.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const EducationForm = () => {
  const [degrees, setDegrees] = useState([]);
  const [school, setSchool] = useState("");
  const [endEducationDate, setEndEducationDate] = useState("");
  const [degreeValue, setDegreeValue] = useState("");
  const [educationDescription, setEducationDescription] = useState("");

  useEffect(() => {
    const getDegrees = async () => {
      const response = await fetch(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      const data = await response.json();
      setDegrees(data);
      console.log(data);
    };
    getDegrees();
  }, []);

  useEffect(() => {
    setDegreeValue(localStorage.getItem("degreeValue"));
    setSchool(localStorage.getItem("school"));
    setEducationDescription(localStorage.getItem("educationDescription"));
    setEndEducationDate(localStorage.getItem("endEducationDate"));
  }, []);

  const getEduEndDataHandler = (e) => {
    setEndEducationDate(e.target.value);
    localStorage.setItem("endEducationDate", e.target.value);
  };

  const selectDegree = (e) => {
    setDegreeValue(e.target.value);
    localStorage.setItem("degreeValue", e.target.value);
  };

  const schoolHandler = (e) => {
    setSchool(e.target.value);
    localStorage.setItem("school", e.target.value);
  };

  const educationDescriptionHandler = (e) => {
    setEducationDescription(e.target.value);
    localStorage.setItem("educationDescription", e.target.value);
  };

  const navigateNext = useNavigate();

  const navigatePrev = useNavigate();

  const prevPageHandler = (e) => {
    e.preventDefault();
    console.log("prev page");
    navigatePrev("/experience");
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    console.log("next page");
    navigateNext("/resume");
  };

  return (
    <div className="edu-form">
      <form>
        <div className="form-group">
          <div className="school-wraper">
            <label htmlFor="school">სასწავლებელი</label>
            <input
              value={school}
              onChange={schoolHandler}
              type="text"
              placeholder="სასწავლებელი"
              className="education-input"
              id="education"
            />
            <p>მინიმუმ 2 სიმბოლო</p>
          </div>

          <div className="degree-wraper">
            <div className="degree">
              <label htmlFor="degree">ხარსხი</label>
              <select
                value={degreeValue}
                onChange={selectDegree}
                placeholder="არიჩე ხარისხი"
              >
                <option hidden value={""}>
                  აირჩიე ხარისხი
                </option>
                {degrees &&
                  degrees.map((degree) => {
                    return (
                      <option key={degree.id} value={degree.title}>
                        {degree.title}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="end-edu-date">
              <label htmlFor="end-edu-date">დასრულების თარიღი</label>
              <input
                value={endEducationDate}
                onChange={getEduEndDataHandler}
                type="date"
                id="end-edu-date"
              />
            </div>
          </div>

          <div className="description-wraper">
            <label htmlFor="description">აღწერა</label>
            <textarea
              value={educationDescription}
              onChange={educationDescriptionHandler}
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="exp-line"></div>

          <div>
            <button className="add-experience-btn">
              სხვა სასწავლებლის დამატება
            </button>
          </div>
          <div className="back-next">
            <button onClick={prevPageHandler} className="back-btn">
              უკან
            </button>
            <button onClick={nextPageHandler} className="next-btn">
              დასრულება
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationForm;
