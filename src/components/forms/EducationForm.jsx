import React from "react";
import "./EducationForm.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const EducationForm = () => {
  const [degrees, setDegrees] = useState([]);

  const [endEducationDate, setEndEducationDate] = useState("");

  const [degreeValue, setDegreeValue] = useState("");

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

  const selectDegree = (e) => {
    setDegreeValue(e.target.value);
    // console.log(e.target.value);
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

  const getEduEndData = (e) => {
    setEndEducationDate(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="edu-form">
      <form>
        <div className="form-group">
          <div className="school-wraper">
            <label htmlFor="school">სასწავლებელი</label>
            <input
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
              <select onChange={selectDegree} placeholder="არიჩე ხარისხი">
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
              <input onChange={getEduEndData} type="date" id="end-edu-date" />
            </div>
          </div>

          <div className="description-wraper">
            <label htmlFor="description">აღწერა</label>
            <textarea name="description" id="description"></textarea>
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
