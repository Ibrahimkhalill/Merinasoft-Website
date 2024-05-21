import "./software_development.css";
import software from "../../images/Web/Screenshot (15).png";
import { FaCheck } from "react-icons/fa6";

function SoftwareDevlopemnt() {
  return (
    <>
      <div className="sofwtare_development_container">
        <div className="heading">
          Which we provide with Software Development Projects
        </div>
        <div className="comtent-section">
          <div className="software_image">
            <img src={software} alt="" />
          </div>
          <div className="list_software">
            <div>
              <FaCheck className="check_icon" /> <div>Health Care</div>
            </div>
          </div>
        </div>
        <section className="choose_product">
          <h2>Why Choose Our Product?</h2>
          <div></div>
        </section>
      </div>
    </>
  );
}

export default SoftwareDevlopemnt;
