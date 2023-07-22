import React from 'react';
import myImage from '../../Assets/images/myImage.jpg';
import { HiChevronRight } from 'react-icons/hi';


const About = () => {
    return (
        <>
            <section id='aboutSelf' className='common-section-padding about-section commonSecTop'>
                <div className='container'>
                    <div className='section-heading'>
                        <h2>About Us</h2>
                    </div>
                    <div className='row gx-5 align-items-center'>
                        <div className='col-md-6'>
                            <div className='myImage-wrap'>
                                <figure>
                                    <img className='img-fluid' src={myImage} alt="" />
                                </figure>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='aboutMe-content'>
                                <h3>Hello, Im Tarachand Choudhary</h3>
                                <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family.English person,</p>
                                <ul className="skills-bar-container list-unstyled">
                                    <li>
                                        <div className="progressbar-title">
                                            <h5>Product Design</h5>
                                            <span className="percent">100%</span>
                                        </div>
                                        <div className="bar-container">
                                            <span className="progressbar progressred" data-value="100" style={{'width': '100%'}}></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progressbar-title">
                                            <h5>Ux Design</h5>
                                            <span className="percent">90%</span>
                                        </div>
                                        <div className="bar-container">
                                            <span className="progressbar progressred" data-value="90" style={{'width': '90%'}}></span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="progressbar-title">
                                            <h5>Mobile Design</h5>
                                            <span className="percent">70%</span>
                                        </div>
                                        <div className="bar-container">
                                            <span className="progressbar progressred" data-value="70" style={{'width': '70%'}}></span>
                                        </div>
                                    </li>
                                </ul>
                                <a href="#" className='btn btn-outline-secondary'>
                                    <span>Hire Me</span>
                                    <HiChevronRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;
