/* eslint-disable no-script-url */
import React, { useState, useEffect, useRef } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { IoCall } from "react-icons/io5";

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

  return (
    <div
      className={`topnav ${isResponsive ? "responsive" : ""}`}
      id="myTopnav"
      ref={navbarRef}
    >
      <div className="navmenu">
        <Link className="nav-items company left" to="/">
          MERINASOFT
        </Link>

        <Link
          className={`nav-items ${
            location.pathname === "/about" ? "activeNav" : ""
          }`}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`nav-items ${
            location.pathname === "/products" ? "activeNav" : ""
          }`}
          to="/products"
        >
          Products
        </Link>
        <Link
          className={`nav-items ${
            location.pathname === "/services" ? "activeNav" : ""
          }`}
          to="/services"
        >
          Services
        </Link>
        <Link
          className={`nav-items ${
            location.pathname === "/gallery" ? "activeNav" : ""
          }`}
          to="/gallery"
        >
          Gallery
        </Link>

        <Link
          className={`nav-items ${
            location.pathname === "/career" ? "activeNav" : ""
          }`}
          to="/career"
        >
          Career
        </Link>
        <Link
          className={`nav-items ${
            location.pathname === "/contact" ? "activeNav" : ""
          }`}
          to="/contact"
        >
          Contact
        </Link>

        <a
          href="tel:+8801405700100"
          style={{ fontSize: "1.1vw" }}
          className="telephone"
        >
          <IoCall /> +8801405700100
        </a>
        <Link
          href="javascript:void(0);"
          className="icon"
          onClick={handleToggle}
        >
          <i className="fa fa-bars"></i>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
