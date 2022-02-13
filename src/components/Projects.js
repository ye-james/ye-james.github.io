import React from 'react'

const Projects = () => {
  return (
    <section id="projects-section" className="projects">
        <h3 className="projects__title">Projects</h3>
        <div className="projects__container">
            <div className="project__card">
                <div className="project__card-content">
                    <h2 className="project__card-title">Some Awesome Project</h2>
                    <p className="project__card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt fugiat nihil modi
                        saepe, deleniti necessitatibus doloremque nobis voluptate sapiente!</p>
                    <a href="#" className="button">Learn More</a>
                </div>
            </div>
            <div className="project__card">
                <div className="project__card-content">
                    <h2 className="project__card-title">Some Awesome Project</h2>
                    <p className="project__card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt fugiat
                        nihil modi
                        saepe, deleniti necessitatibus doloremque nobis voluptate sapiente!</p>
                    <a href="#" className="button">Learn More</a>
                </div>
            </div>
            <div className="project__card">
                <div className="project__card-content">
                    <h2 className="project__card-title">Some Awesome Project</h2>
                    <p className="project__card-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt fugiat
                        nihil modi
                        saepe, deleniti necessitatibus doloremque nobis voluptate sapiente!</p>
                    <a href="#" className="button">Learn More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects