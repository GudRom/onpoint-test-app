import { Children, cloneElement } from "react";
import logo from "../../images/logo.png";
import "./Carousel.css";

function Carousel({ children, activeIndex, goHome, handleTouchStart, handleTouchMove }) {

  return (
    <div className="carousel">
      <button className="carousel__home-btn" onClick={goHome}>
        <div className="carousel__line"></div>
      </button>
      <div className="carousel__wrapper" style={{ transform: `translateX(-${activeIndex * 100}%)` }} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
        {Children.map(children, (child, index) => {
          return cloneElement(child, { minWidth: "100%" });
        })}
      </div>
      <img className="carousel__logo" src={logo} alt="logo" />
    </div>
  );
}

export default Carousel;
