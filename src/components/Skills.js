import React from 'react'
import HTMLLogo from '../imgs/svgs/html5-svgrepo-com.svg';
import JSLogo from '../imgs/svgs/javascript-logo-svgrepo-com.svg';
import CSSLogo from "../imgs/svgs/css-3-svgrepo-com.svg";
import ReactLogo from "../imgs/svgs/react-svgrepo-com.svg";
import NodeLogo from "../imgs/svgs/node-svgrepo-com.svg";
import SASSLogo from "../imgs/svgs/sass-svgrepo-com.svg";
import ExpressLogo from "../imgs/svgs/express-svgrepo-com.svg";
import MongoDBLogo from "../imgs/svgs/mongodb-svgrepo-com.svg";
import SQLLogo from "../imgs/svgs/mysql-svgrepo-com.svg";
import JavaLogo from "../imgs/svgs/java-svgrepo-com.svg";


export const data = [
  {
    name: "HTML",
    path: HTMLLogo
  },
  {
    name: "JS",
    path: JSLogo
  },
  {
    name: "CSS",
    path: CSSLogo
  },
  {
    name: "SASS",
    path: SASSLogo
  },
  {
    name: "ReactJS",
    path: ReactLogo
  },
  {
    name: "NodeJS",
    path: NodeLogo
  },
  {
    name: "Express",
    path: ExpressLogo
  },
  {
    name: "MongoDB",
    path: MongoDBLogo
  },
  {
    name: "SQL",
    path: SQLLogo
  },
  {
    name: "JAVA",
    path: JavaLogo
  }
];  

const Skills = () => {


  return (
    <section className="skills">
      <h3 className="skills__title">Skills</h3>
      <div className="skills__container">
        {data.map((skill, index) => {
          return (
            <figure key={index} className="skills__svg">
              <img className="skills__svg-icon" src={skill.path} alt={skill.name} style={{ width: '4rem', height: '4rem'}} />
            </figure>
          )
        })}
        </div>
    </section>
  )
}

export default Skills