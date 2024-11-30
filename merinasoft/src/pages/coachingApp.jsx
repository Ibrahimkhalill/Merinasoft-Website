import './coachingApp.css'
import React, { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Form from 'react-bootstrap/Form';

import img1 from '../images/tut/img1.PNG'
import img2 from '../images/tut/img2.PNG'


const CoachingApp = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
    window.scrollTo(0, 0);
  }, [])

  const [switchState, setSwitchState] = useState(true);
  const [language, setLanguage] = useState("English");

  const handleChange = (e) => {
    setSwitchState(!switchState)
    if (switchState === false) {
      setLanguage("English");
    }
    else {
      setLanguage("বাংলা");
    }
  }


  return (
    <div>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label={language}
          defaultChecked={switchState}
          onChange={handleChange}
          className="language_switch"
        />
      </Form>
      {switchState ? (
        <div className='root_container'>

          <div className="card" id='jute_coils' data-aos="flip-up">
            <img className="card_image" src={img1} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Home</div>
              <p className="card_description">
                This is a education application targeted studuent of HSC named <b>The Universal Teacher - TUT</b>. It is revolutionary application for the students in Bangladesh.
                <br /><br />
                 This application has several features. One of the greatest feature that student can buy courses from any where in Bangladesh. There are two available options for students that is offline and online. Online courses has also live Q&A facility. Offline and online courses has also course material facility.
                 <br /><br />
                 This application has online payment system so it very easier buy courses. There is routine segment for the students who are engaged with online module.
                 <br /><br />
                 There is an online mcq question answer segment where student can take their exam at any time and also his all result show in one place segment.
                 <br /><br />
                 There is contact section where student can get support 24/7. They can contact over phone, telegram and email.
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Course Buy</div>
              <p className="card_description">
                In Course bu segment students are asked to give some basic information like name, college name and roll. After selecting prefered course then go for next where they can do paymente over mobile tracsaction (Bkash, Nagad, Rocket etc) sevice or card which are available in Bangladesh. After successful payment course module is available for student. 
              </p>
            </div>
            <img className="card_image" src={img2} alt="Jute Rope" />
          </div>

          

        </div>
      ) : (
        <div className='root_container'>
         
         <div className="card" id='jute_coils' data-aos="flip-up">
            <img className="card_image" src={img1} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Home</div>
              <p className="card_description">
                This is a education application targeted studuent of HSC named <b>The Universal Teacher - TUT</b>. It is revolutionary application for the students in Bangladesh.
                <br /><br />
                 This application has several features. One of the greatest feature that student can buy courses from any where in Bangladesh. There are two available options for students that is offline and online. Online courses has also live Q&A facility. Offline and online courses has also course material facility.
                 <br /><br />
                 This application has online payment system so it very easier buy courses. There is routine segment for the students who are engaged with online module.
                 <br /><br />
                 There is an online mcq question answer segment where student can take their exam at any time and also his all result show in one place segment.
                 <br /><br />
                 There is contact section where student can get support 24/7. They can contact over phone, telegram and email.
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Course Buy</div>
              <p className="card_description">
                In Course bu segment students are asked to give some basic information like name, college name and roll. After selecting prefered course then go for next where they can do paymente over mobile tracsaction (Bkash, Nagad, Rocket etc) sevice or card which are available in Bangladesh. After successful payment course module is available for student. 
              </p>
            </div>
            <img className="card_image" src={img2} alt="Jute Rope" />
          </div>

          

        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
};

export default CoachingApp;
