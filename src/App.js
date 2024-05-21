import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomePageTemp from "./pages/HomePageTemp";
import About from "./pages/About";
import CoachingApp from "./pages/coachingApp";
import Hms from "./pages/hms";
import BusinessWebsite from "./pages/businessWebsite";
import Contact from "./pages/Contact";
import Career from "./pages/career";
import AndroidAppSolution from "./pages/AndroidAppSolution";
import Footer from "./pages/Footer";
import Services from "./pages/Service";
import Products from "./pages/Products";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Merinasot from "./images/merinasoft_logo.png";
import SoftwareDevlopemnt from "./pages/services/SoftwareDevelopment";
import MobileAppDevlopment from "./pages/services/MobileAppDevelopment";
import SalePrediction from "./pages/SalePrediction";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageTemp />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/coachingApp" element={<CoachingApp />}></Route>
          <Route path="/hms" element={<Hms />}></Route>
          <Route path="/gallery" element={<BusinessWebsite />}></Route>
          <Route path="/androidApp" element={<AndroidAppSolution />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/sale-price-prediction" element={<SalePrediction />}></Route>
          <Route
            path="/service/software-development"
            element={<SoftwareDevlopemnt />}
          ></Route>
          <Route
            path="/service/mobile-app-development"
            element={<MobileAppDevlopment />}
          ></Route>
          {/* 
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} /> */}
        </Routes>
        <FloatingWhatsApp
          phoneNumber="+8801746185116"
          allowClickAway={true}
          accountName="Merinasoft"
          statusMessage="Typically replies within 1 hour"
          className="floating_whatsup"
          avatar={Merinasot}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
