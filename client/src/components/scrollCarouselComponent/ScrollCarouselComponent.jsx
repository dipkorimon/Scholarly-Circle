import React, { useState } from "react";
import "./scrollCarouselComponent.scss";
import ScrollCarousel from "scroll-carousel-react";

const ScrollCarouselComponent = () => {
  const [values] = useState([]);

  return (
    <ScrollCarousel
      autoplay
      autoplaySpeed={8}
      speed={7}
      onReady={() => console.log("I am ready")}
    >
      {values.map((item) => (
        <div key={item} className="carousel">
          <img src={item.photo} alt="" />
        </div>
      ))}
    </ScrollCarousel>
  );
};

export default ScrollCarouselComponent;
