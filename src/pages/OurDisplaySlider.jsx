import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./OurDisplaySlider.css";
import { TypeAnimation } from "react-type-animation";

/* clients image */
import slide1 from "../images/display_slider/Slide1.jpg";
import slide2 from "../images/display_slider/slider2.jpg";
import slide3 from "../images/display_slider/slide3.jpg";
const OurDisplaySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slide1, slide2, slide3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10100);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="ourdisplayslider_container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img alt="img1" src={image} className="slider_image_display" />
          {currentIndex === 1 && (
            <div className="text-container">
              <div className="slide-text">Powerful Software Solutions for</div>

              <div className="slide-text">Your Business MerinaSoft - </div>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Elevating Businesses Through Innovation.",
                  1000,
                ]}
                speed={50}
                style={{
                  fontSize: "2em",
                  color: "#fff",
                  fontWeight: "bold",
                }}
                repeat={Infinity}
              />
            </div>
            //CUSTOM SOFTWARE DEVELOPMENT SOLUTIONS TO DRIVE YOUR DIGITAL SUCCESS
          )}
          {currentIndex === 2 && (
            <div className="text-container">
              <div className="slide-text-2">We offer you</div>

              <TypeAnimation
                sequence={[
                  500,
                  " Web Develement", // initially rendered starting point
                  500,
                  " Software Development",
                  500,
                  " Mobile Application",
                  500,
                  " Custom Software Development",
                  500,
                  " Digital Marketing",

                  500,
                ]}
                speed={65}
                style={{
                  fontSize: "2em",
                  color: "#fff",
                  fontWeight: "bold",
                }}
                repeat={Infinity}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OurDisplaySlider;
