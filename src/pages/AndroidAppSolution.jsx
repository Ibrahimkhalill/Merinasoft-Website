import React, { useEffect, useState } from 'react'
import '../pages/AndroidAppSolution.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import HomeImage from '../images/home_page.png'
import BalanceStatement from '../images/balance_statement_page_android.png'
import BrandEntry from '../images/brand_entry_add_android.png'
import BrandEdit from '../images/brand_entry_edit_android.png'
import Business from '../images/business_page_android.png'
import Buy from '../images/buy_page_android.png'
import Chalan from '../images/chalan_page_chalan_android.png'
import Chalan_customer from '../images/chalan_page_customer_android.png'
import Stock from '../images/Screenshot_stock_page.png'
import Sell from '../images/Screenshot_sell_page.png'
import Form from 'react-bootstrap/Form';


const AndroidAppSolution = () => {

  useEffect(() => {
    Aos.init({ duration: 1200 });
    window.scrollTo(0, 0);
  }, [])

  const [switchState, setSwitchState] = useState(true);
  const [language, setLanguage] = useState("English");

  const handleChange = (e) => {
    setSwitchState(!switchState)
    if (switchState === false) {
      setLanguage("English");
    }
    else {
      setLanguage("বাংলা");
    }
  }


  return (
    <div>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label={language}
          defaultChecked={switchState}
          onChange={handleChange}
          className="language_switch"
        />
      </Form>
      {switchState ? (
        <div className='root_container'>
          <div className="card" id='jute_coils' data-aos="flip-up">
            <img className="card_image" src={HomeImage} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Home Page</div>
              <p className="card_description">
                This is our one of the android application designed for <b> Car color distributer </b>. <br /><br />

                The HOMEPAGE consists of two sections. The first section has all the brand buttons in it. This part is scrollable to adjust more brand buttons in it. The second section has all the functional module buttons in it. You can sign out from the app from this page as well.
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Brand Page</div>
              <p className="card_description">
                In BUSINESS page you can both buy and sell a product brand wise and you can choose each product by their specific details. For example, you can select specific brand, code etc of a product to buy or sell.
              </p>
            </div>
            <img className="card_image" src={BrandEntry} alt="Jute Rope" />

          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <img className="card_image" src={BalanceStatement} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Balance</div>
              <p className="card_description">
                The BALANCE page shows the transaction history of any customer or transactions made between certain periods. This gives an idea of the business scenario with particular customer. You can also see the transactions of a month through this module.
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Stock</div>
              <p className="card_description">
                To check a product’s availability you have to use the STOCK module. You can check each item’s unit price in this module. Here you can also find the products according their detail.
              </p>
            </div>
            <img className="card_image" src={Stock} alt="Jute Rope" />
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <img className="card_image" src={Chalan} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Chalan</div>
              <p className="card_description">
                The CHALLAN module is used to check the details of a particular invoice or challan. You can find each challan by their number or customer name. Thus you can see what items were bought or sold under an invoice.
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Edit</div>
              <p className="card_description">
                You can also update a pre entered brand name and logo in this module. The edited details will be updated in the homepage button as well.
              </p>
            </div>
            <img className="card_image" src={BrandEdit} alt="Jute Rope" />
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <img className="card_image" src={Buy} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Buy</div>
              <p className="card_description">
                The BUY module is used to stock in or to buy a product according their details. These products will be included in the stock.
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Sell</div>
              <p className="card_description">
                The SALE module is used to stock out or to sell a product by their details. These products will be excluded from the stock.
              </p>
            </div>
            <img className="card_image" src={Sell} alt="Jute Rope" />
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <img className="card_image" src={HomeImage} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Customers</div>
              <p className="card_description">
                You can find the entire customer’s information in the CUSTOMER module where you can search customer by their name or id. Information like customer address, phone number will be found here.
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Inputs</div>
              <p className="card_description">
                The INPUT module is used to introduce a new product to the system. Specifically, it serves the data entry purpose of the app. To run the app properly, first you must input some data in it.
              </p>
            </div>
            <img className="card_image" src={HomeImage} alt="Jute Rope" />

          </div>

        </div>
      ) : (
        <div className='root_container'>
          <div className="card" id='jute_coils' data-aos="flip-up">
            <img className="card_image" src={HomeImage} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Home Page</div>
              <p className="card_description">
                হোমপেজ দুটি ভাগে গঠিত। প্রথম ভাগে সমস্ত ব্র্যান্ডের বাটন রয়েছে। এই অংশটি স্ক্রল করা যায় যাতে করে আরও ব্র্যান্ড বাটন যুক্ত হতে পারে। দ্বিতীয় ভাগে এর সমস্ত কার্যকরী মডিউলের বাটনগুলি রয়েছে। আপনি এই পেজে অ্যাপ থেকে সাইন আউটও করতে পারবেন।
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Brand Page</div>
              <p className="card_description">
                বিজনেস পেজে আপনি ব্র্যান্ড অনুযায়ী পণ্য ক্রয়-বিক্রয় উভয়ই করতে পারেন এবং নির্দিষ্ট বিবরণ দ্বারা প্রতিটি পণ্য বাছাই করতে পারবেন।
                উদাহরণস্বরূপ, আপনি ক্রয় বা বিক্রয়ের জন্য একটি পণ্যের নির্দিষ্ট ব্র্যান্ড, কোড ইত্যাদি বাছাই করতে পারবেন।
              </p>
            </div>
            <img className="card_image" src={BrandEntry} alt="Jute Rope" />

          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <img className="card_image" src={BalanceStatement} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Balance</div>
              <p className="card_description">
                ব্যালেন্স পেজটি কোনো গ্রাহকের লেনদেনের ইতিহাস বা নির্দিষ্ট সময়ের মধ্যে করা লেনদেন দেখায়। এটি নির্দিষ্ট গ্রাহকের সাথে ব্যবসার পরিস্থিতি সম্পর্কে ধারণা দেয়। আপনি এই মডিউলের মাধ্যমে এক মাসের লেনদেনও দেখতে পারেন।
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Stock</div>
              <p className="card_description">
                একটি পণ্যের মজুদ জানতে আপনাকে স্টক মডিউলটি ব্যবহার করতে হবে। আপনি এই মডিউলে প্রতিটি আইটেমের দাম দেখতে পাবেন। এখানে আপনি তথ্য অনুযায়ী পণ্য খুঁজতেও পারবেন।
              </p>
            </div>
            <img className="card_image" src={Stock} alt="Jute Rope" />
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <img className="card_image" src={Chalan} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Chalan</div>
              <p className="card_description">
                CHALLAN মডিউলটি একটি নির্দিষ্ট চালান বা চালানের বিবরণ দেখতে ব্যবহৃত হয়। আপনি প্রতিটি চালান তাদের নম্বর বা গ্রাহকের নাম দ্বারা খুঁজে পেতে পারেন। এইভাবে আপনি একটি চালানের অধীনে কি আইটেম কেনা বেচা হয়েছে তা দেখতে পারবেন।
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Edit</div>
              <p className="card_description">
                এই মডিউলে আপনি আগে থেকে দেওয়া যেকোনো ব্র্যান্ডের নাম এবং লোগো আপডেট করতে পারবেন। এডিট করা তথ্য হোমপেজ বাটনে আপডেট হয়ে যাবে।
              </p>
            </div>
            <img className="card_image" src={BrandEdit} alt="Jute Rope" />
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <img className="card_image" src={Buy} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Buy</div>
              <p className="card_description">
                BUY মডিউলটি তাদের ধরন অনুযায়ী একটি পণ্য স্টক করতে বা কেনার জন্য ব্যবহৃত হয়। এই পণ্যসমূহ স্টকে অন্তর্ভুক্ত হয়ে যাবে।
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Sell</div>
              <p className="card_description">
                SALE মডিউলটি স্টক আউট বা বিবরণ অনুসারে পণ্য বিক্রি করতে ব্যবহৃত হয়। বিক্রিত পণ্যসমূহ স্টক থেকে বাদ যাবে।
              </p>
            </div>
            <img className="card_image" src={Sell} alt="Jute Rope" />
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <img className="card_image" src={HomeImage} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">Customers</div>
              <p className="card_description">
                আপনি CUSTOMER মডিউলে সমস্ত গ্রাহকদের তথ্য খুঁজে পেতে পারেন যেখানে আপনি গ্রাহককে তাদের নাম বা আইডি দ্বারা অনুসন্ধান করতে পারবেন। গ্রাহকের ঠিকানা, ফোন নম্বরের মতো তথ্য এখানে পাওয়া যাবে।
              </p>
            </div>
          </div>

          <div className="card" id='jute_coils' data-aos="flip-left">
            <div className="card_text">
              <div className="card_header">Inputs</div>
              <p className="card_description">
                INPUT মডিউলটি সিস্টেমে একটি নতুন পণ্য চেনানোর কাজে ব্যবহৃত হয়। মূলত, এটি অ্যাপের ডাটা এন্ট্রির উদ্দেশ্য সাধন করে। অ্যাপটি সঠিকভাবে চালানোর জন্য প্রথমে আপনাকে এতে কিছু ডাটা ইনপুট করতে হবে।
              </p>
            </div>
            <img className="card_image" src={HomeImage} alt="Jute Rope" />

          </div>

        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
export default AndroidAppSolution