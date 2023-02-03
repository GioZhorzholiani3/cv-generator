import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>REDBERRY</h1>
        <div className="line"></div>
      </div>
      <div className="add-resume">
        <button className="add-resume-btn">
          <Link className="add-resume-link" to="/personal-info">
            რეზიუმეს დამატება
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
