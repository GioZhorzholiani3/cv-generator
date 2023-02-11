import React from "react";
import "./EducationForm.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const EducationForm = (props) => {
  const [degrees, setDegrees] = useState([]);
  const [school, setSchool] = useState("");
  const [endEducationDate, setEndEducationDate] = useState("");

  const [degreeValue, setDegreeValue] = useState("");
  const [educationDescription, setEducationDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    school: "",
    endEducationDate: "",
    degreeValue: "",
    educationDescription: "",
  });

  // useEffect(() => {
  //   const name = localStorage.getItem("name");
  //   const surname = localStorage.getItem("surname");
  //   const email = localStorage.getItem("email");
  //   const phone = localStorage.getItem("phone");
  //   const aboutMe = localStorage.getItem("aboutMe");
  //   const position = localStorage.getItem("position");
  //   const employer = localStorage.getItem("employer");
  //   const startDate = localStorage.getItem("startDate");
  //   const endDate = localStorage.getItem("endDate");
  //   const description = localStorage.getItem("description");
  //   const school = localStorage.getItem("school");
  //   const degreeValue = localStorage.getItem("degreeValue");
  //   const endEducationDate = localStorage.getItem("endEducationDate");
  //   const educationDescription = localStorage.getItem("educationDescription");
  //   const storedImage = localStorage.getItem("selectedImage");
  // }, []);

  useEffect(() => {
    const getDegrees = async () => {
      const response = await fetch(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      const data = await response.json();
      setDegrees(data);
      // console.log(data);
    };
    getDegrees();
  }, []);

  useEffect(() => {
    setDegreeValue(localStorage.getItem("degreeValue"));
    setSchool(localStorage.getItem("school"));
    setEducationDescription(localStorage.getItem("educationDescription"));
    setEndEducationDate(localStorage.getItem("endEducationDate"));
  }, []);

  const addEducationHandler = (e) => {
    e.preventDefault();
  };

  const getEduEndDataHandler = (e) => {
    setEndEducationDate(e.target.value);
    localStorage.setItem("endEducationDate", e.target.value);
    props.onSchoolEndDate(e.target.value);
  };

  const selectDegree = (e) => {
    setDegreeValue(e.target.value);
    localStorage.setItem("degreeValue", e.target.value);
    props.onDegree(e.target.value);
  };

  const schoolHandler = (e) => {
    setSchool(e.target.value);
    localStorage.setItem("school", e.target.value);
    props.onSchool(e.target.value);
  };

  const educationDescriptionHandler = (e) => {
    setEducationDescription(e.target.value);
    localStorage.setItem("educationDescription", e.target.value);
    props.onSchoolDescription(e.target.value);
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
    // navigateNext("/resume");
    let errors = {
      school: "",
      endEducationDate: "",
      degreeValue: "",
      educationDescription: "",
    };

    if (!school) {
      errors.school = "შევსება აუცილებელია";
    } else if (school.length < 2) {
      errors.school = " შეიყვანე მინიმუმ 2 სიმბოლო";
    }

    if (!endEducationDate) {
      errors.endEducationDate = "შევსება აუცილებელია";
    }

    if (!degreeValue) {
      errors.degreeValue = "ხარისხის მითითება აუცილებელია";
    }

    if (!educationDescription) {
      errors.educationDescription = "შევსება აუცილებელია";
    } else if (educationDescription.length < 2) {
      errors.educationDescription = " შეიყვანე მინიმუმ 2 სიმბოლო";
    }

    let degreeValueID;

    switch (localStorage.getItem("degreeValue")) {
      case "საშუალო სკოლის დიპლომი":
        degreeValueID = 1;
        break;
      case "ზოგადსაგანმანათლებლო დიპლომი":
        degreeValueID = 2;
        break;
      case "ბაკალავრი":
        degreeValueID = 3;
        break;
      case "მაგისტრი":
        degreeValueID = 4;
        break;
      case "დოქტორი":
        degreeValueID = 5;
        break;
      case "ასოცირებული ხარისხი":
        degreeValueID = 6;
        break;
      case "კოლეჯი(ხარისიხს გარეშე)":
        degreeValueID = 7;
        break;
      case "სხვა":
        degreeValueID = 8;
        break;
      default:
        degreeValueID = 0;
    }

    setErrorMessage(errors);

    if (
      !errors.school &&
      !errors.endEducationDate &&
      !errors.degreeValue &&
      !errors.educationDescription
    ) {
      const postData = async () => {
        // const imageFile = localStorage.getItem("selectedImage");
        // const imageBlob = new Blob([imageFile], { type: "image/jpeg" });

        // const image = new Blob([localStorage.getItem("selectedImage")], {
        //   type: "image/jpeg",
        // });

        const response = await fetch(
          "https://resume.redberryinternship.ge/api/cvs",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              token: localStorage.getItem("token"),
              name: localStorage.getItem("name"),
              surname: localStorage.getItem("surname"),
              email: localStorage.getItem("email"),
              phone_number: localStorage.getItem("phone"),
              experiences: [
                {
                  position: localStorage.getItem("position"),
                  employer: localStorage.getItem("employer"),
                  start_date: localStorage.getItem("startDate"),
                  due_date: localStorage.getItem("endDate"),
                  description: localStorage.getItem("description"),
                },
              ],
              educations: [
                {
                  degree_id: degreeValueID,
                  institute: localStorage.getItem("school"),
                  degree: localStorage.getItem("degreeValue"),
                  due_date: localStorage.getItem("endEducationDate"),
                  description: localStorage.getItem("educationDescription"),
                },
              ],
              // image: new Blob([localStorage.getItem("selectedImage")], {
              //   type: "image/jpeg",
              // }),
              image: localStorage.getItem("selectedImage"),
              aboutMe: localStorage.getItem("aboutMe"),
            }),
          }
        );

        // if (!response.ok) {
        //   throw new Error("Something went wrong");
        // }

        const data = await response.json();
        console.log(data);
      };
      postData();

      // const postData = async () => {
      //   const imageFile = localStorage.getItem("selectedImage");

      //   // Convert the image string into a Blob object
      //   const imageBlob = new Blob([imageFile], { type: "image/jpeg" });

      //   const formData = new FormData();
      //   formData.append("token", localStorage.getItem("token"));
      //   formData.append("name", localStorage.getItem("name"));
      //   formData.append("surname", localStorage.getItem("surname"));
      //   formData.append("email", localStorage.getItem("email"));
      //   formData.append("phone_number", localStorage.getItem("phone"));
      //   formData.append(
      //     "experiences",
      //     JSON.stringify([
      //       {
      //         position: localStorage.getItem("position"),
      //         employer: localStorage.getItem("employer"),
      //         start_date: localStorage.getItem("startDate"),
      //         due_date: localStorage.getItem("endDate"),
      //         description: localStorage.getItem("description"),
      //       },
      //     ])
      //   );
      //   formData.append(
      //     "educations",
      //     JSON.stringify([
      //       {
      //         degree_id: degreeValueID,
      //         institute: localStorage.getItem("school"),
      //         degree: localStorage.getItem("degreeValue"),
      //         due_date: localStorage.getItem("endEducationDate"),
      //         description: localStorage.getItem("educationDescription"),
      //       },
      //     ])
      //   );
      //   formData.append("image", imageBlob, "image.jpg");
      //   formData.append("aboutMe", localStorage.getItem("aboutMe"));

      //   const response = await fetch(
      //     "https://resume.redberryinternship.ge/api/cvs",
      //     {
      //       method: "POST",
      //       body: formData,
      //     }
      //   );

      //   if (!response.ok) {
      //     throw new Error(`Response not OK: ${response.status}`);
      //   }

      //   const data = await response.json();
      //   console.log(data);
      // };

      // postData();

      navigateNext("/resume");
      localStorage.setItem("moveFinish", 1);
    }
  };

  return (
    <div className="edu-form">
      <form>
        <div className="form-group">
          <div className="school-wraper">
            <label htmlFor="school">სასწავლებელი</label>
            <input
              value={school || ""}
              onChange={schoolHandler}
              type="text"
              placeholder="სასწავლებელი"
              className="education-input"
              id="education"
              style={errorMessage.school ? { border: "1px solid red" } : null}
            />
            {errorMessage.school && (
              <span className="error-message">{errorMessage.school}</span>
            )}
            {!errorMessage.school && <p>მინიმუმ 2 სიმბოლო</p>}
          </div>

          <div className="degree-wraper">
            <div className="degree">
              <label htmlFor="degree">ხარსხი</label>
              <select
                value={degreeValue || ""}
                onChange={selectDegree}
                placeholder="არიჩე ხარისხი"
                style={
                  errorMessage.degreeValue ? { border: "1px solid red" } : null
                }
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
                value={endEducationDate || ""}
                onChange={getEduEndDataHandler}
                type="date"
                id="end-edu-date"
                style={
                  errorMessage.endEducationDate
                    ? { border: "1px solid red" }
                    : null
                }
              />
              {errorMessage.endEducationDate && (
                <span className="error-message">
                  {errorMessage.endEducationDate}
                </span>
              )}
            </div>
          </div>

          <div className="description-wraper">
            <label htmlFor="description">აღწერა</label>
            <textarea
              value={educationDescription || ""}
              onChange={educationDescriptionHandler}
              name="description"
              id="description"
              style={
                errorMessage.educationDescription
                  ? { border: "1px solid red" }
                  : null
              }
            ></textarea>
            {errorMessage.educationDescription && (
              <span className="error-message">
                {errorMessage.educationDescription}
              </span>
            )}
          </div>
          <div className="exp-line"></div>

          <div>
            <button
              onClick={addEducationHandler}
              className="add-experience-btn"
            >
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
