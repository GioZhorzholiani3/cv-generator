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
    navigateNext("/education");
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
            />
            <p>მინიმუმ 2 სიმბოლო</p>
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
            />
            <p>მინიმუმ 2 სიმბოლო</p>
          </div>

          <div className="date-wraper">
            <div className="start-date">
              <label htmlFor="start-date-input">დაწყების თარიღი</label>
              <input
                required
                value={startDate || ""}
                onChange={startDateHandler}
                type="date"
              />
            </div>
            <div className="end-date">
              <label htmlFor="end-date-input">დასრულების თარიღი</label>
              <input
                required
                value={endDate || ""}
                onChange={endDateHandler}
                type="date"
              />
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
            ></textarea>
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
