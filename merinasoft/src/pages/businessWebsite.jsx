import React, { useEffect } from 'react';
import '../pages/businessWebsite.css';

// import p1 from '../images/products/p1.jpg';
// import p2 from '../images/products/p2.jpg';
// import p3 from '../images/products/p3.jpg';
// import p4 from '../images/products/p4.jpg';
// import p5 from '../images/products/p5.jpg';
import p1 from "../images/Gallery1.jpg"
import p2 from "../images/Gallery2.jpg"
import p3 from "../images/Gallery3.jpg"
import p4 from "../images/Gallery4.jpg"
import p5 from "../images/GallerY5.jpg"

const BusinessWebsite = () => {
  useEffect(()=>{
    document.title ="Gallery - Merinasoft Limited"
    window.scrollTo(0, 0);
  },[])
  return (
    <div id='gallery_container'>
      <h2 className='product_header'>Gallery </h2>
      <div className='image_section_gallery'>

      <img className='product_image' src={p1} alt="p1" />
      <img className='product_image' src={p2} alt="p2" />
      <img className='product_image' src={p3} alt="p3" />
      <img className='product_image' src={p4} alt="p4" />
      <img className='product_image' src={p5} alt="p5" />
      </div>
    </div>
  );
};

export default BusinessWebsite;
