import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './social.scss';
import socialLinks from './SocialLink';

const Social = () => {
    
    return (
        <>
            <div className='social-info-wrapper'>
                <ul>
                    <li>
                        <a target="_blank" href={socialLinks[0].facebook}>
                            <FaFacebookF />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href={socialLinks[0].linkedin}>
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" href={socialLinks[0].instagram}>
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
                <p className='followCaps'>Follow Me</p>
            </div>
        </>
    )
}

export default Social
