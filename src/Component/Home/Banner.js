import React from 'react'

const Banner = () => {
    return (
        <>
            <section className='banner-section d-flex align-items-center'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='banner-contnet'>
                                <h4 className='subtitle'>I Am Tarachand Choudhary</h4>
                                <h1>FRONTEND DEVELOPER</h1>
                                <div className='jobLocations mt-5'>
                                    <ul className="listlocaion d-flex">
                                        <li>
                                            <span className="paye">MR Designhub</span>
                                            <span className="ville">June 2018 - Oct. 2021</span>
                                        </li>
                                        <li>
                                            <span className="paye">Addglobal360</span>
                                            <span className="ville">Oct. 2021 - Still Working</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scroll-icon">
                    <a href="#aboutSelf" className="smoothscroll">
                        <div className="mouse"></div>
                    </a>
                    <div className="end-top"></div>
                </div>
            </section>
        </>
    )
}

export default Banner
