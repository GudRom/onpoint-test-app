import "./ThirdPage.css";
import bottle from "../../../images/bottle.svg";
import Popup from "../../Popup/Popup";
import { useState } from "react";

function ThirdPage() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className="third-page">
      <Popup
        isPopupVisible={isPopupVisible}
        setIsPopupVisible={setIsPopupVisible}
      />
      <div className="third-page__bottle-box">
        <img className="third-page__bottle" src={bottle} alt="bottle" />
        <ul className="third-page__bubbles-list">
          <li className="third-page__bubble third-page__bubble_1"></li>
          <li className="third-page__bubble third-page__bubble_2"></li>
          <li className="third-page__bubble third-page__bubble_3"></li>
          <li className="third-page__bubble third-page__bubble_4"></li>
          <li className="third-page__bubble third-page__bubble_5"></li>
          <li className="third-page__bubble third-page__bubble_6"></li>
          <li className="third-page__bubble third-page__bubble_7"></li>
          <li className="third-page__bubble third-page__bubble_8"></li>
        </ul>
      </div>
      <div className="third-page__main">
        <div className="third-page__title-box">
          <p className="third-page__subtitle">{isPopupVisible ? "преимущества" : "ключевое сообщение"}</p>
          <h3 className="third-page__title">
            Brend<strong>XY</strong>
          </h3>
        </div>
        <div className="third-page__info-block">
          <div className="third-page__dish-box">
            <div className="third-page__dish"></div>
            <p className="third-page__text">
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultricies
            </p>
          </div>
          <div className="third-page__calendar-box">
            <div className="third-page__calendar"></div>
            <p className="third-page__text">A arcu cursus vitae</p>
          </div>
          <button
            className="third-page__popup-btn"
            onClick={() => {
              setIsPopupVisible(true);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
