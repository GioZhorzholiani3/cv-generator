import React from "react";
import Resume from "../../components/resume/Resume";
import "./PersonalInfoPage.css";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PersonalInfoPage = () => {
  const navigate = useNavigate();

  const nextPageHandler = (e) => {
    e.preventDefault();
    console.log("next page");
    navigate("/experience");
  };

  const moveStartPageHandler = (e) => {
    e.preventDefault();
    console.log("move start page");
    navigate("/");
  };

  return (
    <div className="personal-info-wraper">
      <div className="personal-info-left">
        <div className="wrap-form">
          <div onClick={moveStartPageHandler} className="fisrt-page-icon">
            <AiOutlineLeft />
          </div>
          <div className="wrap-head">
            <h2>პირადი ინფო</h2>
            <p>1/3</p>
          </div>
        </div>
        <div className="info-line"></div>

        <form className="form">
          <div className="name-inputs">
            <div className="name-left">
              <label htmlFor="name">სახელი</label>
              <input placeholder="გიორგი" type="text" id="name" />
              <span>მინიმუმ 2 ქართული ასოები</span>
            </div>

            <div className="name-right">
              <label htmlFor="surname">გვარი</label>
              <input placeholder="ჟორჟოლიანი" type="text" id="surname" />
              <span>მინიმუმ 2 ქართული ასოები</span>
            </div>
          </div>
          <div className="photo-upload">
            <label htmlFor="photo">პირადი ფოტოს ატვირთვა</label>
            <button>ფოტოს ატვირთვა</button>
          </div>
          <div className="about-me">
            <p>ჩემ შესახებ (არასავალდებულო)</p>
            <textarea placeholder="ჩემ შესახებ" type="text" id="about-me" />
          </div>

          <div className="email">
            <label htmlFor="email">ელ.ფოსტა</label>
            <input
              placeholder=" giorgi.zhorzholiani@redberry.ge"
              type="text"
              id="email"
            />
            <span> უნდა მთავრდებოდეს @redberry.ge-ით </span>
          </div>
          <div className="phone">
            <label htmlFor="phone">მობილურის ნომერი</label>
            <input placeholder="+995 555 555 555" type="text" id="phone" />
            <span> უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს </span>
          </div>
          <div className="next">
            <button onClick={nextPageHandler}>შემდეგი</button>
          </div>
        </form>
      </div>
      <div className="personal-info-right">
        <Resume />
      </div>
    </div>
  );
};

export default PersonalInfoPage;
