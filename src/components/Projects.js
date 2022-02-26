import React, { useContext } from 'react'
import { ProjectsContext } from '../context/ProjectsContext';

const Projects = ({ projectsRef, toggleModal, setSelectedProject}) => {

  const projects = useContext(ProjectsContext);
  console.log(projects)


  const setProject = (project) => {
    setSelectedProject(project);
    toggleModal()
  }

  return (
      <section ref={projectsRef} id="projects-section" className="projects">
        <h3 className="projects__title">Projects</h3>
          <div className="projects__container">
              {projects.map(project => {
                  return (
                      <div key={project.name} className="project__card" style={{backgroundImage: `url(${project.img_preview})`}}>
                        <div className="project__card-content">
                        <h2 className="project__card-title">{project.name}</h2>
                            <p className="project__card-body">{project.snippet}</p>
                            <div className="project__card-buttons">
                                <div className="button" onClick={() => setProject(project.name)}>Learn More</div>
                                  <a href={`${project.github}`}className="button">Github Link</a>
                            </div>
                        </div>
                    </div>
                  )
                  
              })}
        </div>
    </section>
  )
}

export default Projects;