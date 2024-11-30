import React, { useEffect, useState } from "react";
import "../pages/Contact.css";
import { useLocation } from "react-router-dom";

import merinaSoftLogo from "../images/merinasoft_logo.png";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "@material-ui/core";
import data from "../flat-ui__data-Sun Mar 31 2024.json";
import Location from "../images/location.png";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Contact = (props) => {
  const [Country, setCountries] = useState("");
  const [full_name, setFullName] = useState("");
  useEffect(() => {
    document.title = "Contact - Merinasoft Limited";
    window.scrollTo(0, 0);
  }, []);

  const lat = 23.7318169;
  const lng = 90.4203821;

  const handleOpnMapClick = () => {
    window.open("https://maps.google.com?q=" + lat + "," + lng);
  };

  return (
    <div className="contact-root-container">
      <br />

      {/* <h1> Our Contact </h1> */}
      <div className="contact_form">
        <div className="first_column">
          <div className="contact">
            <h2 className="conatct_title">Contact with us</h2>
            <p className="contact_messages">
              This is really a significant factor "Why are you choosing this
              product or service?".
              <span style={{ color: "#690177" }}>Just Send us a message</span>
            </p>
          </div>
          <div className="address">
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>
              Office Address,
            </div>
            <div className="location">
              <img src={Location} alt="" />

              <p>2nd Floor, A&A Tower, 173 Arambagh, Dhaka 1000</p>
            </div>
          </div>
        </div>
        <div className="second_column_contact_form">
          <h2 class="header__text">Reach us right here...</h2>
          <form action="">
            <div className="input_field_contact_form">
              <input
                type="text"
                placeholder="Enter Full Name"
                onChange={(e) => setFullName(e.target.value)}
              />
              <select>
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

            <div className="input_field_contact_form">
              <select name="" id="">
                <option value="">Select Service</option>
                <option value="">Software Development</option>
                <option value="">Mobile App Development</option>
                <option value="">Custom Software Development</option>
                <option value="">Web Development</option>
                <option value="">Digital Marketing</option>
              </select>
              <select name="" id="">
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
      <div className="address-container">
        <div className="map-outside">
          <MapContainer center={[lat, lng]} zoom={17} className="map-container">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}>
              <Popup>MerinaSoft BD</Popup>
            </Marker>
          </MapContainer>
          <br />
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={handleOpnMapClick}
          >
            Click here to open in Google Map
          </Button>
        </div>
        <div className="address-outside">
          <div className="location-container">
            <br />
            <img className="address-logo" src={merinaSoftLogo} alt="" />
            <p className="address-header">
              <b> MerinaSoft </b>
            </p>
            <p className="address-content">
              {" "}
              2nd Floor, A&A Tower, 173 Arambagh, Dhaka 1000{" "}
            </p>
            <p className="address-content">
              {" "}
              Website: <b> www.merinasoft.com </b>
            </p>
            <p className="address-content">
              {" "}
              Email: <b> merinasoftteam@gmail.com </b>
            </p>
            <p className="address-content">
              {" "}
              Phone: <b> +88017405700100, +8801704473813 </b>
            </p>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
