/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./slider.css";
import WordFlick from "./WordPick";
import SliderImage1 from "../images/SlideImage1.png";
import Slider3 from "../images/slider4.png";
import Slider2 from "../images/slider2.png";

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const showSlides = () => {
      setSlideIndex((prevIndex) => (prevIndex % 3) + 1);
    };

    const timeout = setTimeout(showSlides, 10000);

    return () => clearTimeout(timeout);
  }, [slideIndex]);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex % 3) + 1);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => ((prevIndex - 2 + 3) % 3) + 1);
  };

  return (
    <div>
      <div
        className="slideshow-container"
        onMouseEnter={() => setShowButtons(true)}
        onMouseLeave={() => setShowButtons(false)}
      >
        <div
          className={`mySlides  slider_11 fade ${
            slideIndex === 2 ? "active" : ""
          }`}
        >
          <div className="content_slider_merinasoft11 ">
            <div className="first_content ">
              <h1 className="text-3xl tracking-wide font-semibold">
                <span className="">Powerful</span> <span>Software Solutions</span>
                <span> </span> <span>for</span> <span>Your</span>
                <br />
                <span>Business</span> <span>MerinaSoft-</span>
                <span>Elevating</span> <span>Businesses,</span>
                <span>Through</span> <span>Innovation</span>
              </h1>
            </div>
          </div>
        </div>

        <div
          className={`mySlides slider_12 fade ${
            slideIndex === 1 ? "active" : ""
          }`}
        >
          <div className="content_slider_merinasoft12">
            <div className="second_content_slider1">
              <div className="heading_second_slide">
                <h1>Your One-Stop Software Partner</h1>
              </div>
              <div className="heading2_second_slide">
                We provide complete end-to-end software products and services{" "}
                <br />
                from design to development.
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mySlides slider_13 fade ${
            slideIndex === 3 ? "active" : ""
          }`}
        >
          <div className="offer_main_content1">
            <div className="left_conetnt_offer1">
              <div className="offer_content_slider1">
                <div className="offer_title">We Offer You</div>
                <div>
                  <WordFlick />
                </div>
              </div>
            </div>
          </div>
        </div>

        {showButtons && (
          <>
            <a className="prev" onClick={prevSlide}>
              &#10094;
            </a>
            <a className="next" onClick={nextSlide}>
              &#10095;
            </a>
          </>
        )}
        {/* <div className="dots-container">
          <span
            className={`dot ${slideIndex === 1 ? "active" : ""}`}
            onClick={() => setSlideIndex(1)}
          ></span>
          <span
            className={`dot ${slideIndex === 2 ? "active" : ""}`}
            onClick={() => setSlideIndex(2)}
          ></span>
          <span
            className={`dot ${slideIndex === 3 ? "active" : ""}`}
            onClick={() => setSlideIndex(3)}
          ></span>
        </div> */}
      </div>
      <br />
    </div>
  );
}

export default Slideshow;
