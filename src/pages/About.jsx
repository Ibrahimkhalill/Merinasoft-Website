import React, { useEffect, useState } from 'react';
import '../pages/About.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import merinaSoftLogo from '../images/merinasoft_logo.png'


const About = () => {

    useEffect(() => {
        document.title ="About - Merinasoft Limited"
        Aos.init({ duration: 1200 });
        window.scrollTo(0, 0);
    }, []);

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
                <div className='about-root-container'>
                    <img className="address-logo" src={merinaSoftLogo} alt="" />
                    <div className="container-one">
                        <p className='namfa_details_container' >About Us</p>
                        <p className='namfa_details_container' data-aos="flip-left">
                            Our software company is a team of dedicated professionals who are passionate about creating innovative solutions that empower our clients to achieve their goals. We strive to deliver cutting-edge software that is not only functional but also intuitive and user-friendly.
                        </p>
                        <p className='namfa_details_container' data-aos="flip-right">
                            Our company is built on a foundation of collaboration and teamwork, and we believe that the best results come from working together. We value open communication and transparency, and we work closely with our clients to ensure that their needs are met and their expectations are exceeded.
                        </p>
                        <p className='namfa_details_container' data-aos="flip-left">
                            At our core, we are a customer-centric company. We believe that our success is directly tied to the success of our clients, and we are committed to delivering software solutions that drive real business value. We understand that every client is unique, and we take the time to understand their specific needs and tailor our solutions accordingly.

                        </p>
                        <p className='namfa_details_container' data-aos="flip-right">
                            Ultimately, our goal is to be a trusted partner to our clients, providing them with the tools and expertise they need to achieve their objectives.
                            We understand that software development can be a complex and time consuming process, which is why we strive to make it as transparent and collaborative as possible.
                        </p>

                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • We understand that every client is unique and we give that effort to understand their specific needs and tailor our solutions accordingly.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • We are always seeking out new and innovative ways to solve complex problems and provide value to our clients.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • We are always seeking out new and innovative ways to solve complex problems and provide value to our clients.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • Our focus on customer satisfaction is evident in the positive feedback we receive from our clients.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • We are experienced in working with clients from a variety of industries, including healthcare, finance, education, and more.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • Our team is constantly learning and improving, attending industry conferences and pursuing continuing education opportunities to stay on the cutting edge of technology and software development.

                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • We are committed to ethical business practices and believe in treating our clients with honesty and respect.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • At our core, we are a customer-centric company that is focused on delivering exceptional results and building strong, lasting relationships with our clients.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • We offer a wide range of software development services, including web development, mobile app development, custom software development, and more.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • Our team is experienced in working with a variety of programming languages and frameworks, including Java, Android, React, and more.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • We understand the importance of user experience and work closely with our clients to ensure that their software solutions are not only functional but also intuitive and user-friendly.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • We are committed to transparency and provide detailed project plans and progress reports to our clients throughout the software development process.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • We try work in Agile methodologies approach that can adapt to meet the specific needs of each project.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • We offer ongoing maintenance and support services to ensure that our clients' software solutions remain up-to-date and perform optimally.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • Our team is made up of talented and dedicated professionals who are committed to delivering exceptional results and building strong, long-lasting relationships with our clients.
                        </p>
                        <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                            • If you're looking for a software development company that is committed to excellence, innovation, and collaboration, look no further than us.
                        </p>
                    </div>
                </div>

            ) : (
            <div className='about-root-container'>
                <img className="address-logo" src={merinaSoftLogo} alt="" />
                <div className="container-one">
                    <p className='namfa_details_container' >আমাদের সম্পর্কে</p>
                    <p className='namfa_details_container' data-aos="flip-left">
                        আমাদের সফটওয়্যার কোম্পানি দক্ষ ও নিবেদিত ডেভেলপার দ্বারা গঠিত একটি দল, যারা উদ্ভাবনী সমাধান সৃষ্টির ব্যাপারে উৎসাহী যা আমাদের গ্রাহকদের লক্ষ পুরনে সহায়ক।
                    </p>
                    <p className='namfa_details_container' data-aos="flip-right">
                        আমাদের কোম্পানীটি সহযোগিতা ও টিমওয়ার্কের ভিত্তিতে গড়ে তোলা এবং আমরা বিশ্বাস করি যে একসাথে কাজ করার মাধ্যমে সেরা ফলাফল পাওয়া যায়। আমরা উন্মুক্ত যোগাযোগ ও স্বচ্ছতাকে মূল্য দেই, এবং আমরা আমাদের ক্লায়েন্টদের সাথে ঘনিষ্ঠভাবে কাজ করি যাতে তাদের চাহিদা এবং প্রত্যাশা পূরণ হয়।
                    </p>
                    <p className='namfa_details_container' data-aos="flip-left">
                        আমরা মুলত একটি গ্রাহক-কেন্দ্রিক কোম্পানি। আমরা বিশ্বাস করি যে আমাদের সাফল্য সরাসরি আমাদের ক্লায়েন্টদের সাফল্যের সাথে জড়িত, এবং আমরা এমন সফটওয়্যার সমাধান সরবরাহ করতে প্রতিশ্রুতিবদ্ধ যা প্রকৃত ব্যবসায়ের মূল্যায়ন করে। আমরা বুঝি যে প্রতিটি ক্লায়েন্ট অনন্য, এবং আমরা তাদের নির্দিষ্ট চাহিদাগুলি বুঝতে এবং সেই অনুযায়ী আমাদের সমাধানগুলি তৈরি করতে সময় নেই।
                    </p>
                    <p className='namfa_details_container' data-aos="flip-right">
                        চূড়ান্তভাবে, আমাদের লক্ষ্য হল আমাদের ক্লায়েন্টদের একটি বিশ্বস্ত অংশীদার হওয়া, তাদের লক্ষ্য অর্জনের জন্য তাদের প্রয়োজনীয় সরঞ্জাম এবং দক্ষতা প্রদান করা।
                        আমরা বুঝি যে সফটওয়্যার নির্মাণ একটি জটিল ও সময়সাপেক্ষ প্রক্রিয়া হতে পারে, তাই আমরা এটিকে যতটা সম্ভব স্বচ্ছ এবং সহযোগিতামূলক উপায়ে করার চেষ্টা করি।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •আমরা বুঝি যে প্রতিটি ক্লায়েন্ট ভিন্ন এবং আমরা তাদের নির্দিষ্ট চাহিদাগুলি বুঝতে এবং সেই অনুযায়ী আমাদের সমাধানগুলি তৈরি করতে শ্রম দেই।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •আমরা সবসময় জটিল সমস্যা সমাধান এবং আমাদের ক্লায়েন্টদের মূল্যায়নের জন্য নতুন এবং উদ্ভাবনী উপায় খুজে থাকি।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •গ্রাহক সন্তুষ্টির উপর আমাদের মনোযোগ আমাদের ক্লায়েন্টদের কাছ থেকে আমরা যে ইতিবাচক প্রতিক্রিয়া পাই তাতে স্পষ্ট।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •  আমরা স্বাস্থ্যসেবা, অর্থ, শিক্ষা এবং আরও অনেক খাতের ক্লায়েন্টদের সাথে কাজ করতে অভিজ্ঞ।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •  আমাদের দল ক্রমাগত শিখছে এবং উন্নতি করছে, শিল্প কার্যক্রমে যোগ দিচ্ছে এবং প্রযুক্তি ও সফটওয়্যার বিকাশের আধুনিক প্রান্তে থাকার জন্য অবিরত শিক্ষার সুযোগগুলি অনুসরণ করছে।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •আমরা নৈতিক ব্যবসা চর্চায় অঙ্গীকারবদ্ধ এবং আমাদের ক্লায়েন্টদের সাথে সততা ও সম্মানের সহিত আচরণে বিশ্বাসী।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •আমরা ওয়েব ডেভেলপমেন্ট, মোবাইল অ্যাপ ডেভেলপমেন্ট, কাস্টম সফটওয়্যার ডেভেলপমেন্ট এবং আরও অনেক সফটওয়্যার ডেভেলপমেন্ট পরিষেবাগুলি বিস্তৃত পরিসরে অফার করে থাকি।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •আমাদের দল জাভা, অ্যান্ড্রয়েড, রিঅ্যাক্ট এবং আরও বিভিন্ন প্রোগ্রামিং ভাষা ও ফ্রেমওয়ার্কের সাথে কাজ করায় অভিজ্ঞ৷
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •আমরা ব্যবহারকারীর অভিজ্ঞতার গুরুত্ব বুঝি এবং আমাদের ক্লায়েন্টদের সাথে ঘনিষ্ঠভাবে কাজ করি তা নিশ্চিত করতে যে তাদের সফটওয়্যার সমাধানগুলি কেবল কার্যকরী নয় বরং স্বজ্ঞাত ও ব্যবহারকারী-বান্ধব হয়।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •আমরা স্বচ্ছতার জন্য প্রতিশ্রুতিবদ্ধ এবং সফটওয়্যার উন্নয়ন প্রক্রিয়া জুড়ে আমাদের ক্লায়েন্টদের বিস্তারিত পরিকল্পনা এবং অগ্রগতি প্রতিবেদন সরবরাহ করি।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •আমরা অ্যাজাইল পদ্ধতিতে কাজ করার চেষ্টা করি যা প্রতিটি প্রোজেক্টের নির্দিষ্ট চাহিদার সাথে মানিয়ে নিতে পারে।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •আমাদের ক্লায়েন্টদের সফটওয়্যার সমাধানগুলি যেন আপ-টু-ডেট থাকে এবং সর্বোত্তমভাবে কাজ করে তা নিশ্চিত করতে আমরা চলমান রক্ষণাবেক্ষণ এবং সহায়তা সেবা অফার করি।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •আমাদের দল প্রতিভাবান ও নিবেদিত পেশাদারদের নিয়ে গঠিত যারা ব্যতিক্রমী ফলাফল প্রদান করতে এবং আমাদের ক্লায়েন্টদের সাথে শক্তিশালী, দীর্ঘস্থায়ী সম্পর্ক গড়ে তুলতে প্রতিশ্রুতিবদ্ধ।
                    </p>
                    <p className='namfa_details_container_withoutbold' data-aos="flip-down">
                        •আপনি যদি এমন একটি সফটওয়্যার ডেভেলপমেন্ট কোম্পানি খুঁজে থাকেন যেটি উৎকর্ষ, উদ্ভাবন এবং সহযোগিতার জন্য প্রতিশ্রুতিবদ্ধ, তবে নির্দ্বিধায় আমাদের শরণাপন্ন হতে পারেন।
                    </p>
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

export default About
