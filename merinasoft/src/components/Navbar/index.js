/* eslint-disable no-script-url */
import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import logo from "../../images/merinasoft.png";

function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleToggle = () => {
    setIsResponsive(!isResponsive);
  };
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsResponsive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    function scrollFunction() {
      if (window.scrollY > 50) {
        document.getElementById("myTopnav").classList.add("transparent");
      } else {
        document.getElementById("myTopnav").classList.remove("transparent");
      }
    }

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  const location = useLocation();
  const handleFalse = () => {
    setIsResponsive(false);
  };
  return (
   

    <nav
      class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full top-0 z-50 shadow-custom_shadow"
      id="myTopnav"
      ref={navbarRef}
    >
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" class="flex items-center  rtl:space-x-reverse">
          <img src={logo} class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold text-textColor whitespace-nowrap dark:text-textColor">
            MERINASOFT
          </span>
        </Link>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" class="telephone text-white  font-medium rounded-lg text-sm px-4 py-2 text-center  ">

            <div className="flex items-center gap-2"><IoCall size={20}/>  +8801405700100</div>
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium   p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="w-full">
            <Link
                className={`  nav-items ${
                  location.pathname === "/" ? "activeNav " : ""
                }`}
                to="/"
                onClick={handleToggle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={` nav-items ${
                  location.pathname === "/about" ? "activeNav" : ""
                }`}
                to="/about"
                onClick={handleToggle}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`nav-items  ${
                  location.pathname === "/products" ? "activeNav" : ""
                }`}
                to="/products"
                onClick={handleToggle}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className={`nav-items  ${
                  location.pathname === "/services" ? "activeNav" : ""
                }`}
                to="/services"
                onClick={handleToggle}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={`nav-items  ${
                  location.pathname === "/gallery" ? "activeNav" : ""
                }`}
                to="/gallery"
                onClick={handleToggle}
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                className={`nav-items  ${
                  location.pathname === "/contact" ? "activeNav" : ""
                }`}
                to="/contact"
                onClick={handleToggle}
              >
                Conatct
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
