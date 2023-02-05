import React, { useEffect } from "react";
import { useState } from "react";
import Resume from "../../components/resume/Resume";
import "./PersonalInfoPage.css";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PersonalInfoPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aboutMe, setAboutMe] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setSurname(localStorage.getItem("surname"));
    setEmail(localStorage.getItem("email"));
    setPhone(localStorage.getItem("phone"));
    setAboutMe(localStorage.getItem("aboutMe"));
  }, []);

  const nameInputHandler = (e) => {
    setName(e.target.value);
    localStorage.setItem("name", e.target.value);
  };

  const surnameInputHandler = (e) => {
    setSurname(e.target.value);
    localStorage.setItem("surname", e.target.value);
  };

  const emailInputHandler = (e) => {
    setEmail(e.target.value);
    localStorage.setItem("email", e.target.value);
  };

  const phoneInputHandler = (e) => {
    setPhone(e.target.value);
    localStorage.setItem("phone", e.target.value);
  };

  const aboutMeHandler = (e) => {
    setAboutMe(e.target.value);
    localStorage.setItem("aboutMe", e.target.value);
  };

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
    localStorage.clear();
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
              <input
                required
                onChange={nameInputHandler}
                placeholder="გიორგი"
                type="text"
                id="name"
                value={name || ""}
              />
              <span>მინიმუმ 2 ქართული ასოები</span>
            </div>

            <div className="name-right">
              <label htmlFor="surname">გვარი</label>
              <input
                required
                onChange={surnameInputHandler}
                placeholder="ჟორჟოლიანი"
                type="text"
                id="surname"
                value={surname || ""}
              />
              <span>მინიმუმ 2 ქართული ასოები</span>
            </div>
          </div>
          <div className="photo-upload">
            <label htmlFor="photo">პირადი ფოტოს ატვირთვა</label>
            <button required>ფოტოს ატვირთვა</button>
          </div>
          <div className="about-me">
            <p>ჩემ შესახებ (არასავალდებულო)</p>
            <textarea
              onChange={aboutMeHandler}
              placeholder="ჩემ შესახებ"
              type="text"
              id="about-me"
              value={aboutMe || ""}
            />
          </div>

          <div className="email">
            <label htmlFor="email">ელ.ფოსტა</label>
            <input
              required
              onChange={emailInputHandler}
              placeholder=" giorgi.zhorzholiani@redberry.ge"
              type="email"
              id="email"
              value={email || ""}
            />
            <span> უნდა მთავრდებოდეს @redberry.ge-ით </span>
          </div>
          <div className="phone">
            <label htmlFor="phone">მობილურის ნომერი</label>
            <input
              required
              onChange={phoneInputHandler}
              placeholder="+995 555 555 555"
              type="text"
              id="phone"
              value={phone || ""}
            />
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
