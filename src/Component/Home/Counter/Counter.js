import React, { useState } from 'react';
import CounterContent from './CounterContent';

const Counter = () => {

    const [counter, setCounter] = useState(CounterContent);

    return (
        <>
            <section className='counter-section common-section-padding'>
                <div className='container'>
                    <div className='counter-wrapper'>
                        <div className='row'>
                            {
                                counter.map((curVal, index) => {
                                    const { number, title } = curVal;
                                    return (
                                        <div className='col-md-4' key={index}>
                                            <div className={'counter-wrap text-center counter-wrap' + (index)}>
                                                <h3>{number} <span>+</span></h3>
                                                <h4>{title}</h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter
