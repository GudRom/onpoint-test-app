import "./FirstPage.css";

function FirstPage(props) {
  const whatNext = () => {
    props.setActiveIndex(1);
  } 
  return (
    <div className="first-page">
      <div className="first-page__main-block">
        <p className="first-page__welcome">привет&#44;</p>
        <div className="first-page__center-block">
          <p className="first-page__title">
            это&nbsp;
            <strong className="first-page__title">не</strong> коммерческое
            задание
          </p>
          <button className="first-page__button" onClick={whatNext}></button>
        </div>
      </div>
      <ul className="first-page__microbs-list">
        <li className="first-page__microbs first-page__microbs_1"></li>
        <li className="first-page__microbs first-page__microbs_2"></li>
        <li className="first-page__microbs first-page__microbs_3"></li>
        <li className="first-page__microbs first-page__microbs_4"></li>
        <li className="first-page__microbs first-page__microbs_5"></li>
        <li className="first-page__microbs first-page__microbs_6"></li>
        <li className="first-page__microbs first-page__microbs_7"></li>
        <li className="first-page__microbs first-page__microbs_8"></li>
        <li className="first-page__microbs first-page__microbs_9"></li>
      </ul>
    </div>
  );
}

export default FirstPage;
