import React from 'react';
import LinkedInIcon from '../imgs/svgs/linkedin-svgrepo-com.svg';
import GithubIcon from '../imgs/svgs/github-svgrepo-com.svg';
import EmailIcon from '../imgs/svgs/email-svgrepo-com.svg';



const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__social">
                <figure className="footer__social-item">
                    <a href="https://www.linkedin.com/in/jamesye1/"><img src={LinkedInIcon} alt="LinkedIn-social" className="social-icon" /></a>
                </figure>
                <figure className="footer__social-item">
                    <a href="https://github.com/ye-james"><img src={GithubIcon} alt="Github-social" className="social-icon" /></a>
                </figure>
                <figure className="footer__social-item">
                    <a href="mailto: james.ye02@gmail.com"><img src={EmailIcon} alt="Email-social" className="social-icon" /></a>
                </figure>
            </div>
            <p className="copyright">&copy; James Ye 2022. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer