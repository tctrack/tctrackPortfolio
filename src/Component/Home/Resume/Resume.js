import React, { useState } from 'react';
import ResumeContent from './ResumeContent';

const Resume = () => {

    const [resume, setResume] = useState(ResumeContent);

    return (
        <>
            <section className='common-section-padding project-section commonSecTop'>
                <div className='container'>
                    <div className='section-heading d-flex align-items-center justify-content-between'>
                        <h2>Resume</h2>
                    </div>
                    <div className='row gx-5 resums-wrapper'>
                        {
                            resume.map((curVal, index) => {
                                const { title, des, title2, des2, title3, des3, color } = curVal;
                                return (
                                    <div className='col-md-4' key={index}>
                                        <div className={"resume-info resume-info-" + (color)}>
                                            <h4 className="maintitle">{title}</h4>
                                            <p className="separator">{des}</p>
                                            <div className="res-line"></div>
                                            <ul className="res-list">
                                                <li>
                                                    {title2}
                                                    <p className="separator ">{des2}</p>
                                                </li>
                                                <li>
                                                    {title3}
                                                    <p className="separator">{des3}</p>
                                                </li>
                                            </ul>
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

export default Resume
