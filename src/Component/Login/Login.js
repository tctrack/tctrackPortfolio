import React from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';

const Login = () => {
    return (
        <>
            <CommonBanner title="Login" />
            <section className='login-section'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-5'>
                            <div className="login-wrapper">
                                <form action=''>
                                    <div className='form-group'>
                                        <input type="email" className='form-control' placeholder='Email Address' autoComplete="off" />
                                    </div>
                                    <div className='form-group'>
                                        <input type="password" className='form-control' placeholder='Password' autoComplete="off" />
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

export default Login
