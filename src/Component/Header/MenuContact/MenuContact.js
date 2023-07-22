import React from 'react';
import Menu from './Menu';
import ContactDetail from './ContactDetail';
import { NavLink } from 'react-router-dom';
import { removeFixedHeader } from '../../../Assets/js/Common';


const MenuContact = () => {

  return (
    <>
      <div className='menuContactArea-section'>
        <div className="container">
            <div className='row align-items-center'>
                <div className='col-md-6'>
                    <Menu/>
                </div>
                <div className='col-md-6'>
                    <ContactDetail/>
                </div>
            </div>
            <div className='loginRegisterButton w-50'>
                <ul>
                    <li>
                        <NavLink onClick={removeFixedHeader} exact to='/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={removeFixedHeader} exact to='/register'>Register</NavLink>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default MenuContact
