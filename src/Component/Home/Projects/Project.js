import React, { useState } from 'react';
import { HiChevronRight } from 'react-icons/hi';
import ProjectContent from './ProjectContent';
import { AiOutlineLink } from 'react-icons/ai';

const Project = () => {

    const [project, setProject] = useState(ProjectContent);

    return (
        <>
            <section className='common-section-padding project-section commonSecTop'>
                <div className='container'>
                    <div className='section-heading d-flex align-items-center justify-content-between'>
                        <h2>Projects</h2>
                        <a href="#" className='btn btn-outline-secondary'>
                            <span>all project</span>
                            <HiChevronRight />
                        </a>
                    </div>
                    <div className='row gx-5 projects-wrapper'>
                        {
                            project.slice(0, 2).map((curVal, index) => {
                                const {image, projectLink, title, des} = curVal;
                                return(
                                    <div className='col-md-6' key={index}>
                                        <div className="portfolio-thumbnail">
                                            <div className="top-thumbnail">
                                                <a href={projectLink}>
                                                    <img src={image} className="img-fluid" alt="portfolio" />
                                                </a>
                                                <div className="overlay">
                                                    <div className="content-port">
                                                        <a target='_blank' className="popup-img icons-fonts ti-zoom-in fa fa-eye" href={projectLink}>
                                                            <AiOutlineLink/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="botom-thumbnail">
                                                <h4 className="maintitle">{title}</h4>
                                                <p className="separator">{des}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            project.slice(2, 5).map((curVal, index) => {
                                const {image, projectLink, title, des} = curVal;
                                return(
                                    <div className='col-md-4' key={index}>
                                        <div className="portfolio-thumbnail">
                                            <div className="top-thumbnail">
                                                <a href="#">
                                                    <img src={image} className="img-fluid" alt="portfolio" />
                                                </a>
                                                <div className="overlay">
                                                    <div className="content-port">
                                                        <a target='_blank' className="popup-img icons-fonts ti-zoom-in fa fa-eye" href={projectLink}>
                                                            <AiOutlineLink/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="botom-thumbnail">
                                                <h4 className="maintitle">{title}</h4>
                                                <p className="separator">{des}</p>
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

export default Project
