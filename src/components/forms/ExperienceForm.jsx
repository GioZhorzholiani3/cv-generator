import React, { useEffect } from "react";
import "./ExperienceForm.css";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const ExperienceForm = (props) => {
  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    position: "",
    employeer: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  useEffect(() => {
    setPosition(localStorage.getItem("position"));
    setEmployer(localStorage.getItem("employer"));
    setStartDate(localStorage.getItem("startDate"));
    setEndDate(localStorage.getItem("endDate"));
    setDescription(localStorage.getItem("description"));
  }, []);

  const positionHandler = (e) => {
    setPosition(e.target.value);
    localStorage.setItem("position", e.target.value);
    props.onPosition(e.target.value);
  };

  const employerHandler = (e) => {
    setEmployer(e.target.value);
    localStorage.setItem("employer", e.target.value);
    props.onEmployeer(e.target.value);
  };

  const startDateHandler = (e) => {
    setStartDate(e.target.value);
    localStorage.setItem("startDate", e.target.value);
    props.onWorkStartDate(e.target.value);
  };

  const endDateHandler = (e) => {
    setEndDate(e.target.value);
    localStorage.setItem("endDate", e.target.value);
    props.onWorkEndDate(e.target.value);
    // console.log(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
    localStorage.setItem("description", e.target.value);
    props.onWorkDescription(e.target.value);
    // console.log(e.target.value);
  };

  const navigateNext = useNavigate();

  const navigatePrev = useNavigate();

  const prevPageHandler = (e) => {
    e.preventDefault();
    console.log("prev page");
    navigatePrev("/personal-info");
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    console.log("next page");
    // navigateNext("/education");

    let errors = {
      position: "",
      employeer: "",
      startDate: "",
      endDate: "",
      description: "",
    };

    if (!position) {
      errors.position = "თანამდებობა აუცილებელია";
    } else if (position.length < 2) {
      errors.position = "მინიმუმ 2 სიმბოლო";
    }

    if (!employer) {
      errors.employeer = "დამსაქმებელი აუცილებელია";
    } else if (employer.length < 2) {
      errors.employeer = "მინიმუმ 2 სიმბოლო";
    }

    if (!startDate) {
      errors.startDate = "დაწყების თარიღი აუცილებელია";
    }

    if (!endDate) {
      errors.endDate = "დასრულების თარიღი აუცილებელია";
    }

    if (!description) {
      errors.description = "აღწერა აუცილებელია";
    } else if (description.length < 2) {
      errors.description = "მინიმუმ 2 სიმბოლო";
    }

    setErrorMessage(errors);

    if (
      !errors.position &&
      !errors.employeer &&
      !errors.startDate &&
      !errors.endDate &&
      !errors.description
    ) {
      navigateNext("/education");
    }
  };
  return (
    <div className="exp-form">
      <form>
        <div className="form-group">
          <div className="position-wraper">
            <label htmlFor="positon">თანამდებობა</label>
            <input
              required
              value={position || ""}
              onChange={positionHandler}
              type="text"
              placeholder="დეველოპერი, დიზაინერი ა.შ"
              className="position-input"
              id="positon"
              style={errorMessage.position ? { border: "1px solid red" } : null}
            />
            {errorMessage.position && (
              <span className="error-message">{errorMessage.position}</span>
            )}
            {!errorMessage.position && <p>მინიმუმ 2 სიმბოლო</p>}
          </div>
          <div className="employer-wraper">
            <label htmlFor="employer">დამსაქმებელი</label>
            <input
              required
              value={employer || ""}
              onChange={employerHandler}
              type="text"
              placeholder="დამსაქმებელი"
              className="employer-input"
              id="employer"
              style={
                errorMessage.employeer ? { border: "1px solid red" } : null
              }
            />
            {errorMessage.employeer && (
              <span className="error-message">{errorMessage.employeer}</span>
            )}
            {!errorMessage.employeer && <p>მინიმუმ 2 სიმბოლო</p>}
          </div>

          <div className="date-wraper">
            <div className="start-date">
              <label htmlFor="start-date-input">დაწყების თარიღი</label>
              <input
                required
                value={startDate || ""}
                onChange={startDateHandler}
                type="date"
                style={
                  errorMessage.startDate ? { border: "1px solid red" } : null
                }
              />
              {errorMessage.startDate && (
                <span className="error-message"> {errorMessage.startDate}</span>
              )}
            </div>
            <div className="end-date">
              <label htmlFor="end-date-input">დასრულების თარიღი</label>
              <input
                required
                value={endDate || ""}
                onChange={endDateHandler}
                type="date"
                style={
                  errorMessage.endDate ? { border: "1px solid red" } : null
                }
              />
              {errorMessage.endDate && (
                <span className="error-message"> {errorMessage.endDate}</span>
              )}
            </div>
          </div>

          <div className="description-wraper">
            <label htmlFor="description">აღწერა</label>
            <textarea
              required
              value={description || ""}
              onChange={descriptionHandler}
              name="description"
              id="description"
              style={
                errorMessage.description ? { border: "1px solid red" } : null
              }
            ></textarea>
            {errorMessage.description && (
              <span className="error-message"> {errorMessage.description}</span>
            )}
          </div>
          <div className="exp-line"></div>

          <div>
            <button className="add-experience-btn">
              მეტი გამოცდილების დამატება
            </button>
          </div>

          <div className="back-next">
            <button onClick={prevPageHandler} className="back-btn">
              უკან
            </button>
            <button onClick={nextPageHandler} className="next-btn">
              შემდეგი
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
