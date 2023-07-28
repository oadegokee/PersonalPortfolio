import React from "react";
import "../styles/Home.css";
import "../index.css";
import LuwaImg from "../assets/luwa-adegoke.png";
import LuwaResume from "../assets/OlaoluwaAdegokeResume.pdf";
import { contactLinks } from "../constants";

const Home = () => {
    return (
        <div className="top">
            <div className="welcome">
                <h1>Hi, I am Luwa</h1>
                <h2>Welcome to my portfolio website!</h2>
                <p>
                    I am a software engineering student, constantly seeking new
                    challenges and opportunities to refine my skills and make a positive
                    impact in the tech world.
                    Scroll to learn more about and feel free to explore my projects and experiences
                </p>
                <div className="contact-links">
                    {contactLinks.map((links) => (
                        <a href={links.link}>
                            {links.icon()}
                        </a>
                    ))}
                </div>

                <div className="resume-wrapper">
                    <div className="resume">
                        <a href={LuwaResume} download>Download Resume</a>
                    </div>
                </div>
            </div>

            <div className="luwa-photo">
                    <img src={LuwaImg} alt=" of Olaoluwa Adegoke"></img>
                </div>
        </div>
    )
}

export default Home;