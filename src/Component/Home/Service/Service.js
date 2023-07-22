import React, { useState } from 'react';
import ServiceCotent from './ServiceCotent';

const Service = () => {

    const [service, setService] = useState(ServiceCotent);

    return (
        <>

            <section className='common-section-padding service-section commonSecTop'>
                <div className='container'>
                    <div className='section-heading'>
                        <h2>Services</h2>
                    </div>
                    <div className='row gx-5'>
                        {
                            service.map((curVal, index) => {

                                const {img, title, description} = curVal;

                                return(
                                    <div className='col-md-4' key={index}>
                                        <div className={"service-wrap service-wrap" + (index)} >
                                            <figure>
                                                <img className='img-fluid' src={img} alt="" />
                                            </figure>
                                            <h4>{title}</h4>
                                            <p>{description}</p>
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

export default Service;
