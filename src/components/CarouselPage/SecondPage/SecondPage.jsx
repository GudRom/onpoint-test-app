import { useState, useCallback } from "react";
import "./SecondPage.css";

function SecondPage({ activeIndex }) {
  const [isGrip, setIsGrip] = useState(false);
  const [shift, setShift] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const onTouchDown = (evt) => {
    setIsGrip(true);
    setTouchStart(evt.touches[0].clientY);
  };

  const touchMove = useCallback(
    (evt) => {
      if (!isGrip) return;
      const yPosition = evt.touches[0].clientY;
      const currentShift = clamp(yPosition - touchStart + shift, 0, 362);
      setShift(currentShift);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isGrip, touchStart]
  );

  const touchEnd = () => {
    setIsGrip(false);
  };

  return (
    <div className="second-page">
      <div className="second-page__body">
        <p className="second-page__title">текст сообщения</p>
        <div className="second-page__info">
          <div className="second-page__scroll-box">
            <div className="second-page__thumb" onTouchStart={onTouchDown} onTouchMove={touchMove} onTouchEnd={touchEnd} style={{ top: `${shift}px`}}></div>
            <div className="second-page__track"></div>
          </div>
          <div className="second-page__white-box">
            <div className="second-page__text-wrapper">
              <div className="second-page__text-box" style={{ transform: `translateY(-${shift}px)`}}>
                <p className="second-page__text">
                  <strong>Lorem ipsum dolor sit amet,</strong> consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt
                  ut&nbsp;labore et&nbsp;dolore magna aliqua. Duis ut diam quam
                  nulla. Mauris in&nbsp;aliquam sem fringilla ut&nbsp;morbi
                  tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam
                  eget felis. Nulla pharetra diam sit amet nisl. Eget nulla
                  facilisi etiam dignissim diam quis enim lobortis. Est sit amet
                  facilisis magna. Neque laoreet suspendisse interdum
                  consectetur libero&nbsp;id. Nec ullamcorper sit amet risus
                  nullam eget felis eget. Mollis aliquam ut&nbsp;porttitor leo
                  a&nbsp;diam sollicitudin tempor&nbsp;id. Euismod quis viverra
                  nibh cras pulvinar mattis nunc. Massa massa ultricies
                  mi&nbsp;quis. Sit amet massa vitae tortor condimentum lacinia.
                  Et&nbsp;malesuada fames ac&nbsp;turpis egestas integer eget.
                  Elementum pulvinar etiam non quam lacus suspendisse faucibus
                  interdum posuere.
                </p>
                <p className="second-page__text">
                  Amet justo donec enim diam vulputate ut&nbsp;pharetra sit.
                  Risus ultricies tristique nulla aliquet enim tortor
                  at&nbsp;auctor. Velit sed ullamcorper morbi tincidunt ornare
                  massa. Quis hendrerit dolor magna eget est lorem ipsum. Etiam
                  dignissim diam quis enim. Gravida neque convallis a&nbsp;cras.
                  Ut&nbsp;enim blandit volutpat maecenas volutpat. Mauris sit
                  amet massa vitae tortor condimentum lacinia quis vel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="second-page__sperm-list">
        <li className={`second-page__sperm second-page__sperm_1 ${activeIndex === 1 ? "second-page__sperm_1_anima" : ""}`}></li>
        <li className={`second-page__sperm second-page__sperm_2 ${activeIndex === 1 ? "second-page__sperm_2_anima" : ""}`}></li>
        <li className={`second-page__sperm second-page__sperm_3 ${activeIndex === 1 ? "second-page__sperm_3_anima" : ""}`}></li>
        <li className={`second-page__sperm second-page__sperm_4 ${activeIndex === 1 ? "second-page__sperm_4_anima" : ""}`}></li>
        <li className={`second-page__sperm second-page__sperm_5 ${activeIndex === 1 ? "second-page__sperm_5_anima" : ""}`}></li>
      </ul>
    </div>
  );
}

export default SecondPage;
