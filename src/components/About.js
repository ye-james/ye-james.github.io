import React from 'react'
import img_avatar from '../imgs/img_avatar.png'

const About = () => {

    return (
        <section id="about-section" className="about">
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
                    <p className="about__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore temporibus accusantium id numquam impedit vel magnam
                    doloremque ipsam commodi, porro facilis beatae voluptatem ut provident omnis ipsum aspernatur veritatis rerum optio.
                    Consequuntur iste reprehenderit delectus quia vitae veritatis nam, incidunt vero aspernatur asperiores quas veniam!
                    Magnam culpa eum error natus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore temporibus accusantium id numquam impedit vel magnam doloremque ipsam commodi, porro facilis beatae voluptatem ut provident omnis ipsum aspernatur veritatis rerum optio. Consequuntur iste reprehenderit delectus quia vitae veritatis nam, incidunt vero aspernatur asperiores quas veniam! Magnam culpa eum error natus.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore temporibus accusantium id numquam impedit vel magnam doloremque ipsam commodi, porro facilis beatae voluptatem ut provident omnis ipsum aspernatur veritatis rerum optio. Consequuntur iste reprehenderit delectus quia vitae veritatis nam, incidunt vero aspernatur asperiores quas veniam! Magnam culpa eum error natus.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About