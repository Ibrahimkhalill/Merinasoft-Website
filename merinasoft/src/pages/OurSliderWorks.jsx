import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import './OurSliderWorks.css'


class OurSliderWorks extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      galleryItems: [],
    };
  }




  render() {
    return (
      <div className='oursliderworks_root_container'>
        <AliceCarousel
          autoPlay
          autoPlayInterval="5000"
          infinite='true'
          disableButtonsControls
          disableDotsControls='false'
        >
          <div className="description_works">
            <h1>Mobile App Development </h1>
            <p>Educational Mobile Apps</p>
            <p>E-Commerce Apps</p>
            <p> Android & IOS Apps Development</p>
          </div>
          <div className="description_works">
            <h1>Softwares</h1>
            <p>Inventory Mangement Software</p>
            <p>Point of Sale(POS) Software</p>
            <p>Tour & Travels Software</p>
            <p>Hostel Management Software</p>
          </div>
          <div className="description_works">
            <h1> Web Development</h1>
            <p>E-Commerce Website</p>
            <p>Business & Corporate Website</p>
            <p>News Portal Website</p>
            <p>Educational Website</p>
          </div>

        </AliceCarousel>

      </div>
    )
  }
}
export default OurSliderWorks
