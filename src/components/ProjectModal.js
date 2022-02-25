import React, { useContext } from 'react';
import ReactDOM from 'react-dom'
import { ProjectsContext } from '../context/ProjectsContext';

const ProjectModal = ({ selectedProject, onClose}) => {

  const projectState = useContext(ProjectsContext);
  const project = projectState.filter(proj => proj.name === selectedProject)[0]


  return ReactDOM.createPortal(
    <>
      <div className="modal__overlay" />
      <div className='modal'>
        <header className="modal__header">
          <div className="modal__header-main">
            <h3 className="modal__title">{project.name}</h3>
            <button className="btn btn-close" onClick={() => onClose()}>&#10006;</button>
          </div>
          <div className="modal__header-sub">
            {project.technologies.map((tech, index) => {
              return `${tech} ${index !== project.technologies.length-1 ? ' | ' : ''}`
            })}
          </div>
        </header>
        <div className="modal__body">
          <p className="text modal__text">
            {project.description}
          </p>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  )
}

export default ProjectModal