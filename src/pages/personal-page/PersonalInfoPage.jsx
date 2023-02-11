import React, { useEffect, useLayoutEffect } from "react";
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

  const [selectedImage, setSelectedImage] = useState("");

  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    image: "",
  });

  // const [nameValid, setNameValid] = useState(false);
  // const [surnameValid, setSurnameValid] = useState(false);
  // const [emailValid, setEmailValid] = useState(false);
  // const [phoneValid, setPhoneValid] = useState(false);

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setSurname(localStorage.getItem("surname"));
    setEmail(localStorage.getItem("email"));
    setPhone(localStorage.getItem("phone"));
    setAboutMe(localStorage.getItem("aboutMe"));
    setSelectedImage(localStorage.getItem("selectedImage"));
  }, []);

  // const handleImageSelect = (event) => {
  //   // setSelectedImage((event.target.files[0]));
  //   setSelectedImage(URL.createObjectURL(event.target.files[0]));
  //   localStorage.setItem("selectedImage", event.target.files[0]);
  // };

  const handleImageSelect = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
      localStorage.setItem("selectedImage", reader.result);
    };

    reader.readAsDataURL(image);
  };

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

    // console.log(nameValid, surnameValid, emailValid, phoneValid);
    console.log(errorMessage);
    // console.log(
    //   errorMessage.firstName,
    //   errorMessage.lastName,
    //   errorMessage.email,
    //   errorMessage.phoneNumber
    // );

    let errors = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      image: "",
    };
    const georgianAlphabet = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ";

    //firstname validation
    if (!name) {
      // setNameValid(false);

      errors.firstName = "სახელი აუცილებელია";
    } else if (name.length < 2) {
      // setNameValid(false);

      errors.firstName = "მინიმუმ 2 ქართული ასოები";
    } else if (
      !name.split("").every((letter) => georgianAlphabet.includes(letter))
    ) {
      // setNameValid(false);
      errors.firstName = "მხოლოდ ქართული ასოებია ნებადართული";
    }

    //lastname validation

    if (!surname) {
      // setSurnameValid(false);

      errors.lastName = "გვარი აუცილებელია";
    } else if (surname.length < 2) {
      // setSurnameValid(false);
      errors.lastName = "მინიმუმ 2 ქართული ასოები";
    } else if (
      !surname.split("").every((letter) => georgianAlphabet.includes(letter))
    ) {
      // setSurnameValid(false);
      errors.lastName = "მხოლოდ ქართული ასოებია ნებადართული";
    }

    //email validation

    if (!email) {
      // setEmailValid(false);
      errors.email = "ელ.ფოსტა აუცილებელია";
    } else if (!email.endsWith("@redberry.ge")) {
      // setEmailValid(false);
      errors.email = "ელ.ფოსტა უნდა დასრულდეს @redberry.ge-ით";
    }

    //phone validation
    if (!phone) {
      errors.phoneNumber = "ნომერი აუცილებელია";
    } else if (phone && phone.substr(0, 4) !== "+995") {
      errors.phoneNumber = "ნომერი უნდა იწყებოდეს +995-ით";
    } else if (phone && phone.length > 13) {
      errors.phoneNumber = "ნომერი გრძელია";
    } else if (phone && phone.length < 13) {
      errors.phoneNumber = "ნომერი მოკლეა";
    } else {
      // setPhoneValid(true);
    }

    setErrorMessage(errors);

    //image validation

    if (!selectedImage) {
      errors.image = "ფოტო აუცილებელია";
    }

    if (
      !errors.firstName &&
      !errors.lastName &&
      !errors.email &&
      !errors.phoneNumber &&
      !errors.image
    ) {
      navigate("/experience");
      localStorage.setItem("moveExperience", 1);
    }
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
                style={
                  errorMessage.firstName ? { border: "1px solid red" } : null
                }
              />
              {errorMessage.firstName && (
                <p className="error-message">{errorMessage.firstName}</p>
              )}

              {!errorMessage.firstName && <span>მინიმუმ 2 ქართული ასო</span>}
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
                style={
                  errorMessage.lastName ? { border: "1px solid red" } : null
                }
              />
              {errorMessage.lastName && (
                <p className="error-message">{errorMessage.lastName}</p>
              )}

              {!errorMessage.lastName && <span>მინიმუმ 2 ქართული ასო</span>}
            </div>
          </div>
          <div className="photo-upload">
            <label>პირადი ფოტოს ატვირთვა</label>
            {/* <button onClick={imageHandler} required>
              ფოტოს ატვირთვა
            </button> */}
            {/* <button onChange={handleFileChange} accept="image/*">
              atvirtva
            </button> */}
            {/* <div> */}
            <input
              type="file"
              id="photo"
              onChange={handleImageSelect}
              accept="image/*"
            />
            <label
              className="photo-btn"
              htmlFor="photo"
              style={errorMessage.image ? { border: "1px solid red" } : null}
            >
              ფოტოს არჩევა
            </label>
            {errorMessage.image && (
              <p className="error-message">{errorMessage.image}</p>
            )}
            {/* {selectedImage && <p>{selectedImage.name}</p>}
            </div> */}
            {/* {selectedImage && (
              <div>
                <p>Selected Image:</p>
                <img src={selectedImage} alt="Selected" />
              </div>
            )} */}
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
              style={errorMessage.email ? { border: "1px solid red" } : null}
            />
            {errorMessage.email && (
              <p className="error-message">{errorMessage.email}</p>
            )}

            {!errorMessage.email && (
              <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
            )}
            {/* <span> უნდა მთავრდებოდეს @redberry.ge-ით </span> */}
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
              style={
                errorMessage.phoneNumber ? { border: "1px solid red" } : null
              }
            />
            {errorMessage.phoneNumber && (
              <p className="error-message">{errorMessage.phoneNumber}</p>
            )}

            {!errorMessage.phoneNumber && (
              <span>უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს</span>
            )}
            {/* <span> უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს </span> */}
          </div>
          <div className="next">
            <button onClick={nextPageHandler}>შემდეგი</button>
          </div>
        </form>
      </div>
      <div className="personal-info-right">
        <Resume
          onName={name}
          onSurname={surname}
          onEmail={email}
          onPhone={phone}
          onAboutMe={aboutMe}
          onImage={selectedImage}
        />
      </div>
    </div>
  );
};

export default PersonalInfoPage;
