import { Link } from "react-router-dom";
import "./products.css";
import SuperShop from "../images/Web/Screenshot (15).png";
import Windoor from "../images/Web/Screenshot (16).png";
import Computer from "../images/Web/supplierreport.png";
import Inventory from "../images/products/p2.jpg";
import Moda from "../images/products/Moda.png";
import ecoomerce from "../images/Web/photo_2024-04-02_22-03-55.jpg";
import patient_add_update from "../images/hms/patient_add_update.PNG";
import { useEffect, useState } from "react";
function Products() {
  const [allVisible, setAllVisible] = useState(true);
  const [webVisible, setWebVisible] = useState(false);
  const [appVisible, setAppVisible] = useState(false);
  const handleAll = () => {
    setAllVisible(true);
    setAppVisible(false);
    setWebVisible(false);
  };
  const handleWeb = () => {
    setAllVisible(false);
    setWebVisible(true);
    setAppVisible(false);
  };
  const handleApp = () => {
    setAllVisible(false);
    setWebVisible(false);
    setAppVisible(true);
  };
  useEffect(()=>{
    document.title ="Products - Merinasoft Limited"
  },[])
  return (
    <div className="products_container">
      <div className="section_header">
        <h1>Our Products</h1>
        <p>
          This is really a significant factor "Why are you choosing this product
          or service?".Moreover, you may wonder why you take our products when
          you see the same services being offered in lots of companies. But we
          are providing the most perfect service for you, and our priority is
          the customer's satisfaction. So, you can buy our products with ease
          and without any worries.
        </p>
      </div>
      <div className="product_section">
        <div className="product_group">
          <button
            onClick={handleAll}
            className={`${allVisible ? "active_button_product" : ""}`}
          >
            All
          </button>
          <button
            onClick={handleWeb}
            className={`${webVisible ? "active_button_product" : ""}`}
          >
            Web
          </button>
          <button
            style={{ marginLeft: "1vw" }}
            onClick={handleApp}
            className={` ${appVisible ? "active_button_product" : ""}`}
          >
            App
          </button>
        </div>
        <div className="hr"> </div>
        {allVisible && (
          <div className="product_list">
            <Link>
              <div class="card">
                <img src={SuperShop} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>Irani Mini Bazar</b>
                  </h3>
                  <p>
                    Irani Mini Bazar is the powerful SuperShop POS Software.
                    This Software is designed to streamline and enhance every
                    aspect of your superstore operations. It provides a
                    comprehensive solution for superstore management, ensuring
                    efficiency, effectiveness, and business growth.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="web_buton">WEB</div>
                </div>
              </div>
            </Link>
            <Link>
              <div class="card">
                <img src={Windoor} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>Moda Window Door Managemenet System</b>
                  </h3>
                  <p>
                    Moda Window Door Management System is a specialized software
                    solution tailored for businesses involved in selling glass
                    products and mosquito nets. This comprehensive software
                    simplifies and enhances the entire sales process, enabling
                    businesses to efficiently manage their operations and drive
                    sales growth.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="web_and_app_button">
                    <div className="web_buton">WEB</div>{" "}
                    <div className="Mobile_buton">MOBILE APP</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div class="card">
                <img src={Computer} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>Merinasoft Computer Pos Software</b>
                  </h3>
                  <p>
                    Merinasoft Computer POS Software is a comprehensive solution
                    designed specifically for businesses involved in selling
                    computer hardware, software, and accessories. This advanced
                    software simplifies and enhances the entire point-of-sale
                    process, empowering businesses to efficiently manage their
                    inventory, process transactions, and deliver exceptional
                    customer service.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="web_buton">WEB</div>
                </div>
              </div>
            </Link>

            <Link>
              <div class="card">
                <img src={Inventory} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>Ineventory Management System</b>
                  </h3>
                  <p>
                    Our Inventory Management System is a powerful and efficient
                    software solution designed to streamline inventory-related
                    operations for businesses of all sizes.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="Mobile_buton">DESKTOP APP</div>
                </div>
              </div>
            </Link>
            <Link>
              <div class="card">
                <img src={ecoomerce} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>29 Brand</b>
                  </h3>
                  <p>
                    29 Brand is a dynamic e-commerce platform designed to
                    revolutionize the online retail experience.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="web_buton">WEB</div>
                </div>
              </div>
            </Link>
            <Link>
              <div class="card">
                <img src={patient_add_update} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>Hospital Management System</b>
                  </h3>
                  <p>
                    Our Hospital Management System is a comprehensive software
                    solution designed to streamline and optimize the operations
                    of healthcare facilities, including hospitals, clinics, and
                    medical centers.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="Mobile_buton">DESKTOP APP</div>
                </div>
              </div>
            </Link>
          </div>
        )}
        {webVisible && (
          <div className="product_list">
            <Link>
              <div class="card">
                <img src={SuperShop} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>Irani Mini Bazar</b>
                  </h3>
                  <p>
                    Irani Mini Bazar is the powerful SuperShop POS Software.
                    This Software is designed to streamline and enhance every
                    aspect of your superstore operations. It provides a
                    comprehensive solution for superstore management, ensuring
                    efficiency, effectiveness, and business growth.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="web_buton">WEB</div>
                </div>
              </div>
            </Link>
            <Link>
              <div class="card">
                <img src={Windoor} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>Moda Window Door Managemenet System</b>
                  </h3>
                  <p>
                    Moda Window Door Management System is a specialized software
                    solution tailored for businesses involved in selling glass
                    products and mosquito nets. This comprehensive software
                    simplifies and enhances the entire sales process, enabling
                    businesses to efficiently manage their operations and drive
                    sales growth.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="web_and_app_button">
                    <div className="web_buton">WEB</div>{" "}
                    <div className="Mobile_buton">MOBILE APP</div>
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div class="card">
                <img src={Computer} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>Merinasoft Computer Pos Software</b>
                  </h3>
                  <p>
                    Merinasoft Computer POS Software is a comprehensive solution
                    designed specifically for businesses involved in selling
                    computer hardware, software, and accessories. This advanced
                    software simplifies and enhances the entire point-of-sale
                    process, empowering businesses to efficiently manage their
                    inventory, process transactions, and deliver exceptional
                    customer service.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="web_buton">WEB</div>
                </div>
              </div>
            </Link>

            <Link>
              <div class="card">
                <img src={ecoomerce} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>29 Brand</b>
                  </h3>
                  <p>
                    29 Brand is a dynamic e-commerce platform designed to
                    revolutionize the online retail experience.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="web_buton">WEB</div>
                </div>
              </div>
            </Link>
          </div>
        )}
        {appVisible && (
          <div className="product_list">
            <Link>
              <div class="card">
                <img src={Moda} height={300} width={80} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>Moda Window Door Managemenet System</b>
                  </h3>
                  <p>
                    Moda Window Door Management System is a specialized software
                    solution tailored for businesses involved in selling glass
                    products and mosquito nets. This comprehensive software
                    simplifies and enhances the entire sales process, enabling
                    businesses to efficiently manage their operations and drive
                    sales growth.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="web_and_app_button">
                    <div className="Mobile_buton">MOBILE APP</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link>
              <div class="card">
                <img src={Inventory} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>Ineventory Management System</b>
                  </h3>
                  <p>
                    Our Inventory Management System is a powerful and efficient
                    software solution designed to streamline inventory-related
                    operations for businesses of all sizes.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="Mobile_buton">DESKTOP APP</div>
                </div>
              </div>
            </Link>

            <Link>
              <div class="card">
                <img src={patient_add_update} alt="Avatar" />
                <div class="container">
                  <h3>
                    <b>Hospital Management System</b>
                  </h3>
                  <p>
                    Our Hospital Management System is a comprehensive software
                    solution designed to streamline and optimize the operations
                    of healthcare facilities, including hospitals, clinics, and
                    medical centers.
                    <Link style={{ color: "#690177" }}> More</Link>
                  </p>
                  <div className="Mobile_buton">DESKTOP APP</div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
