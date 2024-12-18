import "./service.css";
import Service from "../images/Service.jpg";
import Software from "../images/Software-Development-Business1--1-.jpg";
import Mobile from "../images/Mobile Application.png";
import Web from "../images/web Devlopment.webp";
import Custom from "../images/custom-software-development-services.png";
import Digital from "../images/Digital-Marketing-1.webp";
import Cloud from "../images/cloud.jpg";
import { NavLink, Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Services() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.title = "Services - Merinasoft Limited";
  }, []);
  return (
    <div className="Service_container">
      {/* <div className="service_section_image">
        <img src={Service} alt="" />
      </div> */}
      <div className="service_section_title">
        <div className="content_service">
          <h1>Services</h1>
          <p>
            This is really a significant factor "Why are you choosing this
            product or service?".Moreover, you may wonder why you take our
            products when you see the same services being offered in lots of
            companies. But we are providing the most perfect service for you,
            and our priority is the customer's satisfaction. So, you can buy our
            products with ease and without any worries.
          </p>
        </div>
        <div className="service_list_company !grid md:!grid-cols-3 grid-cols-1 gap-3">
          <Link>
            <div
              class=" !w-full border shadow-custom_shadow rounded-md "
              data-aos="flip-down"
            >
              <img
                src={Software}
                alt="Avatar"
                className="!w-full !h-[200px] object-cover rounded-t-md "
              />
              <div class="container !py-4 ">
                <h3>
                  <b>Software Development</b>
                </h3>
                <p>
                  Software Development Solutions to drive your digital success.
                  Unlock new possibilities for your business with Merinasoft
                  BD’s expert software consulting and development services.{" "}
                  <Link style={{ color: "#9715a3" }}>Learn More</Link>
                </p>
              </div>
            </div>
          </Link>

          <Link to={"/service/mobile-app-development"}>
            <div
              class=" !w-full border shadow-custom_shadow rounded-md "
              data-aos="flip-down"
            >
              <img
                src={Mobile}
                alt="Avatar"
                className="!h-[200px] object-cover rounded-t-md"
              />
              <div class="container !py-4 ">
                <h3>
                  <b>Mobile Application</b>
                </h3>
                <p>
                  Crafting High-End Mobile Experiences with Unmatched Expertise.
                  Since diving into the world of mobile development in 1018,
                  Merinasoft BD masterfully creates native, cross-platform, and
                  progressive Mobile applications.{" "}
                  <Link
                    to={"/service/mobile-app-development"}
                    style={{ color: "#9715a3" }}
                  >
                    Learn More
                  </Link>
                </p>
              </div>
            </div>
          </Link>
          <Link>
            <div
              class=" !w-full border shadow-custom_shadow rounded-md "
              data-aos="flip-down"
            >
              <img
                src={Cloud}
                alt="Avatar"
                className="!h-[200px] object-cover rounded-t-md"
              />
              <div class="container !py-4 ">
                <h3>
                  <b>Cloud Applicaion Developemnt</b>
                </h3>
                <p>
                  At Merinasoft BD, we offer cloud application development
                  services that enable businesses to build and run cloud-based
                  apps, leveraging cloud features and services provided by cloud
                  vendors.  <Link style={{ color: "#9715a3" }}>Learn More</Link>
                </p>
               
              </div>
            </div>
          </Link>
          <Link>
            <div
              class=" !w-full border shadow-custom_shadow rounded-md "
              data-aos="flip-down"
            >
              <img
                src={Web}
                alt="Avatar"
                className="!h-[200px] object-cover rounded-t-md"
              />
              <div class="container !py-4 ">
                <h3>
                  <b>Web Developemnt service</b>
                </h3>
                <p>
                  Merinasoft BD provides high-quality development such as web
                  design and development, database design & integration,
                  programming, web site maintenance, e-commerce solutions and
                  application program development.  <Link style={{ color: "#9715a3" }}>Learn More</Link>
                </p>
               
              </div>
            </div>
          </Link>

          <Link>
            <div
              class=" !w-full border shadow-custom_shadow rounded-md "
              data-aos="flip-down"
            >
              <img
                src={Custom}
                alt="Avatar"
                className="!h-[200px] object-cover rounded-t-md"
              />
              <div class="container !py-4 ">
                <h3>
                  <b>Custom Software Development</b>
                </h3>
                <p>
                  {" "}
                  Tailored to your business requirements With over 7 years of
                  experience and expertise in delivering custom software
                  development solutions for businesses across 12+ industries,
                  Merinasoft BD can provide you with powerful and reliable
                  software solutions that cater to your specific needs.  <Link style={{ color: "#9715a3" }}>Learn More</Link>
                </p>
               
              </div>
            </div>
          </Link>
          <Link>
            <div
              class=" !w-full border shadow-custom_shadow rounded-md "
              data-aos="flip-down"
            >
              <img
                src={Digital}
                alt="Avatar"
                className="!h-[200px] object-cover rounded-t-md "
              />
              <div class="container !py-4 ">
                <h3>
                  <b>Digital Marketing</b>
                </h3>
                <p className="">
                  Merinasoft bd prodide Digital marketing services to companies
                  to help them reach their target audience, improve brand
                  awareness, and drive sales. Here are some key services that a
                  Merinassoft can offer to its clients:SEO,Social Media
                  Marketing,Content Marketing,Email Marketing.  <Link style={{ color: "#9715a3" }}>Learn More</Link>
                </p>
               
              </div>
            </div>
          </Link>
        </div>

        <div className=" text-white rounded-md w-[80%] my-10  py-10 contuct_us_last_part">
          <div className="flex flex-col items-center gap-5 px-2">
            <h1 className="text-3xl font-medium">Want to Join Us as a Partner?</h1>
            <p className="md:w-[50%] text-center mt-2">
              Merinasoft BD has offered partnerships to any industry in the
              world. By partnership, both parties are benefited via Network,
              Product, Service, and Solution.
            </p>
            <Link
              to={{
                pathname: "/contact",
                state: { active: true }, // Example state object
              }}
              className="contact_button"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
