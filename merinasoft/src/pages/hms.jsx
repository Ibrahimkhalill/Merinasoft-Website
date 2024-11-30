import './hms.css'
import React, { useEffect, useState } from 'react'
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

import all_modul from '../images/hms/all_modul.PNG';
import patient_appointment from '../images/hms/patient_appointment.PNG';
import patient_admission from '../images/hms/patient_admission.PNG';
import patient_add_update from '../images/hms/patient_add_update.PNG';
import payment_info from '../images/hms/payment_info.PNG';
import lab_test_info from '../images/hms/lab_test_info.PNG';
import emergency_patient from '../images/hms/emergency_patient.PNG';
import bill_list from '../images/hms/bill_list.PNG';
import add_annoucement from '../images/hms/add_annoucement.PNG';
import add_update_branch from '../images/hms/add_update_branch.PNG';
import add_update_employee from '../images/hms/add_update_employee.PNG';
import announcement_list from '../images/hms/announcement_list.PNG';
import bed_information from '../images/hms/bed_information.PNG';
import banch_list from '../images/hms/banch_list.PNG';
import department_and_designation_add_update_and_list from '../images/hms/department_and_designation_add_update_and_list.PNG';
import patient_payment_list from '../images/hms/patient_payment_list.PNG';
import patient_release from '../images/hms/patient_release.PNG';
import policy_add from '../images/hms/policy_add.PNG';
import report_print from '../images/hms/report_print.PNG';
import shift_list_add_update from '../images/hms/shift_list_add_update.PNG';
import view_employee_details from '../images/hms/view_employee_details.PNG';


