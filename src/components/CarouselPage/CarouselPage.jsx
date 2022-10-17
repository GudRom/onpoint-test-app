import "./CarouselPage.css";

function CarouselPage({ children, minWidth }) {
  return (
    <section className="carousel-page" style={{ minWidth: minWidth }}>
      {children}
    </section>
  );
}

export default CarouselPage;
