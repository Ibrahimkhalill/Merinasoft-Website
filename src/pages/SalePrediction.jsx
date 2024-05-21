import "./sale_prediction.css";
import sale from "../video/sale.mp4.mp4";
import { Link } from "react-router-dom";
function SalePrediction() {
  return (
    <>
      <div className="sale_prediction_container">
        <div className="header_sale_prediction">
          <div>
           
            Sale <span> Price Prediction</span> Feature
          </div>
        </div>
        <div className="video_sale_prediction">
          <video src={sale} className="video"  controls autoPlay />
        </div>
        <div className="description_sale_prediction">
         মেরিনাসফ্টটে নতুন ফিচার <span style={{color:"#9715a3", fontWeight:"bold"}}>Sale Price Prediction</span> আমরা আনন্দের সাথে
          জানাচ্ছি যে, মেরিনাসফ্ট অক্লান্ত পরিশ্রম করে পস সফ্টওয়্যারের <span style={{color:"#9715a3", fontWeight:"bold"}}>Sale Price Prediction</span> নামের নতুন ফিচার নিয়ে এসেছে যা আপনার পন্যের
          সর্বোত্তম বিক্রয় মূল্য নির্ধারন করতে সাহায্য করবে। বাজারের চাহিদা,
          ব্যবসায়ীক প্রতিযোগীতা আর পূরের ডেটা বিশ্লেষন করে আপনাকে সঠিক বিক্রয়
          মূল্য প্রদান করবে। এই ফিচারের কিছু সুবিধা: বৃদ্ধি বিক্রয়: সঠিক
          বিক্রয় মূল্য নির্ধারণ করে আপনি আপনার বিক্রয় এবং লাভ বৃদ্ধি করতে
          পারবেন। বাজারে প্রতিযোগিতা: বাজারের প্রবণতা এবং প্রতিযোগীদের মূল্যের
          সাথে আপনার পণ্যের মূল্য সামঞ্জস্য করে আপনি বাজারে প্রতিযোগিতামূলক
          সুবিধা অর্জন করতে পারবেন। সঠিক সিদ্ধান্ত গ্রহণ: ডেটা-চালিত সিদ্ধান্ত
          গ্রহণের মাধ্যমে আপনি আপনার ব্যবসার ঝুঁকি কমাতে পারবেন। আমরা আশা করি এই
          নতুন <span style={{color:"#9715a3", fontWeight:"bold"}}>Sale Price Prediction</span>  আপনার ব্যবসার জন্য সহায়ক হবে।
        </div>
        <div className="contuct_us_last_part">
          <div className="content_contact">
            <h1>Want to Join Us as a Partner?</h1>
            <p>
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
    </>
  );
}

export default SalePrediction;
