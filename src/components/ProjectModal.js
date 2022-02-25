import React, { useContext } from 'react';
import ReactDOM from 'react-dom'

const ProjectModal = ({onClose}) => {



  return ReactDOM.createPortal(
    <>
      <div className="modal__overlay" />
      <div className='modal'>
        <header className="modal__header">
          <div className="modal__header-main">
            <h3 className="modal__title">Project Title</h3>
            <button className="btn btn-close" onClick={() => onClose()}>&#10006;</button>
          </div>
          <div className="modal__header-sub">
            React.js | Node.js
          </div>
        </header>
        <div className="modal__body">
          <p className="text modal__text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eligendi porro voluptatem ea quibusdam harum delectus a eveniet non repellat rem mollitia, ut, iusto vero.
          </p>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  )
}

export default ProjectModal