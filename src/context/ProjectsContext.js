import React, { createContext, useState } from 'react';

const ProjectsContext = createContext();


const currentProjects = [
    {
        name: "Slick Roads",
        github: "https://github.com/ye-james/slick-roads",
        link: "https://slickroads.netlify.app/",
        snippet: "Slick roads is a front-end web application that allows users to search for directions from point A to B while seeing the weather conditions along the route.",
        description: "Slick roads is a front-end web application that allows users to search for directions from point A to B while seeing the weather conditions along the route. The application was built using React, state management is handled by React's context api. The map and directions services are from the Google Maps, Directions, and Places API. Weather information is gathered through WeatherAPI",
        technologies: ['React', 'CSS', 'Google Maps API', 'WeatherAPI'],
        img_url: "/project-imgs/slickroads.png"
    },
    {
        name: "Exercise Logger",
        github: "https://github.com/ye-james/mern-exercise-logger",
        link: "",
        snippet: "Exercise Logger is a full stack web application where users can keep track of their daily exercises and routines.",
        description: "Exercise Logger is a full stack web application where users can keep track of their daily exercises and routines. The technologies used were: React, Redux, Node.js, Express.js, MongoDB. The front end was written in React with Redux for state management and the react-semantic-ui library. The backend uses node.js with the express framework and incorporates JWT for user authentication/validation and MongoDB with the mongoose ORM.",
        technologies: ["React", 'Node.js', 'Redux', 'MongoDB'],
        img_url: "/project-imgs/exercise-logger.png"
    },
    // {
    //     name: "",
    //     github: "",
    //     link: "",
    //     description: "",
    //     technologies: []
    // }
]

function ProjectsProvider({ children }) {
    
    const [projects, setProjects] = useState(currentProjects);

    return (
        <ProjectsContext.Provider
            value={projects}
        >
            {children}
        </ProjectsContext.Provider>
    )
}

export { ProjectsProvider, ProjectsContext };