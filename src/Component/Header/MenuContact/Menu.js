import React from 'react';
import { NavLink } from 'react-router-dom';
import { removeFixedHeader } from '../../../Assets/js/Common';


const Menu = () => {

    
    return (
        <>
            <div className='headerMenus'>
                <ul>
                    <li>
                        <span>01</span>
                        <NavLink onClick={removeFixedHeader} activeClassName="active" exact to='/'>Home</NavLink>
                    </li>
                    <li>
                        <span>02</span>
                        <NavLink onClick={removeFixedHeader} activeClassName="active" exact to='/about'>About</NavLink>
                    </li>
                    <li>
                        <span>03</span>
                        <NavLink onClick={removeFixedHeader} activeClassName="active" exact to='/service'>Services</NavLink>
                    </li>
                    <li>
                        <span>04</span>
                        <NavLink onClick={removeFixedHeader} activeClassName="active" exact to='/resume'>Resume</NavLink>
                    </li>
                    <li>
                        <span>05</span>
                        <NavLink onClick={removeFixedHeader} activeClassName="active" exact to='/portfolio'>Portfolio</NavLink>
                    </li>
                    <li>
                        <span>06</span>
                        <NavLink onClick={removeFixedHeader} activeClassName="active" exact to='/team'>Team</NavLink>
                    </li>
                    <li>
                        <span>07</span>
                        <NavLink onClick={removeFixedHeader} activeClassName="active" exact to='/news'>News</NavLink>
                    </li>
                    <li>
                        <span>08</span>
                        <NavLink onClick={removeFixedHeader} activeClassName="active" exact to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <span>09</span>
                        <NavLink onClick={removeFixedHeader} activeClassName="active" exact to='/enquiries'>Enquiries</NavLink>
                    </li>
                </ul>
            </div>
            
        </>
    )
}

export default Menu
