import React from "react";
import "./ExperienceForm.css";
import { useNavigate } from "react-router-dom";

const ExperienceForm = () => {
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
              <input type="date" />
            </div>
            <div className="end-date">
              <label htmlFor="end-date-input">დასრულების თარიღი</label>
              <input type="date" />
            </div>
          </div>

          <div className="description-wraper">
            <label htmlFor="description">აღწერა</label>
            <textarea name="description" id="description"></textarea>
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
