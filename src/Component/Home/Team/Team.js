import React, { useState } from 'react';
import TeamContent from './TeamContent';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaBehance } from 'react-icons/fa';

const Team = () => {

    const [team, setTeam] = useState(TeamContent);

    return (
        <>
            <section className='common-section-padding team-section commonSecTop'>
                <div className='container'>
                    <div className='section-heading d-flex align-items-center justify-content-between'>
                        <h2>Our Team Showcase</h2>
                    </div>
                    <div className='row gx-5 teams-wrapper'>
                        {
                            team.map((curVal, index) => {

                                const {title, designation, image, facebook, tweeter, linkedin, instagrame, behance} = curVal

                                return (
                                    <div className='col-md-4' key={index}>
                                        <div className={"teamiteam teamiteam-" + (index)} >
                                            <div className="imgteam">
                                                <img src={image} className="img-fluid" alt="img" />
                                                <div className="socials-media text-center">
                                                    <ul className="list-unstyled ">
                                                        <li><a href={facebook}><FaFacebookF /></a></li>
                                                        <li><a href={tweeter}><FaTwitter/></a></li>
                                                        <li><a href={linkedin}><FaLinkedinIn/></a></li>
                                                        <li><a href={instagrame}><FaInstagram/></a></li>
                                                        <li><a href={behance}><FaBehance/></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="btmteam">
                                                <a href="#">
                                                    <h4 className="maintitle">{title}</h4>
                                                </a>
                                                <p className="separator">{designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
