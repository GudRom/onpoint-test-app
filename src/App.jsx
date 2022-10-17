import { useCallback, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import CarouselPage from "./components/CarouselPage/CarouselPage";
import FirstPage from "./components/CarouselPage/FirstPage/FirstPage";
import SecondPage from "./components/CarouselPage/SecondPage/SecondPage";
import ThirdPage from "./components/CarouselPage/ThirdPage/ThirdPage";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (evt) => {
    const touchDown = evt.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = useCallback(
    (evt) => {
      const touchDown = touchPosition;
      const currentTouch = evt.touches[0].clientX;
      const def = touchDown - currentTouch;

      if (touchDown === null) {
        return;
      }

      if (def > 10 && activeIndex < 2) {
        setActiveIndex(activeIndex + 1);
      }

      if (def < -10 && activeIndex !== 0) {
        setActiveIndex(activeIndex - 1);
      }

      setTouchPosition(null);
    },
    [touchPosition, activeIndex]
  );

  const goHome = () => {
    activeIndex !== 0 && setActiveIndex(0);
  };

  return (
    <>
      <Carousel
        goHome={goHome}
        activeIndex={activeIndex}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
      >
        <CarouselPage>
          <FirstPage
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </CarouselPage>
        <CarouselPage>
          <SecondPage
            activeIndex={activeIndex}
          />
        </CarouselPage>
        <CarouselPage>
          <ThirdPage
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </CarouselPage>
      </Carousel>
    </>
  );
}

export default App;
