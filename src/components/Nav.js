import React, { useState } from 'react'
import { Link } from 'react-scroll';
import NavIcon from '../imgs/svgs/favicon.svg'


const Nav = ({ scrollToRef }) => {

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
        <figure className="nav__logo-container">
          <Link to="/">
            <img src={NavIcon} alt="nav-icon" className="nav__logo-icon" />
          </Link>
            </figure>
        </div>
          <div className="toggle-button" onClick={toggleNav}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        <div className={`nav__links ${isToggled ? "active" : ""}`}>
            <ul>
                <li className="nav__item"><a onClick={(e) => scrollToRef(e.target.innerHTML)}>About</a></li>
                  <li className="nav__item"><a onClick={(e) => scrollToRef(e.target.innerHTML)}>Projects</a></li>
                <li className="nav__item"><a href="https://drive.google.com/file/d/1Ch1tVaV1NZIuwikA-EB_4NvjLnFr15Zl/view?usp=sharing">Resume</a></li>
                <li className="nav__item"><Link to="">Photos</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav