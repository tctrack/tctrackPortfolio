import React from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';

const Register = () => {
    return (
        <>
            <CommonBanner title="Register" />
            <section className='login-section'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-5'>
                            <div className="login-wrapper">
                                <form>
                                    <div className='form-group'>
                                        <input type="text" className='form-control' placeholder='Full Name' />
                                    </div>
                                    <div className='form-group'>
                                        <input type="email" className='form-control' placeholder='Email Address' />
                                    </div>
                                    <div className='form-group'>
                                        <input type="phone" className='form-control' placeholder='Phone number' />
                                    </div>
                                    <div className='form-group'>
                                        <input type="password" className='form-control' placeholder='Password' />
                                    </div>
                                    <div className='form-group'>
                                        <input type="password" className='form-control' placeholder='Confirm Password' />
                                    </div>
                                    <div>
                                        <button className='submitBtn' type='submit'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
