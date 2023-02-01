import React, { useState } from "react";
import "./ImageSliderWithArrows.css";

function ImageSliderWithArrows() {
  const images = [
    {
      src: require("./MyImages/computer.png"), alt: "Image 1" ,
      text: "We do coding"
    },
    {
      src: require("./MyImages/man.jpg"), alt: "Image 2" ,
      text: "We have forests"
    },
    {
      src: require("./MyImages/lightbulb.jpg"), alt: "Image 3" ,
      text: "We promote beaches"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="image-slider-with-text">
      <button className="arrow prev-arrow" onClick={prevImage}>
        &lt;
      </button>
      <div className="image-and-text">
        <img src={images[currentIndex].src} alt="slider-image" className="image2" />
        <p className="text">{images[currentIndex].text}</p>
      </div>
      <button className="arrow next-arrow" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
}

export default ImageSliderWithArrows;

