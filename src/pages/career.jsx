import React,{useEffect} from 'react';
import join_us from '../images/career/join_us.jpg';
import connection from '../images/career/connection.png';
import flexible from '../images/career/flexible.png';
import tech from '../images/career/tech.png';
import './career.css';

const Career = () => {
	useEffect(()=>{
		document.title ="Career - Merinasoft Limited"
	  },[])
	return (
		<div className="root_container_career">
			<div className="img_container">
				<img className='img_join_us' src={join_us} alt="" />
			</div>

			<div className="description_container_career">
				<h1>Let's grow together.</h1>

				<div className="our_services_container_career">

					<div className="our_services_item_career">
						<img src={connection} alt="Desktop Software Development" className='our_services_img_career' />
						<div className="our_services_desc_career">
							<h4 className='our_services_header_career'>Connection </h4>
							<p className='our_services_para_career'>
							We come together wherever we are across time zone, regions, offices and screens.
							</p>
						</div>
					</div>

					<div className="our_services_item_career">
						<img src={tech} alt="Desktop Software Development" className='our_services_img_career' />
						<div className="our_services_desc_career">
							<h4 className='our_services_header_career'>Technology </h4>
							<p className='our_services_para_career'>
								We use Java, JavaScript and its library, framework to develop our product. But for better experience, we can go out of the box.
							</p>
						</div>
					</div>

					<div className="our_services_item_career">
						<img src={flexible} alt="Desktop Software Development" className='our_services_img_career' />
						<div className="our_services_desc_career">
							<h4 className='our_services_header_career'>Flexibility </h4>
							<p className='our_services_para_career'>
							We believe in your freedom to working style. Make sure you give your best to help us all thrive.
							</p>
						</div>
					</div>
				</div>

				<div className="contact_career">
				<p>If you want working with us and develop you and our company togther please send us your latest cv at <b>merinasoftteam@gmail.com</b>. <br />
				For any kind of confusion please contact at <b>017405700100, 01705506918</b></p>
				</div> 
			</div>



		</div>
	);
};

export default Career;
