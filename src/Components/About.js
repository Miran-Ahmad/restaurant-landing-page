import React from 'react'
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-conrtainer">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">
                    About
                </p>
                <h1 className="primary-heading">
                    Food Is An Important Part Of A Balanced Diet
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum, eaque nobis veniam repellendus saepe accusantium quisquam corrupti quasi ut esse dicta temporibus odio qui molestiae aperiam possimus! Reiciendis, quos!
                </p>
                <p className="primary-text">
                    At facere non placeat odio tenetur assumenda. Ad et doloremque totam deleniti molestiae consectetur praesentium quisquam omnis?
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button"><BsFillPlayCircleFill />Watch Video</button>
                </div>
            </div>
        </div>
    )
}

export default About