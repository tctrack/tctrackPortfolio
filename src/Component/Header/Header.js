import * as React from 'react';
import { CgMenuRightAlt } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import Social from './Social/Social';
import FourBoxTheme from './FourBoxTheme';
import MenuContact from './MenuContact/MenuContact';

const Header = () => {

    const showMenu = () => {
    
        let element = document.querySelector(".main-header");
        if(element.classList.contains('fixed-header')){
            element.classList.add("fixed-header");
        }else{
            element.classList.add("fixed-header"); 
        }
        let top = window.pageYOffset;
        
        document.querySelector('body').classList.toggle("overflow-hidden");
        document.querySelector(".menuContactArea-section").classList.toggle("menuContactArea-show");
    }

    

    return (
        <>
            <header className='container-fluid main-header py-4'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <div className='main-logo'>
                                <NavLink exact to='/'>
                                    <h1><span className='text-primary'>TC</span>TRACK</h1>
                                    <p>im freelancer</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='mobileMenu text-end'>
                                <a onClick={showMenu} className="mobileMenuBtn">
                                    <CgMenuRightAlt />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuContact/>
            </header>
            <div className="cursor"></div>
            <Social/>
            <FourBoxTheme/>
        </>
    )
}

export default Header;
