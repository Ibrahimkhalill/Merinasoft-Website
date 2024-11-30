import React, { useEffect, useState } from "react";
import MerinasoftLogo from "../images/merinasoft.png";
import Computer from "../images/icon/computer.png";
import Hardwarea_Sanatary from "../images/icon/hardwarea_sanatary.png";
import Kaporer_Business from "../images/icon/kaporer_business.png";
import Khabar_Icon from "../images/icon/khabar_icon.png";
import Pharmacy from "../images/icon/pharmacy.png";
import Rod_Cement from "../images/icon/rod_cement.png";
import Shoes_Business from "../images/icon/shoes_business.png";
import Super_Shop from "../images/icon/super_shop.png";
import { IoArrowRedoSharp } from "react-icons/io5";
import { IoArrowUndo } from "react-icons/io5";
import { TbArrowBigDownLineFilled } from "react-icons/tb";
import { Modal } from "antd";
import { IoClose } from "react-icons/io5";
import { FaHandPointUp } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import SupershpeImage from "../images/modalimg/supermarket.jpg";
import Computershop from "../images/modalimg/computershop.png";
import PharmacyShop from "../images/modalimg/pharmacyshop.png";
const BusniessSoftware = () => {
  const [visible, setVisible] = useState(false);
  const [computerBrand, setComputerBrand] = useState(false);
  const [superShop, setSupershop] = useState(false);
  const [pharmacyShop, setPharmacyShop] = useState(false);
  const [shoeShop, setShows] = useState(false);
  const [restorant, setRestorant] = useState(false);
  const [clothshop, setClothshop] = useState(false);
  const [senataryShop, setSenataryShop] = useState(false);
  const [hardwareShop, setHardwareShop] = useState(false);
  const [cementShop, setCementShop] = useState(false);
  const [view, setView] = useState("");
  const [isCancelVisible, setIsCancelVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true); // To control cancel icon visibility
  const [buttonAnimationVisible, setButtonAnimationVisible] = useState(true);
  const handleCancelDemo = () => {
    setView(""); // Reset view to hide video
    setIsCancelVisible(false); // Hide cancel icon
    setIsAnimating(true);
  };

  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  const showComputerSope = () => {
    setComputerBrand(true);
    setButtonAnimationVisible(false);
  };

  const handleCancelComputer = () => {
    setComputerBrand(false);
  };

  const showSupershop = () => {
    setSupershop(true);
    setButtonAnimationVisible(false);
  };
  const handleCancelSupershop = () => {
    setSupershop(false);
  };

  // Pharmacy

  const showPharmacyShop = () => {
    setPharmacyShop(true);
    setButtonAnimationVisible(false);
  };

  const handleCancelPharmacy = () => {
    setPharmacyShop(false);
  };

  // Cloth

  const showClothShop = () => {
    setClothshop(true);
    setButtonAnimationVisible(false);
  };

  const handleCancelClothShop = () => {
    setClothshop(false);
  };

  // shows

  const showShowShop = () => {
    setShows(true);
    setButtonAnimationVisible(false);
  };
  const handleCancelShowShop = () => {
    setShows(false);
  };

  // Cement

  const showCementShop = () => {
    setCementShop(true);
    setButtonAnimationVisible(false);
  };

  const handleCancelCement = () => {
    setCementShop(false);
  };

  // Senetary

  const showSenetaryShop = () => {
    setSenataryShop(true);
    setButtonAnimationVisible(false);
  };

  const handleCancelSenetaryShop = () => {
    setSenataryShop(false);
  };

  // Restorent

  const showRestorent = () => {
    setRestorant(true);
    setButtonAnimationVisible(false);
  };

  const handleCancelRestorent = () => {
    setRestorant(false);
  };

  //
  return (
    <div className="h-[48rem] w-full flex items-center justify-center">
      <div className="bg-gray-900 w-[11rem] h-[11rem] rounded-full flex items-center justify-center">
        <div className="bg-blue-900 w-[10.5rem] h-[10.5rem] rounded-full gap-4 flex flex-col items-center justify-center">
          <span className="bg-white w-[4rem] h-[4rem] rounded-full flex items-center justify-center">
            <img
              src={MerinasoftLogo}
              className="w-[4rem] h-[4rem] rounded-full"
              alt="Merinasoft Logo"
            />
          </span>

          <h2 className="font-bold text-xl text-white text-center">
            {" "}
            বিজনেস <span className="block">সফ্টওয়্যার</span>
          </h2>
        </div>
      </div>
      {/* Box seection */}
      <section>
        <div
          className="relative cursor-pointer"
          onClick={() => {
            showComputerSope();
            setButtonAnimationVisible(false);
          }}
        >
          <div className="bg-black hover:scale-105 hover:shadow-xl hover:shadow-gray-800 active:scale-95 w-[8rem] h-[8rem] rounded-full flex items-center justify-center absolute top-[-14rem] left-[-2.5rem] z-10">
            <div className="bg-blue-900 w-[7.5rem] h-[7.5rem] rounded-full gap-2 flex flex-col items-center justify-center">
              <span className="bg-white w-[3rem] h-[3rem] rounded-full flex items-center justify-center">
                <img
                  src={Computer}
                  className="w-[3rem] h-[3rem] rounded-full"
                  alt="Computer Logo"
                />
              </span>

              <h2 className="font-semibold text-sm text-white text-center">
                কম্পিউটার
                <span className="block">শপ</span>
              </h2>
            </div>
          </div>

          {/* Make sure the z-index is higher than the black circle */}
          {/* <div className="absolute z-50 top-[-8rem] left-[1rem]">
            <FaHandPointUp className="text-[3rem] text-slate-200 continuous-slide-in" />
          </div> */}
        </div>

        <div className="relative cursor-pointer" onClick={showSupershop}>
          <div className="bg-black hover:scale-105 hover:shadow-xl hover:shadow-gray-800 active:scale-95 w-[8rem] h-[8rem] rounded-full flex items-center justify-center absolute top-[-18.5rem] left-[-9.5rem]">
            <div className="bg-blue-900 w-[7.5rem] h-[7.5rem] rounded-full gap-2 flex flex-col items-center justify-center">
              <span className="bg-white w-[3rem] h-[3rem] rounded-full flex items-center justify-center">
                <img
                  src={Super_Shop}
                  className="w-[3rem] h-[3rem] rounded-full"
                  alt="Super_Shop"
                />
              </span>

              <h2 className="font-bold text-sm text-white text-center">
                {" "}
                সুপার
                <span className="block">শপ</span>
              </h2>
            </div>
          </div>
          {buttonAnimationVisible && (
            <div className="absolute z-50 top-[-14rem] left-[-5rem]">
              <FaHandPointUp className="text-[3rem] text-slate-200 continuous-slide-in" />
            </div>
          )}
        </div>
        <div className="relative cursor-pointer " onClick={showPharmacyShop}>
          <div className="bg-black hover:scale-105 hover:shadow-xl hover:shadow-gray-800 active:scale-95 w-[8rem] h-[8rem] rounded-full flex items-center justify-center absolute top-[-14rem] left-[-16.5rem]">
            <div className="bg-blue-900 w-[7.5rem] h-[7.5rem] rounded-full gap-2 flex flex-col items-center justify-center">
              <span className="bg-white w-[3rem] h-[3rem] rounded-full flex items-center justify-center">
                <img
                  src={Pharmacy}
                  className="w-[3rem] h-[3rem] rounded-full"
                  alt="Pharmacy"
                />
              </span>

              <h2 className="font-semibold text-sm text-white text-center">
                {" "}
                ফার্মেসী
                <span className="block">ব্যবসা</span>
              </h2>
            </div>
          </div>
        </div>
        {/*=============== Lower section ====================*/}
        <div className="relative cursor-pointer" onClick={showSenetaryShop}>
          <div className="bg-black hover:scale-105 hover:shadow-xl hover:shadow-gray-800 active:scale-95 w-[8rem] h-[8rem] rounded-full flex items-center justify-center absolute top-[6rem] left-[-16.5rem]">
            <div className="bg-blue-900 w-[7.5rem] h-[7.5rem] rounded-full gap-2 flex flex-col items-center justify-center">
              <span className="bg-white w-[3rem] h-[3rem] rounded-full flex items-center justify-center">
                <img
                  src={Hardwarea_Sanatary}
                  className="w-[3rem] h-[3rem] rounded-full"
                  alt="Hardwarea_Sanatary"
                />
              </span>

              <h2 className="font-semibold text-sm text-white text-center">
                {" "}
                হার্ডওয়্যার,
                <span className="block">স্যানেটারী</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer" onClick={showClothShop}>
          <div className="bg-black hover:scale-105 hover:shadow-xl hover:shadow-gray-800 active:scale-95 w-[8rem] h-[8rem] rounded-full flex items-center justify-center absolute top-[11rem] left-[-9.5rem]">
            <div className="bg-blue-900 w-[7.5rem] h-[7.5rem] rounded-full gap-2 flex flex-col items-center justify-center">
              <span className="bg-white w-[3rem] h-[3rem] rounded-full flex items-center justify-center">
                <img
                  src={Kaporer_Business}
                  className="w-[3rem] h-[3rem] rounded-full"
                  alt="Kaporer_Business"
                />
              </span>

              <h2 className="font-bold text-sm text-white text-center">
                {" "}
                কাপড়ের
                <span className="block">ব্যবসা</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer" onClick={showRestorent}>
          <div className="bg-black hover:scale-105 hover:shadow-xl hover:shadow-gray-800 active:scale-95 w-[8rem] h-[8rem] rounded-full flex items-center justify-center absolute top-[6rem] left-[-2.5rem]">
            <div className="bg-blue-900 w-[7.5rem] h-[7.5rem] rounded-full gap-2 flex flex-col items-center justify-center">
              <span className="bg-white w-[3rem] h-[3rem] rounded-full flex items-center justify-center">
                <img
                  src={Khabar_Icon}
                  className="w-[3rem] h-[3rem] rounded-full"
                  alt="Computer Logo"
                />
              </span>

              <h2 className="font-semibold text-sm text-white text-center">
                {" "}
                খাবারের
                <span className="block">ব্যবসা</span>
              </h2>
            </div>
          </div>
        </div>
        {/* Left Right site  */}
        <div className="relative cursor-pointer" onClick={showShowShop}>
          <div className="bg-black hover:scale-105 hover:shadow-xl hover:shadow-gray-800 active:scale-95 w-[5rem] h-[9rem] rounded-full flex items-center justify-center absolute top-[-4.5rem] left-[0.5rem]">
            <div className="bg-blue-900 w-[4.8rem] h-[8.5rem] rounded-full gap-2 flex flex-col items-center justify-center">
              <span className="bg-white w-[3rem] h-[3rem] rounded-full flex items-center justify-center">
                <img
                  src={Shoes_Business}
                  className="w-[3rem] h-[3rem] rounded-full"
                  alt="Computer Logo"
                />
              </span>

              <h2 className="font-semibold text-sm text-white text-center">
                {" "}
                জুতার<span className="block">ব্যবসা</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer" onClick={showCementShop}>
          <div className="bg-black hover:scale-105 hover:shadow-xl hover:shadow-gray-800 active:scale-95 w-[5rem] h-[9rem] rounded-full flex items-center justify-center absolute top-[-4.5rem] left-[-16.6rem]">
            <div className="bg-blue-900 w-[4.8rem] h-[8.5rem] rounded-full gap-2 flex flex-col items-center justify-center">
              <span className="bg-white w-[3rem] h-[3rem] rounded-full flex items-center justify-center">
                <img
                  src={Rod_Cement}
                  className="w-[3rem] h-[3rem] rounded-full"
                  alt="Computer Logo"
                />
              </span>

              <h2 className="font-semibold text-sm text-white text-center">
                {" "}
                রড, সিমেন্ট<span className="block">ব্যবসা</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* ============================Section Arrows=============================== */}
      <div className="relative">
        <span className="absolute top-[5rem] left-[-3.5rem]">
          <IoArrowUndo className="w-10 h-12 rotate-[200deg] text-green-800" />
        </span>
      </div>
      <div className="relative">
        <span className="absolute top-[5rem] left-[-10rem]">
          <IoArrowRedoSharp className="w-10 h-12 rotate-[160deg] text-green-800" />
        </span>
      </div>
      <div className="relative">
        <span className="absolute top-[6rem] left-[-7.5rem]">
          <TbArrowBigDownLineFilled className="w-16 h-20 rotate-[0deg] text-green-800" />
        </span>
      </div>
      {/* ===============top Arrows=============== */}
      <div className="relative">
        <span className="absolute top-[-7.5rem] left-[-3.5rem]">
          <IoArrowRedoSharp className="w-10 h-12 rotate-[-60deg] text-green-800" />
        </span>
      </div>
      <div className="relative">
        <span className="absolute top-[-7.5rem] left-[-10rem]">
          <IoArrowUndo className="w-10 h-12 rotate-[50deg] text-green-800" />
        </span>
      </div>
      <div className="relative">
        <span className="absolute top-[-10.5rem] left-[-7.5rem]">
          <TbArrowBigDownLineFilled className="w-16 h-20 rotate-[180deg] text-green-800" />
        </span>
      </div>
      <Modal
        open={computerBrand}
        onCancel={handleCancelComputer}
        width={1000}
        footer={null}
        style={{
          top: 46,
          bottom: 0,
          left: 0,
          right: 0,
          padding: 6,
        }}
      >
        <div className="overflow-y-auto md:h-[87vh] h-screen px-2">
          <div className="relative w-full h-full">
            <img
              src={Computershop}
              alt="SuperShop POS"
              className="w-full h-full object-cover"
            />
            {/* Overlay Wrapper */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center space-y-4 pt-4 z-30">
              <span className="font-bold text-white uppercase text-center md:text-2xl text-xl animate-text-color">
                Computer Shop POS
              </span>
              <div className="mt-5 mb-2 flex items-center justify-center flex-wrap gap-4 relative">
                {/* Watch Demo button */}
                <button
                  className="bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-x-2 duration-300 text-white font-semibold px-4 py-2 rounded shadow-2xl shadow-blue-500"
                  onClick={() => {
                    setView("video");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Watch Demo <MdVideoLibrary className="text-red-500" />
                </button>

                {/* Request Demo button */}
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("form");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Request Demo
                </button>
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("live");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Live Demo
                </button>
                {isAnimating && (
                  <div className="absolute z-50 top-[3rem] left-[2rem]">
                    <FaHandPointUp className="text-[3rem] text-slate-300 continuous-slide-in" />
                  </div>
                )}
              </div>

              {/* Cancel icon (visible based on state) */}
              {isCancelVisible && (
                <div className="flex items-center justify-center z-40 my-1">
                  <IoClose
                    className="text-[2rem] text-white cursor-pointer"
                    onClick={handleCancelDemo}
                  />
                </div>
              )}

              {/* Conditional rendering based on the view state */}
              {view === "video" && (
                <div className="w-[90%] h-[60%] inset-0 mt-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/jPjimIJ-Mr8"
                    title="Computer Software Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {view === "live" && (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <button className="bg-green-700 px-4 py-2 font-semibold animate-pulse cursor-pointer shadow-lg">
                    <a
                      href="www.google.com"
                      className="text-white"
                      target="_blank"
                    >
                      Click Here live
                    </a>
                  </button>
                </div>
              )}

              {view === "form" && (
                <div className="flex justify-center mt-4 w-[90%]">
                  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                      Request Demo
                    </h2>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter Your Name"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="block text-gray-700 font-medium"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="number"
                          placeholder="Enter Your Number"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-gray-700 font-medium"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          placeholder="Enter Your Address"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
              {isAnimating && (
                <p className="text-[14px] md:text-[14px] md:text-[18px] text-white z-50 pt-5 px-4">
                  Merinasoft's Computer Shop POS is an exceptional solution
                  tailored specifically for the dynamic needs of tech retailers.
                  This robust software integrates an array of features designed
                  to enhance operational efficiency and elevate customer
                  satisfaction. It offers stock tracking to prevent shortages
                  and overstocking of any item. A standout feature is the
                  Servicing Section, which enables shops to manage repair and
                  maintenance requests seamlessly, keeping track of service
                  history and client communications in one place. With
                  integrated ‘Sale Price Prediction,’ the system helps retailers
                  set optimal prices based on market trends and historical data.
                  The POS offers a ‘Bulk Sale’ feature to handle multiple sales
                  with few clicks only. Customizable sales reports provide
                  insights into performance, while inclusion of Barcode
                  generation feature, customer-supplier management make it a
                  comprehensive solution for computer shops aiming to scale and
                  optimize their operations.
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal>

      {/* ======= supershop modal========== */}
      <Modal
        open={superShop}
        onCancel={handleCancelSupershop}
        width={1000}
        footer={null}
        style={{
          top: 46,
          bottom: 0,
          left: 0,
          right: 0,
          padding: 6,
        }}
      >
        <div className="overflow-y-auto h-[85vh] px-2 ">
          <div className="relative w-full h-full">
            <img
              src={SupershpeImage}
              alt="SuperShop POS"
              className="w-full h-full object-cover"
            />
            {/* Overlay Wrapper */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center space-y-4 pt-4 z-30">
              <span className="font-bold text-white uppercase text-center md:text-2xl text-xl animate-text-color">
                Super Shop POS
              </span>
              <div className="mt-5 mb-2 flex items-center justify-center flex-wrap gap-4 relative">
                {/* Watch Demo button */}
                <button
                  className="bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-x-2 duration-300 text-white font-semibold px-4 py-2 rounded shadow-2xl shadow-blue-500"
                  onClick={() => {
                    setView("video");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Watch Demo <MdVideoLibrary className="text-red-500" />
                </button>
                {/* Request Demo button */}
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("form");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Request Demo
                </button>
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("live");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Live Demo
                </button>

                {isAnimating && (
                  <div className="absolute z-50 top-[3rem] left-[2rem]">
                    <FaHandPointUp className="text-[3rem] text-slate-300 continuous-slide-in" />
                  </div>
                )}
              </div>

              {/* Cancel icon (visible based on state) */}
              {isCancelVisible && (
                <div className="flex items-center justify-center z-40 my-1">
                  <IoClose
                    className="text-[2rem] text-white cursor-pointer"
                    onClick={handleCancelDemo}
                  />
                </div>
              )}

              {/* Conditional rendering based on the view state */}
              {view === "video" && (
                <div className="w-[90%] h-[60vh] mt-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/jPjimIJ-Mr8"
                    title="Computer Software Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {view === "live" && (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <button className="bg-green-700 px-4 py-2 font-semibold animate-pulse cursor-pointer shadow-lg">
                    <a
                      href="www.google.com"
                      className="text-white"
                      target="_blank"
                    >
                      Click Here live
                    </a>
                  </button>
                </div>
              )}

              {view === "form" && (
                <div className="flex justify-center mt-4 w-[90%]">
                  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                      Request Demo
                    </h2>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter Your Name"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="block text-gray-700 font-medium"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="number"
                          placeholder="Enter Your Number"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-gray-700 font-medium"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          placeholder="Enter Your Address"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
              {isAnimating && (
                <p className="text-[14px] md:text-[18px] text-white z-50 pt-9 px-4">
                  Merinasoft's Super Shop POS system is designed to enhance
                  efficiency and customer service in retail environments. It
                  features advanced inventory management, enabling real-time
                  stock tracking to prevent shortages and overstocking. With
                  integrated ‘Sale Price Prediction,’ the system helps retailers
                  set optimal prices based on market trends and historical data.
                  The POS also supports seamless transactions, whether in-store
                  or online, and offers a ‘Bulk Sale’ feature to handle multiple
                  sales with few clicks only. Customizable sales reports provide
                  insights into performance, while inclusion of Barcode
                  generation feature, customer-supplier management make it a
                  comprehensive solution for super shops aiming to scale and
                  optimize their operations.
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal>

      {/* ======= Cloth modal========== */}
      <Modal
        open={clothshop}
        onCancel={handleCancelClothShop}
        width={1000}
        footer={null}
        style={{
          top: 46,
          bottom: 0,
          left: 0,
          right: 0,
          padding: 6,
        }}
      >
        <div className="overflow-y-auto h-[85vh] px-2">
          <div className="relative w-full h-full">
            <img
              src={SupershpeImage}
              alt="SuperShop POS"
              className="w-full h-full object-cover"
            />
            {/* Overlay Wrapper */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center space-y-4 pt-4 z-30">
              <span className="font-bold text-white uppercase text-center md:text-2xl text-xl animate-text-color">
                Clothing Business Software
              </span>
              <div className="mt-5 mb-2 flex items-center justify-center flex-wrap gap-4 relative">
                {/* Watch Demo button */}
                <button
                  className="bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-x-2 duration-300 text-white font-semibold px-4 py-2 rounded shadow-2xl shadow-blue-500"
                  onClick={() => {
                    setView("video");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Watch Demo <MdVideoLibrary className="text-red-500" />
                </button>
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("form");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Request Demo
                </button>
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("live");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Live Demo
                </button>
                {/* Request Demo button */}

                {isAnimating && (
                  <div className="absolute z-50 top-[3rem] left-[2rem]">
                    <FaHandPointUp className="text-[3rem] text-slate-300 continuous-slide-in" />
                  </div>
                )}
              </div>

              {/* Cancel icon (visible based on state) */}
              {isCancelVisible && (
                <div className="flex items-center justify-center z-40 my-1">
                  <IoClose
                    className="text-[2rem] text-white cursor-pointer"
                    onClick={handleCancelDemo}
                  />
                </div>
              )}
              {view === "live" && (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <button className="bg-green-700 px-4 py-2 font-semibold animate-pulse cursor-pointer shadow-lg">
                    <a
                      href="www.google.com"
                      className="text-white"
                      target="_blank"
                    >
                      Click Here live
                    </a>
                  </button>
                </div>
              )}
              {/* Conditional rendering based on the view state */}
              {view === "video" && (
                <div className="w-[90%] h-[60vh] mt-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/jPjimIJ-Mr8"
                    title="Computer Software Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {view === "form" && (
                <div className="flex justify-center mt-4 w-[90%]">
                  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                      Request Demo
                    </h2>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter Your Name"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="block text-gray-700 font-medium"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="number"
                          placeholder="Enter Your Number"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-gray-700 font-medium"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          placeholder="Enter Your Address"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {isAnimating && (
                <p className="text-[14px] md:text-[18px] text-white z-50 pt-9 px-4">
                  Merinasoft's Clothing Business Software is designed to
                  streamline every aspect of fashion retail and manufacturing.
                  Its key features include inventory management, allowing users
                  to track stock in and avoid overstock or shortages. The
                  software also offers seamless order processing options, making
                  it easier to manage both online and offline sales. It has
                  color & size wise categorization feature to determine and
                  allot each product precisely. Some cool features include ‘Sale
                  Price Prediction’ and ‘Bulk Sale’ for customers. Reports &
                  visuals provide detailed insights into sales trends, and
                  product performance. Additionally, Merinasoft's solution
                  includes customer engagement and loyalty, along with supplier
                  management features to simplify procurement and production
                  processes. This comprehensive platform is ideal for scaling
                  clothing businesses looking to optimize operations and grow
                  efficiently.
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal>

      {/* ======= Pharmacy modal========== */}
      <Modal
        open={pharmacyShop}
        onCancel={handleCancelPharmacy}
        width={1000}
        footer={null}
        style={{
          top: 46,
          bottom: 0,
          left: 0,
          right: 0,
          padding: 6,
        }}
      >
        <div className="overflow-y-auto h-[85vh] px-2 ">
          <div className="relative w-full h-full">
            <img
              src={PharmacyShop}
              alt="SuperShop POS"
              className="w-full h-full object-cover"
            />
            {/* Overlay Wrapper */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center space-y-4 pt-4 z-30">
              <span className="font-bold text-white uppercase text-center md:text-2xl text-xl animate-text-color">
                Pharmacy management software
              </span>
              <div className="mt-5 mb-2 flex items-center justify-center flex-wrap gap-4 relative">
                {/* Watch Demo button */}
                <button
                  className="bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-x-2 duration-300 text-white font-semibold px-4 py-2 rounded shadow-2xl shadow-blue-500"
                  onClick={() => {
                    setView("video");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Watch Demo <MdVideoLibrary className="text-red-500" />
                </button>

                {/* Request Demo button */}
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("form");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Request Demo
                </button>
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("live");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Live Demo
                </button>
                {isAnimating && (
                  <div className="absolute z-50 top-[3rem] left-[2rem]">
                    <FaHandPointUp className="text-[3rem] text-slate-300 continuous-slide-in" />
                  </div>
                )}
              </div>

              {/* Cancel icon (visible based on state) */}
              {isCancelVisible && (
                <div className="flex items-center justify-center z-40 my-1">
                  <IoClose
                    className="text-[2rem] text-white cursor-pointer"
                    onClick={handleCancelDemo}
                  />
                </div>
              )}

              {/* Conditional rendering based on the view state */}
              {view === "video" && (
                <div className="w-[90%] h-[60vh] mt-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/jPjimIJ-Mr8"
                    title="Computer Software Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {view === "live" && (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <button className="bg-green-700 px-4 py-2 font-semibold animate-pulse cursor-pointer shadow-lg">
                    <a
                      href="www.google.com"
                      className="text-white"
                      target="_blank"
                    >
                      Click Here live
                    </a>
                  </button>
                </div>
              )}
              {view === "form" && (
                <div className="flex justify-center mt-4 w-[90%]">
                  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                      Request Demo
                    </h2>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter Your Name"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="block text-gray-700 font-medium"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="number"
                          placeholder="Enter Your Number"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-gray-700 font-medium"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          placeholder="Enter Your Address"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {isAnimating && (
                <p className="text-[14px] md:text-[18px] text-white z-50 pt-9 px-4">
                  Merinasoft Pharma POS is a modern pharmacy management software
                  designed to optimize operations in retail pharmacies. At its
                  core is a comprehensive Medicine Database repository, housing
                  an extensive range of pharmaceuticals, allowing users to
                  quickly access information about products, dosages, and
                  pricing. This feature enhances customer service by providing
                  accurate and timely information. The software includes a
                  seamless Bulk Sale feature, enabling pharmacies to efficiently
                  manage large orders and offer competitive discounts, thus
                  attracting more customers. With advanced inventory management,
                  the system ensures that stock levels are monitored in
                  real-time, reducing the risk of shortages or overstocking.
                  Customizable reporting tools provide insights into sales
                  trends and inventory turnover, helping pharmacy owners make
                  informed decisions. Merinasoft's Pharma POS empowers
                  pharmacies to enhance their efficiency, improve customer
                  satisfaction, and drive growth in an increasingly competitive
                  healthcare landscape.
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal>

      {/* ======= Shoes modal========== */}
      <Modal
        open={shoeShop}
        onCancel={handleCancelShowShop}
        width={1000}
        footer={null}
        style={{
          top: 46,
          bottom: 0,
          left: 0,
          right: 0,
          padding: 6,
        }}
      >
        <div className="overflow-y-auto h-[85vh] px-2 ">
          <div className="relative w-full h-full">
            <img
              src={SupershpeImage}
              alt="SuperShop POS"
              className="w-full h-full object-cover"
            />
            {/* Overlay Wrapper */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center space-y-4 pt-4 z-30">
              <span className="font-bold text-white uppercase text-center md:text-2xl text-xl animate-text-color">
                Footware Shop Management Software
              </span>
              <div className="mt-5 mb-2 flex items-center justify-center flex-wrap gap-4 relative">
                {/* Watch Demo button */}
                <button
                  className="bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-x-2 duration-300 text-white font-semibold px-4 py-2 rounded shadow-2xl shadow-blue-500"
                  onClick={() => {
                    setView("video");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Watch Demo <MdVideoLibrary className="text-red-500" />
                </button>

                {/* Request Demo button */}
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("form");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Request Demo
                </button>
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("live");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Live Demo
                </button>

                {isAnimating && (
                  <div className="absolute z-50 top-[3rem] left-[2rem]">
                    <FaHandPointUp className="text-[3rem] text-slate-300 continuous-slide-in" />
                  </div>
                )}
              </div>

              {/* Cancel icon (visible based on state) */}
              {isCancelVisible && (
                <div className="flex items-center justify-center z-40 my-1">
                  <IoClose
                    className="text-[2rem] text-white cursor-pointer"
                    onClick={handleCancelDemo}
                  />
                </div>
              )}

              {/* Conditional rendering based on the view state */}
              {view === "video" && (
                <div className="w-[90%] h-[60vh] mt-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/jPjimIJ-Mr8"
                    title="Computer Software Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {view === "live" && (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <button className="bg-green-700 px-4 py-2 font-semibold animate-pulse cursor-pointer shadow-lg">
                    <a
                      href="www.google.com"
                      className="text-white"
                      target="_blank"
                    >
                      Click Here live
                    </a>
                  </button>
                </div>
              )}

              {view === "form" && (
                <div className="flex justify-center mt-4 w-[90%]">
                  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                      Request Demo
                    </h2>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter Your Name"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="block text-gray-700 font-medium"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="number"
                          placeholder="Enter Your Number"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-gray-700 font-medium"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          placeholder="Enter Your Address"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
              {isAnimating && (
                <p className="text-[14px] md:text-[18px] text-white z-50 pt-9 px-4">
                  Merinasoft's Footwear Shop Management Software is designed to
                  optimize the entire footwear retail and production process.
                  Its key features include well compiled inventory management,
                  enabling users to track stock levels and avoid overstock or
                  shortages. The software simplifies order processing for both
                  online and in-store sales, ensuring smooth transactions. It
                  also features detailed categorization by size, color, and
                  style, making product organization precise and efficient.
                  Notable features like ‘Sale Price Prediction’ and ‘Bulk Sale’
                  options for customers help boost sales performance. Reports &
                  visuals offer valuable insights into sales trends and product
                  success. Additionally, Merinasoft’s solution enhances customer
                  engagement and loyalty programs, along with supplier
                  management. This all-in-one platform is ideal for footwear
                  businesses aiming to scale efficiently and improve overall
                  operations.
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal>

      {/* ======= Cement modal========== */}
      <Modal
        open={cementShop}
        onCancel={handleCancelCement}
        width={1000}
        footer={null}
        style={{
          top: 46,
          bottom: 0,
          left: 0,
          right: 0,
          padding: 6,
        }}
      >
        <div className="overflow-y-auto h-[85vh] px-2 ">
          <div className="relative w-full h-full">
            <img
              src={SupershpeImage}
              alt="SuperShop POS"
              className="w-full h-full object-cover"
            />
            {/* Overlay Wrapper */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center space-y-4 pt-4 z-30">
              <span className="font-bold text-white uppercase text-center md:text-2xl text-xl animate-text-color">
                Construction Material Business Software
              </span>
              <div className="mt-5 mb-2 flex items-center justify-center flex-wrap gap-4 relative">
                {/* Watch Demo button */}
                <button
                  className="bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-x-2 duration-300 text-white font-semibold px-4 py-2 rounded shadow-2xl shadow-blue-500"
                  onClick={() => {
                    setView("video");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Watch Demo <MdVideoLibrary className="text-red-500" />
                </button>

                {/* Request Demo button */}
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("form");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Request Demo
                </button>
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("live");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Live Demo
                </button>
                {isAnimating && (
                  <div className="absolute z-50 top-[3rem] left-[2rem]">
                    <FaHandPointUp className="text-[3rem] text-slate-300 continuous-slide-in" />
                  </div>
                )}
              </div>

              {/* Cancel icon (visible based on state) */}
              {isCancelVisible && (
                <div className="flex items-center justify-center z-40 my-1">
                  <IoClose
                    className="text-[2rem] text-white cursor-pointer"
                    onClick={handleCancelDemo}
                  />
                </div>
              )}

              {/* Conditional rendering based on the view state */}
              {view === "video" && (
                <div className="w-[90%] h-[60vh] mt-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/jPjimIJ-Mr8"
                    title="Computer Software Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {view === "live" && (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <button className="bg-green-700 px-4 py-2 font-semibold animate-pulse cursor-pointer shadow-lg">
                    <a
                      href="www.google.com"
                      className="text-white"
                      target="_blank"
                    >
                      Click Here live
                    </a>
                  </button>
                </div>
              )}
              {view === "form" && (
                <div className="flex justify-center mt-4 w-[90%]">
                  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                      Request Demo
                    </h2>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter Your Name"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="block text-gray-700 font-medium"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="number"
                          placeholder="Enter Your Number"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-gray-700 font-medium"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          placeholder="Enter Your Address"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {isAnimating && (
                <p className="text-[14px] md:text-[18px] text-white z-50 pt-9 px-4">
                  Merinasoft's Construction Material Business Software is an
                  efficient tool developed to assist suppliers and retailers in
                  the construction industry. One of its standout features is
                  Budget Estimation, which allows businesses to generate precise
                  cost projections for materials based on current stock prices
                  and project requirements. The software offers advanced
                  inventory management, enabling real-time tracking of materials
                  to avoid shortages and ensure timely deliveries. It also
                  supports seamless order processing, both online and offline,
                  with integrated supplier management to optimize procurement.
                  It offers customizable reports from every aspect including
                  profit-loss data. This all-in-one platform empowers
                  construction material businesses to operate efficiently,
                  manage costs effectively, and scale with confidence.
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal>

      {/* ======= Restaurant modal========== */}
      <Modal
        open={restorant}
        onCancel={handleCancelRestorent}
        width={1000}
        footer={null}
        style={{
          top: 46,
          bottom: 0,
          left: 0,
          right: 0,
          padding: 6,
        }}
      >
        <div className="overflow-y-auto h-[85vh] px-2">
          <div className="relative w-full h-full">
            <img
              src={SupershpeImage}
              alt="SuperShop POS"
              className="w-full h-full object-cover"
            />
            {/* Overlay Wrapper */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center space-y-4 pt-4 z-30">
              <span className="font-bold text-white uppercase text-center md:text-2xl text-xl animate-text-color">
                Restaurant Management Software
              </span>
              <div className="mt-5 mb-2 flex items-center justify-center flex-wrap gap-4 relative">
                {/* Watch Demo button */}
                <button
                  className="bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-x-2 duration-300 text-white font-semibold px-4 py-2 rounded shadow-2xl shadow-blue-500"
                  onClick={() => {
                    setView("video");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Watch Demo <MdVideoLibrary className="text-red-500" />
                </button>

                {/* Request Demo button */}
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("form");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Request Demo
                </button>
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("live");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Live Demo
                </button>
                {isAnimating && (
                  <div className="absolute z-50 top-[3rem] left-[2rem]">
                    <FaHandPointUp className="text-[3rem] text-slate-300 continuous-slide-in" />
                  </div>
                )}
              </div>

              {/* Cancel icon (visible based on state) */}
              {isCancelVisible && (
                <div className="flex items-center justify-center z-40 my-1">
                  <IoClose
                    className="text-[2rem] text-white cursor-pointer"
                    onClick={handleCancelDemo}
                  />
                </div>
              )}

              {/* Conditional rendering based on the view state */}
              {view === "video" && (
                <div className="w-[90%] h-[60vh] mt-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/jPjimIJ-Mr8"
                    title="Computer Software Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {view === "live" && (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <button className="bg-green-700 px-4 py-2 font-semibold animate-pulse cursor-pointer shadow-lg">
                    <a
                      href="www.google.com"
                      className="text-white"
                      target="_blank"
                    >
                      Click Here live
                    </a>
                  </button>
                </div>
              )}
              {view === "form" && (
                <div className="flex justify-center mt-4 w-[90%]">
                  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                      Request Demo
                    </h2>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter Your Name"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="block text-gray-700 font-medium"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="number"
                          placeholder="Enter Your Number"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-gray-700 font-medium"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          placeholder="Enter Your Address"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}

              {isAnimating && (
                <p className="text-[14px] md:text-[18px] text-white z-50 pt-9 px-4">
                  Merinasoft's Restaurant Management Software is designed to
                  streamline daily operations and enhance customer experiences
                  for restaurants of all sizes. Key features include real-time
                  inventory management to track ingredients and reduce waste, as
                  well as an intuitive point-of-sale (POS) system that
                  simplifies order processing, billing, and payment. The
                  software also supports table reservations & menu customization
                  offering a seamless dining experience for customers. Reports &
                  visuals provide insights into sales performance, customer
                  preferences, and staff productivity. Additionally,
                  Merinasoft’s software includes employee scheduling, customer
                  loyalty programs, and supplier management, making it a
                  comprehensive solution for restaurants aiming to boost
                  efficiency and profitability.
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal>

      {/* ======= SanitaryShop modal========== */}
      <Modal
        open={senataryShop}
        onCancel={handleCancelSenetaryShop}
        width={1000}
        footer={null}
        style={{
          top: 46,
          bottom: 0,
          left: 0,
          right: 0,
          padding: 6,
        }}
      >
        <div className="overflow-y-auto h-[85vh] px-2 ">
          <div className="relative w-full h-full">
            <img
              src={SupershpeImage}
              alt="SuperShop POS"
              className="w-full h-full object-cover"
            />
            {/* Overlay Wrapper */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center space-y-4 pt-4 z-30">
              <span className="font-bold text-white uppercase text-center md:text-2xl text-xl animate-text-color">
                Tiles & Sanitary Store Management System
              </span>
              <div className="mt-5 mb-2 flex items-center justify-center flex-wrap gap-4 relative">
                {/* Watch Demo button */}
                <button
                  className="bg-blue-700 hover:bg-blue-800 transition-colors flex items-center justify-center gap-x-2 duration-300 text-white font-semibold px-4 py-2 rounded shadow-2xl shadow-blue-500"
                  onClick={() => {
                    setView("video");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Watch Demo <MdVideoLibrary className="text-red-500" />
                </button>

                {/* Request Demo button */}
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setView("form");
                    setIsCancelVisible(true);
                    setIsAnimating(false);
                  }}
                >
                  Request Demo
                </button>
                <button
                  className="bg-green-700 hover:bg-green-600 transition-colors duration-300 text-white font-semibold px-4 py-2 rounded shadow-lg"
                  onClick={() => {
                    setIsCancelVisible(false);
                    setIsAnimating(false);
                  }}
                >
                  Live Demo
                </button>
                {isAnimating && (
                  <div className="absolute z-50 top-[3rem] left-[2rem]">
                    <FaHandPointUp className="text-[3rem] text-slate-300 continuous-slide-in" />
                  </div>
                )}
              </div>

              {/* Cancel icon (visible based on state) */}
              {isCancelVisible && (
                <div className="flex items-center justify-center z-40 my-1">
                  <IoClose
                    className="text-[2rem] text-white cursor-pointer"
                    onClick={handleCancelDemo}
                  />
                </div>
              )}

              {/* Conditional rendering based on the view state */}
              {view === "video" && (
                <div className="w-[90%] h-[80vh] mt-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/jPjimIJ-Mr8"
                    title="Computer Software Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {view === "live" && (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                  <button className="bg-green-700 px-4 py-2 font-semibold animate-pulse cursor-pointer shadow-lg">
                    <a
                      href="www.google.com"
                      className="text-white"
                      target="_blank"
                    >
                      Click Here live
                    </a>
                  </button>
                </div>
              )}
              {view === "form" && (
                <div className="flex justify-center mt-4 w-[90%]">
                  <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                      Request Demo
                    </h2>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-700 font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter Your Name"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-700 font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter Your Email"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="number"
                          className="block text-gray-700 font-medium"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          id="number"
                          placeholder="Enter Your Number"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-gray-700 font-medium"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          placeholder="Enter Your Address"
                          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              )}
              {isAnimating && (
                <p className="text-[14px] md:text-[18px] text-white z-50 pt-9 px-4">
                  Merinasoft's Tiles & Sanitary Store Management System is a
                  robust solution designed to streamline operations for
                  retailers in the home improvement sector. It features advanced
                  inventory management for precise tracking of tiles and
                  sanitary ware, ensuring optimal stock levels. A standout
                  feature is Tiles Budget & Mapping, which helps users plan
                  their purchases and allocate budgets effectively for various
                  projects. The software also supports seamless order
                  processing, making transactions effortless for both in-store
                  and online customers. Additionally, the Bulk Sale option
                  allows retailers to offer attractive discounts on larger
                  purchases, driving sales and customer engagement. With
                  customizable reporting tools and supplier management
                  capabilities, Merinasoft’s solution empowers tiles and
                  sanitary retailers to enhance efficiency and grow their
                  businesses in a competitive market.
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BusniessSoftware;
