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
                        <p>
                            Hello! My name is Olaoluwa Adegoke, and I'm originally from Lagos, Nigeria. 
                            I'm currently pursuing a Bachelor's degree in Software Engineering with a minor in Information Systems. 
                            My passion for web and software development lies in the ability to bring creative ideas to life and tackle complex challenges.
                        </p>
                        <p>
                            Recently, I completed an internship as an Applications Developer, where I worked on transitioning an application from older technology to a modern web framework, improving both security and user experience. 
                            This experience deepened my skills in ASP.NET MVC, UI design, and problem-solving, preparing me to make an impact in dynamic tech environments.
                            Beyond work, I enjoy building side projects to explore new skills and languages. Music is another big part of my life. I love curating playlists that offer a sense of escape and inspiration.

                        </p>
                        <p>
                            Looking forward, I'm excited to find roles that challenge me, encourage growth, and allow me to contribute meaningfully as a software engineer. Feel free to reach out below!
                        </p>
                    </div>
                    <div className='contact'>
                        <Link to="home" spy={true} smooth={true} onClick={handleNavItemClick}>Contact</Link>
                    </div>
                    
                </div>
                <div className='about-skills'>
                    <h2 >Skills</h2>
                    <div className='skills'>
                        <h3>Programming Languages</h3>
                        <div className='skillsGroup'>
                            <div>Java</div>
                            <div>JavaScript</div>
                            <div>Python</div>
                            <div>SQL</div>
                            <div>C#</div>
                            <div>C</div>
                            <div>Swift</div>
                            <div>PHP</div>
                            <div>Visual Basic</div>
                        </div>

                        <h3>Web Technologies & Databases</h3>
                        <div className='skillsGroup'>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>MySQL</div>
                        </div>
                        
                        <h3>Frameworks & Libraries</h3>
                        <div className='skillsGroup'>
                            <div>React</div>
                            <div>Node.js</div>
                            <div>jQuery</div>
                            <div>ASP.NET MVC</div>
                        </div>
                        
                        <h3>Developer Tools</h3>
                        <div className='skillsGroup'>
                            <div>Git</div>
                            <div>GitHub</div>
                            <div>Azure DevOps</div>
                            <div>VS Code</div>
                            <div>Eclipse</div>
                            <div>Visual Studio</div>
                            <div>SOAP UI</div>
                            <div>SQL Server Management Studio</div>
                        </div>
                        
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About