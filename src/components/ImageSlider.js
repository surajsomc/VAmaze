import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const images = [
    { src: require("./MyImages/network2.jpg"), alt: "Image 1" },
    { src: require("./MyImages/network.jpg"), alt: "Image 2" },
    { src: require("./MyImages/Picture1.jpg"), alt: "Image 3" }
  ];

  return (
    <div className="slider-container">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="image"
      />
      <div className="indicator-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? "indicator active" : "indicator"}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;