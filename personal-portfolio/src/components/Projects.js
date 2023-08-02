import React from 'react';
import "../styles/Projects.css";
import { projects } from '../constants';

const Projects = () => {
    return (
        <div id='projects'>
            <h1 className='project-label'>Projects</h1>
            <div className='project-container'>
                {projects.map((project) => (
                    <div className='card'>
                        <h2 className='project-name'>{project.name}</h2>
                        <div className='project-image-wrapper'>
                            <img src={project.projectImage}></img>
                        </div>
                        
                        <div className='project-description'>
                            <p>{project.description}</p>
                            <p>{project.languages}</p>
                        </div>

                        <div>
                            <a className='project-link' href={project.projectUrl}>View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;