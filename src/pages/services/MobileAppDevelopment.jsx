import "./software_development.css";
import { FaCheck } from "react-icons/fa6";
import Mobile from "../../images/Mobile-App-Development.png";
import { useEffect } from "react";
function MobileAppDevlopment() {
  useEffect(()=>{
   document.title = "Mobile App Developmet Service | Merinasoft"
  },[])
  return (
    <>
      <div className="sofwtare_development_container">
        <div className="heading">
          Which we provide with Mobile App Development Projects
        </div>
        <div className="comtent-section">
          <div className="software_image">
            <img src={Mobile} alt="" />
          </div>
          <div className="list_software">
            <div className="list_name">
              <FaCheck className="check_icon" />
              <div>High standard functionality & features</div>
            </div>
            <div className="list_name">
              <FaCheck className="check_icon" />
              <div>Cross-platform development for mobile apps</div>
            </div>
            <div className="list_name">
              <FaCheck className="check_icon large_iconss"  />
              <div>Variety of app choices from native, web & hybrid</div>
            </div>
            <div className="list_name">
              <FaCheck className="check_icon" />
              <div>Complete operating system support</div>
            </div>
            <div className="list_name">
              <FaCheck className="check_icon large_icons"  />
              <div>
                Attracting a larger user base & increasing business impact
              </div>
            </div>
            <div className="list_name">
              <FaCheck className="check_icon large_icon" />
              <div>High-quality applications for a wide array of niche</div>
            </div>
            <div className="list_name">
              <FaCheck className="check_icon" /> <div>Telecommunication</div>
            </div>
            <div className="list_name">
              <FaCheck className="check_icon" /> <div>Tourism</div>
            </div>
            <div className="list_name">
              <FaCheck className="check_icon" /> <div>Education</div>
            </div>
          </div>
        </div>
        <section className="choose_product">
          <h2>Why Choose <span style={{color:"#9a17cd"}}>Our Product?</span> </h2>
          <div className="header__des">
            SDThis is really a significant factor "Why are you choosing this
            product or service?".Moreover, you may wonder why you take our
            products when you see the same services being offered in lots of
            companies. But we are providing the most perfect service for you,
            and our priority is the customer's satisfaction. So, you can buy our
            products with ease and without any worries.
          </div>
          <div className="row_des">
            <div className="col_first">
              <h3>How long do I get support?</h3>
              <div>
                This is really a significant factor "Why are you choosing this
                product or service?". Moreover, you may wonder why you take our
                products.
              </div>
            </div>
            <div className="col_second">
              <h3>Which type support we are provide??</h3>
              <div>
                This is really a significant factor "Why are you choosing this
                product or service?". Moreover, you may wonder why you take our
                products.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MobileAppDevlopment;
