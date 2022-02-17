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
import TailwindLogo from '../imgs/svgs/tailwind-svgrepo-com.svg'
import TSLogo from '../imgs/svgs/typescript-logo-svgrepo-com.svg'
import PythonLogo from '../imgs/svgs/python-svgrepo-com.svg'
const skills =
{
  Skills:
    [
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
        name: "Python",
        path: PythonLogo
      },
      {
        name: "JAVA",
        path: JavaLogo
      }
    ],
    'Currently Learning':
    [
      {
        name: "Typescript",
        path: TSLogo
      },
      {
        name: "Tailwind CSS",
        path: TailwindLogo
      }
    ]
  };  


const Skills = () => {


  return (
    <section className="skills">
      {
        Object.entries(skills).map((skill, index) => {
          return (
            <>
              <h3 key={index} className="skills__title">{skill[0]}</h3>
              <div className="skills__container">
              {skill[1].map((item, i) => {
                return (
                  <figure key={i} className="skills__svg">
                    <img className="skills__svg-icon" src={item.path} alt={item.name} style={{ width: '4rem', height: '4rem'}} />
                  </figure>
                )
              })}
              </div>
            </>
          )
        })
      }
    </section>
  )
}

export default Skills