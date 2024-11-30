import React, { useEffect, useState } from "react";
import "./HomePageTemp.css";

import Sofware from "../images/Software.png";
import web from "../images/web.png";
import Mobile from "../images/Mobile.png";
import marketing from "../images/Marketing.png";
import Cloud from "../images/Cloud.png";
import TitleCard from "../images/Saly-13@2x.webp";
import ClientAll from "../images/clients/client.png";
import ClientAnimation from "../images/client animation.png";
import python from "../images/python.png";
import django from "../images/django.png";
import node from "../images/node.png";
import reactjs from "../images/react.png";
import spring from "../images/spring.png";
import bootstrap from "../images/bootstrap.png";
import talwind from "../images/Tailwind.png";
import Java from "../images/Java-Logo.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import MessengerBot from "../components/Navbar/MessengerBot.js";
import Basis from "../images/Basis.jpg";
import data from "../flat-ui__data-Sun Mar 31 2024.json";
import Slider from "../pages/Slider.jsx";
import Clent from "../images/clients/clent_small.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Merinasot from "../images/merinasoft.png";
import OurDisplaySlider from "./OurDisplaySlider.jsx";

const HomePageTemp = () => {
  const [Country, setCountries] = useState("");
  const [full_name, setFullName] = useState("");
  useEffect(() => {
    document.title = "Home - Merinasoft Limited";
    Aos.init({ duration: 1200 });
    window.scrollTo(0, 0);
  }, []);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add("fadeInUp");
  //         } else {
  //           entry.target.classList.remove("fadeInUp");
  //         }
  //       });
  //     },
  //     { threshold: 1 } // Adjust threshold as needed
  //   );

  //   observer.observe(sectionRef.current);

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  return (
    <div className="homepage_root_container">
      {/* <div className="name_container">
        <span className="the_name">MerinaSoft BD</span>
        <span className="the_title">The Safe Hand For IT Concern</span>
      </div> */}
      <div className="display_slider_merinasoft">
        <Slider />
      </div>
      <div className="display_slider2_merinasoft">
        <OurDisplaySlider />
      </div>

      <div className="vision_container">
        <p className="ourvision_header text-3xl">
          WHO <span>WE ARE?</span>{" "}
        </p>
        <div className="ourvision_desc">
          MerinaSoft is a leading software development company in Bangladesh
          since 2018, dedicated to transforming your business with efficient and
          modern IT solutions. Our team of skilled developers creates custom
          software applications that streamline your operations, boost
          efficiency, and drive growth.
          <p>
            In 2018, the company started as a Mobile application development
            solutions provider to the local market. Now, it continued to serve
            these groups with innovative solutions that helped them stay ahead
            of the curve. Today, its work spans across sectors like healthcare,
            education, retail, banking, and more.
          </p>
        </div>
      </div>

      <h1 className="simple_title !text-3xl font-bold md:ml-10 ml-7 my-2 uppercase">
        Our <span className="service_title">Services</span>
      </h1>
      {/* <OurSliderWorks /> */}

      <div className="our_services_container">
        <div className="our_services_item_list">
          <div className="our_services_item !py-5">
            <div className="service_header">
              <div className="service_iamge">
                <img src={Sofware} width={40} alt="" />
              </div>
              <span className="service_text">Software Developemnt</span>
            </div>
            <div className="service-description">
              Software Development Solutions to drive your digital success.
              Unlock new possibilities for your business with Merinasoft BD’s
              expert software consulting and development services.
            </div>
          </div>
          <div className="our_services_item !py-5">
            <div className="service_header">
              <div className="service_image">
                <img src={Sofware} width={40} alt="" />
              </div>{" "}
              <span className="service_text">Custom Software Developemnt</span>
            </div>
            <div className="service-description">
              Tailored to your business requirements With over 7 years of
              experience and expertise in delivering custom software development
              solutions for businesses across 12+ industries, Merinasoft BD can
              provide you with powerful and reliable software solutions that
              cater to your specific needs.
            </div>
          </div>
          <div className="our_services_item !py-5">
            <div className="service_header">
              <div className="service_image3">
                <img src={web} width={40} alt="" />
              </div>
              <span className="service_text">Web Developemnt service</span>
            </div>
            <div className="service-description">
              Merinasoft BD provides high-quality development such as web design
              and development, database design & integration, programming, web
              site maintenance, e-commerce solutions and application program
              development.
            </div>
          </div>
        </div>
        <div className="our_services_item_list">
          <div className="our_services_item !py-5">
            <div className="service_header">
              <div className="service_image4">
                <img src={Mobile} width={40} alt="" />
              </div>
              <span className="service_text"> Mobile Application</span>
            </div>
            <div className="service-description">
              Crafting High-End Mobile Experiences with Unmatched Expertise.
              Since diving into the world of mobile development in 1018,
              Merinasoft BD masterfully creates native, cross-platform, and
              progressive web applications.
            </div>
          </div>
          <div className="our_services_item !py-5">
            <div className="service_header">
              <div className="service_image5">
                <img src={marketing} width={40} alt="" />
              </div>
              <span className="service_text">Digital Marketing</span>
            </div>
            <div className="service-description">
              Merinasoft bd prodide Digital marketing services to companies to
              help them reach their target audience, improve brand awareness,
              and drive sales. Here are some key services that a Merinassoft can
              offer to its clients:SEO,Social Media Marketing,Content
              Marketing,Email Marketing
            </div>
          </div>
          <div className="our_services_item">
            <div className="service_header">
              <div className="service_image6">
                <img src={Cloud} width={40} alt="" />
              </div>
              <span className="service_text">
                {" "}
                Cloud Applicaion Developemnt{" "}
              </span>
            </div>
            <div className="service-description">
              At Merinasoft BD, we offer cloud application development services
              that enable businesses to build and run cloud-based apps,
              leveraging cloud features and services provided by cloud vendors.
            </div>
          </div>
        </div>
      </div>

      <h1 className="simple_title !text-3xl font-bold">
        Our <span className="radiant_clients">Radiant Clients</span> <br />{" "}
        <span>Says Somethings About Us</span>
      </h1>
      <div className="our_clients_says">
        <div class="content-slider">
          <div class="slider">
            <div class="mask">
              <ul>
                <li class="anim1">
                  <div class="quote">
                    I really can’t say enough superlative things to describe
                    Merinassoft’s level of service and skill. Professional,
                    highly skilled, informative, responsive, fast, easy to
                    communicate with – in other words everything I was looking
                    for in a programmer. I would HIGHLY recommend this
                    provider!!
                  </div>
                  <div class="source">- Ibrahim Khalil</div>
                  <div class="source"> Managing director</div>
                  <div class="source"> Wata Chemicals Limited</div>
                </li>
                <li class="anim2">
                  <div class="quote">
                    Merinassoft is an absolutely great company to work with.
                    They work fast, precise and have great communication skills.
                    I would consider them experts in programming and I have and
                    will use them for multiple projects in the future.
                  </div>
                  <div class="source">- Another Person</div>
                </li>
                <li class="anim3">
                  <div class="quote">
                    I have 100% trust in Merinassoft to perform the work I’ve
                    requested and not only that to look out for my best
                    interests! They are the best you can get, you should have no
                    hestitance in hiring them for your project.
                  </div>
                  <div class="source">- Yet Another Person</div>
                </li>
                <li class="anim4">
                  <div class="quote">
                    I really can’t say enough superlative things to describe
                    Merinassoft’s level of service and skill. Professional,
                    highly skilled, informative, responsive, fast, easy to
                    communicate with – in other words everything I was looking
                    for in a programmer. I would HIGHLY recommend this
                    provider!!
                  </div>
                  <div class="source">- Fourth Person</div>
                </li>
                <li class="anim5">
                  <div class="quote">
                    Merinassoft is an absolutely great company to work with.
                    They work fast, precise and have great communication skills.
                    I would consider them experts in programming and I have and
                    will use them for multiple projects in the future.
                  </div>
                  <div class="source">- Fifth Person</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clinet_animation_div">
          <img src={ClientAnimation} alt="" />
        </div>
      </div>

      <h1 className="simple_title !text-3xl font-bold md:ml-10 ml-7 my-2 uppercase">
      <span className="service_title">Technology</span> We used 
      </h1>
      <div className="technology_used_list ">
        <div className="technology_name">
          <img src={reactjs} alt="" />
        </div>
        <div className="technology_name">
          <img src={node} alt="" />
        </div>

        <div className="technology_name">
          <img src={spring} alt="" />
        </div>
        <div className="technology_name">
          <img src={python} alt="" />
        </div>

        <div className="technology_name">
          <img src={django} alt="" />
        </div>
        <div className="technology_name">
          <img src={bootstrap} alt="" />
        </div>
        <div className="technology_name">
          <img src={talwind} alt="" />
        </div>
        <div className="technology_name">
          <img src={Java} alt="" />
        </div>
      </div>
      <div className="organizations_clinet flex items-center justify-center px-4">
        <div className="image_main_content_clinet ">
          <div className="title_who_had">
            <div className="title_left">
              <div className="title_line"></div>
              <div className="headline !text-3xl">
                Who <span>We</span> have <span> Works</span> with
              </div>
            </div>
            <div className="title_right">
              <img src={TitleCard} alt="" />
            </div>
          </div>
          <div className="big_clent">
            <img src={ClientAll} alt="" />
          </div>
          <div className="small_clent">
            <img src={Clent} alt="" />
          </div>
        </div>
      </div>

      

      {/* <h1 className="simple_title">
        Conatct <span className="radiant_clients ">Us</span>
      </h1> */}
      <div className="contact_form !py-3 flex gap-5">
        <div className="first_column">
          <div className="contact">
            <h3 className="text-xl font-medium">Contact with us</h3>
            <p>
              It's very easy to get in touch with us. Just use the contact form
              or pay us a visit for a coffee at the office.
            </p>
          </div>
          <div className="address flex flex-col gap-4 pb-2">
            <h3 className="text-xl font-medium">Merinasoft Limited,</h3>
            <p>
              2nd Floor, A&A Tower, <br />
              173 Arambagh, Dhaka 1000
            </p>
          </div>
          <div className="gap !gap-5">
            <p>Mob: +88014405700100(Office)</p>
            <p>Mob: +8801704473813 (HR) </p>

            <p>Mob: +8801686357311(Marketing & Sales) </p>
            <p>merinasoftteam@gmail.com</p>
            <p>merinasof.official@gmail.com</p>
          </div>
        </div>
        <div className="second_column_contact_form">
          <h2 class="header__text">Reach us quickly…</h2>
          <form action="">
            <div className="input_field_contact_form">
              <input
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setFullName(e.target.value)}
              />
              <select className="md:!w-[20vw]">
                <option value="Bangladesh">Bangladesh</option>
                {data.map(
                  (country) =>
                    // Exclude Bangladesh from the options
                    country.Name !== "Bangladesh" && (
                      <option key={country.Name} value={country.Name}>
                        {country.Name}
                      </option>
                    )
                )}
              </select>
            </div>

            <div className="input_field_contact_form">
              <input type="text" placeholder="Enter Your Email " />
              <input type="text" placeholder="Enter Your Phone Number" />
            </div>

            <div className="input_field_contact_form ">
              <select  className="md:!w-[20vw] w-full">
                <option value="">Select Service</option>
                <option value="">Software Development</option>
                <option value="">Mobile App Development</option>
                <option value="">Custom Software Development</option>
                <option value="">Web Development</option>
                <option value="">Digital Marketing</option>
              </select>
              <select className="md:!w-[20vw]">
                <option value="">Select Price</option>
                <option value="">0-15000</option>
                <option value="">15000-3000</option>
                <option value="">30000-50000</option>
                <option value="">50000-1,00000</option>
              </select>
            </div>
            <div className="text_area">
              <textarea type="text" placeholder="Write Your Messages" />
            </div>
            <div className="submit_button">
              <button>Submit Message</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        {/* <MessengerBot /> */}
        <FloatingWhatsApp
          phoneNumber="+8801746185116"
          allowClickAway={true}
          accountName="Merinasoft"
          statusMessage="Typically replies within 1 hour"
          className="floating_whatsup"
          avatar={Merinasot}
        />
      </div>
      <br />
    </div>
  );
};

export default HomePageTemp;
