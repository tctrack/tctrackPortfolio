import React from 'react';
import { MdEmail } from 'react-icons/md';
import BackTop from './BackTop';

const Footer = () => {
  return (
    <>
      <footer className='main-footer mt-auto'>
          <div className='container'>
            <div className='row footer-wrapper align-items-center'>
                <div className='col-md-6'>
                    <div className='copyright'>
                        <p>© Copyrights Inaikas 2022. All Rights Reserved.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='newsleter-wrap'>
                        <form>
                            <div className='newsletter-form d-flex justify-content-end align-items-center'>
                                <label>Newsletter Signup</label>
                                <div className='form-group'>
                                    <input type="email" placeholder='Email'/>
                                    <button><MdEmail/></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
      </footer>
      <BackTop/>
    </>
  )
}

export default Footer
