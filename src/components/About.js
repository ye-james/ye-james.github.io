import React from 'react'
import img_avatar from '../imgs/img_avatar.png'

const About = ( { aboutRef }) => {

    return (
        <section ref={aboutRef} id="about-section" className="about">
            <div className="about__container">
                <div className="about__license">
                    <h3 className="about__header">California</h3>
                    <div className="about__main">
                        <div className="about__img">
                            <img src={img_avatar} alt="photo_avatar" className="about__photo" />
                        </div>
                
                        <div className="about__license-details">
                            <p className="about__dl">12345678</p>
                            <p className="about__exp">01/01/1970</p>
                            <p className="about__last">Ye</p>
                            <p className="about__first">James</p>
                            <p className="about__address">1 Ferry Building, San Francisco, CA 94111</p>
                            <p className="about__dob">
                                10/19/19XX
                            </p>
                            <p className="about__rest">CORR LENS</p>
                        </div>
                    </div>
                </div>
                <div className="about__bio">
                    <h3 className="about__title">About Me</h3>
                    <p className="text about__text">
                        Hello, I am <span className="text about__text-bold">James</span>. 
                        I'm a Security Administrator based in the bay area &#127968; currently working at Meta [Facebook], looking to transition into full-stack development.
                    </p>
                    <p className="text about__text">
                        Being born and raised in the bay area exposed me to technology early.
                        This lead me to pursue my bachelors in computer science at San Jose State University where I later took a systems administrator at Facebook. 
                    </p>
                    <p className="text about__text">
                        I'm a strong believer in continuous learning, as there is always something new you can learn. After taking an elective for web-development, I loved the creative aspect of creating beautifully designed, responsive web pages.
                    </p>
                    <p className="text about__text">
                        Outside of work some of my hobbies include: Learning new web technologies, cars, photography, food (cooking or trying a new restaurant). I am also a part time boba connoisseur.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About