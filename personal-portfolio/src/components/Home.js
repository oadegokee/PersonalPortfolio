import React from "react";
import "../styles/Home.css";
import "../index.css";
import LuwaImg from "../assets/luwa-adegoke.jpg";
import LuwaResume from "../assets/OlaoluwaAdegokeResume.pdf";
import { contactLinks } from "../constants";

const Home = () => {
    return (
        <div className="top">
            <div className="welcome-details">
                <div className="welcome">
                    <h1>Hi, I am Olaoluwa</h1>
                    <h2>Welcome to my portfolio website!</h2>
                    <p>
                        I'm a software engineering student with a solid foundation in web and software development, always looking for ways to expand my skills and take on projects that make a real impact. Through internships and hands-on projects, I've gained practical experience across different areas in tech. I'm excited to keep growing and I'm open to exploring software engineering opportunities that push me to learn even more.
                        Scroll to learn more about me and feel free to explore my projects.
                    </p>
                    <div className="contact-links">
                        {contactLinks.map((links) => (
                            <a href={links.link} title={links.name} target="_blank">
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
        </div>
    )
}

export default Home;