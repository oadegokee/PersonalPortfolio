import React from 'react';
import "../styles/Projects.css";
import { projects } from '../constants';

const Projects = () => {
    return (
        <div id='projects'>
            <h1 className='project-label'>Projects</h1>
            <div className='project-container'>
                {projects.map((project) => (
                    <div className='card-wrapper'>
                        <div className='card'>
                            <div className='front'>
                                <h2 className='project-name'>{project.name}</h2>
                                <img src={project.projectImage}></img>
                            </div>
                            
                          
                            <div className='back'>
                                <h2 className='project-name'>{project.name}</h2>
                                <p className='project-tech'><b>Technologies used:</b> {project.languages}</p>
                                <p className='project-desc'>{project.description}</p>

                                <div className='project-links'>

                                    {project.demoUrl && (
                                        <div className='demo-link-wrapper'>
                                            <a className='demo-link' href={project.demoUrl} target='blank'>View Demo</a>
                                        </div>
                                    )}
                                
                                    <div className='project-link-wrapper'>
                                        <a className='project-link' href={project.projectUrl} target='blank'>View Project</a>
                                    </div>

                                    
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;