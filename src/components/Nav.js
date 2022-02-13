import React, { useState } from 'react'
import { Link } from 'react-scroll';


const Nav = () => {

    const [isToggled, setIsToggled] = useState(false);
    const heightStyle = isToggled ? {
        height: '250px'
    } : null


    const toggleNav = () => {
        setIsToggled(!isToggled)
    }


  return (
    <nav className="nav" style={heightStyle}>
        <div className="nav__logo">
            LOGO
        </div>
          <div className="toggle-button" onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        <div className={`nav__links ${isToggled ? "active" : ""}`}>
            <ul>
                <li className="nav__item"><Link to="about-section" smooth={true} duration={500}>About</Link></li>
                <li className="nav__item"><Link to="projects-section" smooth={true} duration={500}>Projects</Link></li>
                <li className="nav__item"><Link to="about-section" smooth={true} duration={500}>Resume</Link></li>
                <li className="nav__item"><Link to="" smooth={true} duration={500}>Photos</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav