import React from 'react'
import '../pages/Home.css';
import video from '../images/stars.mp4';

const Home = () => {
    return (
        <div className='home_root'>
            <video className='video_container' src={video} muted autoPlay loop type='video/mp4'>
                <span className='company_header'>
                    Merina Soft Limited
                </span>

            </video>

            <div className="homeContent">
                <div className="textDiv">
                    <span>
                        Merina Soft Limited
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home