const Hms = () => {
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
            <img className="card_image" src={all_modul} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">All Modules</div>
              <p className="card_description">
                Hospital Management System. Several modules in this application. This application is design to run whole hospital. It can also use in module architecture. Each module has sub module.
                <ul>
                  <li>Reception</li>
                  <li>Employee</li>
                  <li>Organization</li>
                  <li>Orgranization Report</li>
                  <li>Lab Report & many more.</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Patient Appointment Service Information</div>
            <img className="card_image_top" src={patient_appointment} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                In this module when a paient asked to visit a doctor then get appointment of the doctor. Some inputs are need to fill up to get an appointment.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Patient Admission</div>
            <img className="card_image_top" src={patient_admission} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                In this module when a patient come to admit then he needs to give some basic information. His symptoms must be given to get the best doctor for him. He can also choice the bed type according to availability in the hospital. If he is old patient then he does not need to give more Information for admission cause the system has already his information.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Patient Add or Update in program</div>
            <img className="card_image_top" src={patient_add_update} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                In this module when a patient come for an appointment then some basic information need to entry for further process. Name, blood group, photo, date of birth, address are the information. These information is also important for if the patient come again and again. Then he doesnot need to give it multiple time.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Payment</div>
            <img className="card_image_top" src={payment_info} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                This is design for any transaction with the patient which can be cash or e-wallet or card service.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Lab Test Information</div>
            <img className="card_image_top" src={lab_test_info} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                By this we can easily lab tests of a patient.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Emergency Patient Admission</div>
            <img className="card_image_top" src={emergency_patient} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                When a patient come for emergency then we cannot take much information from the patient. So we keep it minimal.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Bill List</div>
            <img className="card_image_top" src={bill_list} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                In this section a patients all sevices bill can get in one place and making the final bill.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Add Announcement</div>
            <img className="card_image_top" src={add_annoucement} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                Any kind of announcement will be published by this section. It also can be department wise.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Add Update Branch</div>
            <img className="card_image_top" src={add_update_branch} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                If a new branch open or modification any branch information of the organization then this section will help.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Add Update Employee</div>
            <img className="card_image_top" src={add_update_employee} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                If a new employee join then those information can be insert in this section. Modification of a employee information like update salary or got promotion then update can be done in this section.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Announcement List</div>
            <img className="card_image_top" src={announcement_list} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                All kind of announcement can be found here. Previous announcement, upcoming announcement and active announcement are the section of announcement.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Bed Information</div>
            <img className="card_image_top" src={bed_information} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                Add a new bed can be perform in this section. Also bed list those occupied or available all are here. This sction can be use for patient bed preference.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Banch List</div>
            <img className="card_image_top" src={banch_list} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                All branch detail information is here.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Department & Designation</div>
            <img className="card_image_top" src={department_and_designation_add_update_and_list} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                Oragnizations department and employees designation are showing here in table. We can do add, update and delete operations on this data.
              </p>
            </div>
          </div>
          

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Patient Payment List</div>
            <img className="card_image_top" src={patient_payment_list} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                All patient payments are here in a table. 
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Patient Release</div>
            <img className="card_image_top" src={patient_release} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
              This section is very important when a patient need to release. Paitent details like total payable, total paid all are here. 
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Policy Add</div>
            <img className="card_image_top" src={policy_add} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
              Any kind of policy for the organization we can add here. It will be then visible to targeted audience in the notice board page.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Report Print</div>
            <img className="card_image_top" src={report_print} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
              Any kind of patient that is indoor or outddor patient's all the test report details are here.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Shift Details</div>
            <img className="card_image_top" src={shift_list_add_update} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
              This portion is created for tracking shift for employees.
              </p>
            </div>
          </div>
          
          
          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Employee Details</div>
            <img className="card_image_top" src={view_employee_details} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
              Here we can see a employee all details like joining date, salary, performance, national identification number and everythig.
              </p>
            </div>
          </div>




        </div>
      ) : (
        <div className='root_container'>

          <div className="card" id='jute_coils' data-aos="flip-up">
            <img className="card_image" src={all_modul} alt="Jute Rope" />
            <div className="card_text">
              <div className="card_header">All Modules</div>
              <p className="card_description">
                Hospital Management System. Several modules in this application. This application is design to run whole hospital. It can also use in module architecture. Each module has sub module.
                <ul>
                  <li>Reception</li>
                  <li>Employee</li>
                  <li>Organization</li>
                  <li>Orgranization Report</li>
                  <li>Lab Report & many more.</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Patient Appointment Service Information</div>
            <img className="card_image_top" src={patient_appointment} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                In this module when a paient asked to visit a doctor then get appointment of the doctor. Some inputs are need to fill up to get an appointment.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Patient Admission</div>
            <img className="card_image_top" src={patient_admission} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                In this module when a patient come to admit then he needs to give some basic information. His symptoms must be given to get the best doctor for him. He can also choice the bed type according to availability in the hospital. If he is old patient then he does not need to give more Information for admission cause the system has already his information.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Patient Add or Update in program</div>
            <img className="card_image_top" src={patient_add_update} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                In this module when a patient come for an appointment then some basic information need to entry for further process. Name, blood group, photo, date of birth, address are the information. These information is also important for if the patient come again and again. Then he doesnot need to give it multiple time.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Payment</div>
            <img className="card_image_top" src={payment_info} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                This is design for any transaction with the patient which can be cash or e-wallet or card service.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Lab Test Information</div>
            <img className="card_image_top" src={lab_test_info} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                By this we can easily lab tests of a patient.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Emergency Patient Admission</div>
            <img className="card_image_top" src={emergency_patient} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                When a patient come for emergency then we cannot take much information from the patient. So we keep it minimal.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Bill List</div>
            <img className="card_image_top" src={bill_list} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                In this section a patients all sevices bill can get in one place and making the final bill.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Add Announcement</div>
            <img className="card_image_top" src={add_annoucement} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                Any kind of announcement will be published by this section. It also can be department wise.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Add Update Branch</div>
            <img className="card_image_top" src={add_update_branch} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                If a new branch open or modification any branch information of the organization then this section will help.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Add Update Employee</div>
            <img className="card_image_top" src={add_update_employee} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                If a new employee join then those information can be insert in this section. Modification of a employee information like update salary or got promotion then update can be done in this section.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Announcement List</div>
            <img className="card_image_top" src={announcement_list} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                All kind of announcement can be found here. Previous announcement, upcoming announcement and active announcement are the section of announcement.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Bed Information</div>
            <img className="card_image_top" src={bed_information} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                Add a new bed can be perform in this section. Also bed list those occupied or available all are here. This sction can be use for patient bed preference.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Banch List</div>
            <img className="card_image_top" src={banch_list} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                All branch detail information is here.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Department & Designation</div>
            <img className="card_image_top" src={department_and_designation_add_update_and_list} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                Oragnizations department and employees designation are showing here in table. We can do add, update and delete operations on this data.
              </p>
            </div>
          </div>
          

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Patient Payment List</div>
            <img className="card_image_top" src={patient_payment_list} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
                All patient payments are here in a table. 
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Patient Release</div>
            <img className="card_image_top" src={patient_release} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
              This section is very important when a patient need to release. Paitent details like total payable, total paid all are here. 
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Policy Add</div>
            <img className="card_image_top" src={policy_add} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
              Any kind of policy for the organization we can add here. It will be then visible to targeted audience in the notice board page.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Report Print</div>
            <img className="card_image_top" src={report_print} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
              Any kind of patient that is indoor or outddor patient's all the test report details are here.
              </p>
            </div>
          </div>

          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Shift Details</div>
            <img className="card_image_top" src={shift_list_add_update} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
              This portion is created for tracking shift for employees.
              </p>
            </div>
          </div>
          
          
          <div className="card_top" id='jute_coils' data-aos="flip-left">
            <div className="card_header_top">Employee Details</div>
            <img className="card_image_top" src={view_employee_details} alt="Jute Rope" />
            <div className="card_text_top">
              <p className="card_description_top">
              Here we can see a employee all details like joining date, salary, performance, national identification number and everythig.
              </p>
            </div>
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
};

export default Hms;
