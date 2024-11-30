import React, { useEffect, useState } from "react";
import "./OurDisplaySlider.css";
import WordFlick from "./WordPick";
import SliderImage1 from "../images/SlideImage1.png";
import Slider3 from "../images/slider4.png";
import Slider2 from "../images/slider2.png";

function OurDisplaySlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const showSlides = () => {
      setSlideIndex((prevIndex) => (prevIndex % 3) + 1);
    };

    const timeout = setTimeout(showSlides, 11000);

    return () => clearTimeout(timeout);
  }, [slideIndex]);

  const handleDotClick = (index) => {
    setSlideIndex(index);
  };

  return (
    <div>
      <div className="slideshow_container">
        <div
          className={`mySlides slider_1 fade ${
            slideIndex === 1 ? "active" : ""
          }`}
        >
          <div className="content_slider_merinasoft">
            <div className="first_content ">
              <h1 className="text-3xl font-semibold tracking-wider !text-gray-50">
                <span>Powerful</span> <span>Software</span>{" "}
                <span>Solutions</span> <span>for</span> <span>Your</span>{" "}
                <span>Business</span> <span>MerinaSoft-</span>{" "}
                <span>Elevating</span> <span>Businesses,</span>{" "}
                <span>Through</span> <span>Innovation</span>{" "}
              </h1>
            </div>
            <div className="image_first">
              <img src={SliderImage1} alt="" />
            </div>
          </div>
        </div>

        <div
          className={`mySlides slider_2 flex items-center justify-center fade ${
            slideIndex === 2 ? "active" : ""
          }`}
        >
          <div className="content_slider_merinasoft mt-14">
            <div className="second_content_slider">
              <h1 className="!text-2xl font-semibold tracking-wide text-white">
                <span>Customized</span> <span>Software</span>{" "}
                <span>Development</span> <span>Options</span> <span>To</span>{" "}
                <span>Boost-</span> <span>Your</span>{" "}
                <span>Digital</span> <span>Success</span>{" "}
              </h1>
            </div>
            <div className="second_slider_image">
              <img src={Slider2} alt="" />
            </div>
          </div>
        </div>

        <div
          className={`mySlides slider_3 fade ${
            slideIndex === 3 ? "active" : ""
          }`}
        >
          <div className="offer_main_content">
            <div className="left_conetnt_offer mt-4">
              <div className="offer_content_slider">
                <div className="offer_title !text-2xl">We Offer You</div>
                <div>
                  <WordFlick />
                </div>
              </div>
            </div>

            <div className="right_conetnt_offer">
              <img src={Slider3} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Dot buttons below the slider */}
      <div className="dots_container">
        <span
          className={`dot ${slideIndex === 1 ? "active" : ""}`}
          onClick={() => handleDotClick(1)}
        ></span>
        <span
          className={`dot ${slideIndex === 2 ? "active" : ""}`}
          onClick={() => handleDotClick(2)}
        ></span>
        <span
          className={`dot ${slideIndex === 3 ? "active" : ""}`}
          onClick={() => handleDotClick(3)}
        ></span>
      </div>
      <br />
    </div>
  );
}

export default OurDisplaySlider;
