import React, { useEffect, useState } from "react";
import "./slider.css";
import WordFlick from "./WordPick";
import SliderImage1 from "../images/SlideImage1.png";
import Slider3 from "../images/slider4.png";
import Slider2 from "../images/slider2.png";
function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const showSlides = () => {
      setSlideIndex((prevIndex) => (prevIndex % 3) + 1);
    };

    const timeout = setTimeout(showSlides, 11000);

    return () => clearTimeout(timeout);
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container">
        <div
          className={`mySlides slider_1 fade ${
            slideIndex === 1 ? "active" : ""
          }`}
        >
          {/* <div className=""> Software Development Solution To drive Your Digital Success</div> */}
          <div className="content_slider_merinasoft">
            <div className=" first_content">
              <h1>
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
          className={`mySlides slider_2 fade ${
            slideIndex === 2 ? "active" : ""
          }`}
        >
          <div className="content_slider_merinasoft">
            <div className="second_content_slider">
              <h1>
                <span>Customized</span> <span>Software</span>{" "}
                <span>Development</span> <span>Options</span>{" "}
                <span>To</span> <span>Boost-</span>{" "}
                <span>Your</span> <span style={{color:"blue"}}>Digital</span> <span style={{color:"blue"}}>Success</span>{" "}
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
          {/* <div className=""> Software Development Solution To drive Your Digital Success</div> */}
          <div className="offer_main_content">
            <div className=" left_conetnt_offer">
              <div className="offer_content_slider">
                <div className="offer_title">We Offer You</div>
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
      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Slideshow;
