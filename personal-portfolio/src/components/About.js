import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "../styles/About.css";

const About = () => {
    const [click, setClick] = useState(false);
    const handleNavItemClick = () => {
        setClick(false);
        
    };
    return (
        <div id='about'>
            <div className='about-info'>
                <div className='about-me'>
                    <h1>ABOUT ME</h1>
                    <div className='about-me-details'>
                        <p>My full name is Olaoluwa Adegoke and I am originally from Lagos, Nigeria.
                            I am currently pursuing my Bachelors degree in Software engineering with a minor 
                            in Information Systems. I have an interest in web and software development because it allows me to bring my creative ideas to life.
                            I am eager to apply my knowledge and skills to real world problems.
                        </p>
                        <p>
                            Outside of work I like working on side projects and exploring new skils, I am always
                            excited to learn and grow. In my downtime, I find relaxation in curating playlists
                            that provide a sense of escape.
                        </p>
                        <p>
                            Looking ahead, I am passionate about exploring job opportunities where I can continue
                            to learn and grow as a software engineer. I am open to roles that provide a challenging
                            environment, allowing me to expand my skills. Feel free to contact me below.
                        </p>
                    </div>
                    <div className='contact'>
                        <Link to="home" spy={true} smooth={true} onClick={handleNavItemClick}>Contact</Link>
                    </div>
                    
                </div>
                <div className='about-skills'>
                    <h2 >Skills</h2>
                    <div className='skills'>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>jQuery</div>
                        <div>React</div>
                        <div>Java</div>
                        <div>C#</div>
                        <div>C++</div>
                        <div>Swift</div>
                        <div>SQL</div>
                        <div>PHP</div>
                        <div>Visual Basic</div>
                        <div>Git</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About