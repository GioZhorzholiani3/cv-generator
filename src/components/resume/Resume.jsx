import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import "./Resume.css";
const Resume = () => {
  return (
    <div className="wraper">
      <div className="resume-info-wraper">
        <div className="resume-info-text">
          <div className="res-info-photo-wraper">
            <div>
              <div className="resume-name-surname">
                <h2>გიორგი</h2>
                <h2 className="res-surname">ჟორჟოლიანი</h2>
              </div>
              <div className="res-mail-wraper">
                <p>
                  <MdAlternateEmail />
                </p>
                <p className="res-mail">giorgi.zhorzholiani@redberry.ge</p>
              </div>
              <div className="res-phone-wraper">
                <p>
                  <AiOutlinePhone />
                </p>
                <p className="res-phone">+995 599 99 99 99</p>
              </div>
            </div>
            <div className="resume-img">
              <img src="" alt="IMG-20200925-134000" border="0" />
            </div>
          </div>
          <div className="res-about-me">
            <label>ჩემს შესახებ</label>
            <p>
              ჩემი სახელი გიორგი ჟორჟოლიანი ვარ და მე ვარ სამუშაო პროგრამისტი
              საქართველოში. მე ვარ სამუშაო პროგრამისტი საქართველოში. მე ვარ
              სამუშაო პროგრამისტი საქართველოში. მე ვარ სამუშაო პროგრამისტი
              საქართველოში. მე ვარ
            </p>
          </div>
        </div>
        {/* <div className="resume-img">
          <img src="" alt="IMG-20200925-134000" border="0" />
        </div> */}
      </div>
      <div className="resume-exp-wraper">
        <label className="resume-exp-label">გამოცდილება</label>
        <p className="res-exp-position">react-native-developer</p>
        <p className="res-exp-date">2019-2013</p>
        <p>
          ჩემი სახელი გიორგი ჟორჟოლიანი ვარ და მე ვარ სამუშაო პროგრამისტი
          საქართველოში. მე ვარ სამუშაო პროგრამისტი საქართველოში. მე ვარ სამუშაო
          პროგრამისტი საქართველოში. მე ვარ სამუშაო პროგრამისტი საქართველოში. მე
          ვარ
        </p>
      </div>
      <div className="res-education-wraper">
        <label className="res-education-label">განათლება</label>
        <p className="res-education-position">სამუშაო პროგრამისტი</p>
        <p className="res-education-date">2019-2013</p>
        <p>
          ჩემი სახელი გიორგი ჟორჟოლიანი ვარ და მე ვარ სამუშაო პროგრამისტი
          საქართველოში. მე ვარ სამუშაო პროგრამისტი საქართველოში. მე ვარ სამუშაო
          პროგრამისტი საქართველოში. მე ვარ სამუშაო პროგრამისტი საქართველოში. მე
          ვარ ჩემი სახელი გიორგი ჟორჟოლიანი ვარ და მე ვარ სამუშაო პროგრამისტი
          საქართველოში. მე ვარ სამუშაო პროგრამისტი საქართველოში. მე ვარ სამუშაო
          პროგრამისტი საქართველოში. მე ვარ სამუშაო პროგრამისტი საქართველოში. მე
          ვარ
        </p>
      </div>
    </div>
  );
};

export default Resume;
