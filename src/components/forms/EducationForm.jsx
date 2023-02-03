import React from "react";
import "./EducationForm.css";
import { useNavigate } from "react-router-dom";

const EducationForm = () => {
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
              <select>
                <option value="ბაკალავრი">ბაკალავრი</option>
                <option value="მაგისტრი">მაგისტრი</option>
                <option value="დოქტორი">დოქტორი</option>
              </select>
            </div>
            <div className="end-edu-date">
              <label htmlFor="end-edu-date">დასრულების თარიღი</label>
              <input type="date" id="end-edu-date" />
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
