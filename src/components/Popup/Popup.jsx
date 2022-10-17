import "./Popup.css";
import { useState } from "react";

function Popup(props) {
  const [isSecondPage, setIsSecondPage] = useState(false);
  const [page, setPage] = useState(0);
  const nextPage = () => {
    if (page === 0) {
      setPage(1);
      setIsSecondPage(true);
    }
  };

  const prevPage = () => {
    if (page === 1) {
      setPage(0);
      setIsSecondPage(false);
    }
  };

  return (
    <div className={`popup ${props.isPopupVisible ? "popup_visible" : ""}`}>
      <div className="popup__box">
        <button
          className="popup__close-btn"
          onClick={() => {
            props.setIsPopupVisible(false);
          }}
        ></button>
        <div className="popup__list-box">
          <div
            className="popup__list-wrapper"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            <ul className="popup__list-part">
              <li className="popup__list-item">
                <p className="popup__number">01</p>
                <p className="popup__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </li>
              <li className="popup__list-item">
                <p className="popup__number">02</p>
                <p className="popup__text">
                  Faucibus pulvinar elementum integer enim
                </p>
              </li>
              <li className="popup__list-item">
                <p className="popup__number">03</p>
                <p className="popup__text">
                  Faucibus pulvinar elementum integer enim
                </p>
              </li>
            </ul>
            <ul className="popup__list-part">
              <li className="popup__list-item">
                <p className="popup__number">04</p>
                <p className="popup__text">
                  Mi bibendum neque egestas congue quisque egestas diam
                </p>
              </li>
              <li className="popup__list-item">
                <p className="popup__number">05</p>
                <p className="popup__text">
                  Venenatis lectus magna fringilla urna
                </p>
              </li>
              <li className="popup__list-item">
                <p className="popup__number">06</p>
                <p className="popup__text">
                  Venenatis lectus magna fringilla urna
                </p>
              </li>
            </ul>
          </div>
          <div className="popup__switch-box">
            <button
              className="popup__switch-btn popup__switch-btn_rotate"
              onClick={prevPage}
            ></button>
            <ul className="popup__page-circle-box">
              <li className={`popup__page-circle ${
                  isSecondPage ? "" : "popup__page-circle_pink"
                }`}></li>
              <li
                className={`popup__page-circle ${
                  isSecondPage ? "popup__page-circle_pink" : ""
                }`}
              ></li>
            </ul>
            <button className="popup__switch-btn" onClick={nextPage}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
