import React, { useEffect, useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaBehance } from 'react-icons/fa';
import socialLinks from '../../Header/Social/SocialLink';

const Contact = () => {

    const emails = [
        {
            email: 'Support@Example.Com'
        },
        {
            email: 'Support@Example.Com'
        }
    ];

    const phones = [
        {
            phone: '700 001 70 16'
        },
        {
            phone: '700 1414 34 11'
        }
    ];

    const addreses = [
        {
            address: '405, Royal Square, Nr. ARLINGTON VA 41174, USA'
        }
    ];

    const [email, setEmail] = useState(emails);
    const [phone, setPhone] = useState(phones);
    const [address, setAddress] = useState(addreses);

    const [inputVal, setInputVal] = useState({
        username : '',
        email : '',
        phone : '',
        message : ''
    });

    const [record, setRecord] = useState([]);

    const fieldVal = (e) =>{
        const name = e.target.name; 
        const value = e.target.value; 
        setInputVal({...inputVal, [name] : value});
    }

    const contactSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...inputVal, id : new Date().getTime().toString()};
        
        setRecord([...record, newRecord]);
        
        setInputVal({username:'', email:'', phone:'', message:''});

        localStorage.setItem('My-Enquiy', JSON.stringify([...record, newRecord]))
        //console.log(record);
    }
    
    useEffect(() => {
        const data = localStorage.getItem('My-Enquiy');
        if(data){
            setRecord(JSON.parse(data));
        }
        console.log(data);
    }, [])
    

    //console.log(record);

    return (
        <>
            <section className='common-section-padding contact-section commonSecTop'>
                <div className='container'>
                    <div className='section-heading'>
                        <h2>Get In Touch</h2>
                    </div>
                    <div className='row gx-5 contact-wrapper align-items-center justify-content-between'>
                        <div className='col-md-4'>
                            <div className='infcontactfull'>
                                <div className='contact-block text-center '>
                                    <h4>EMAIL</h4>
                                    {
                                        email.map((curVal, index) => {
                                            const { email } = curVal;
                                            return (
                                                <a key={index} href={"mailto:" + (email)}>{email}</a>
                                            )
                                        })
                                    }
                                </div>
                                <div className='contact-block text-center '>
                                    <h4>CALL US</h4>
                                    {
                                        phone.map((curVal, index) => {
                                            const { phone } = curVal;
                                            return (
                                                <a key={index} href={"tel:" + (phone)}>{phone}</a>
                                            )
                                        })
                                    }
                                </div>
                                <div className='contact-block text-center '>
                                    <h4>ADDRESS</h4>
                                    {
                                        address.map((curVal, index) => {
                                            const { address } = curVal;
                                            return (
                                                <p key={index}>{address}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7  contact-form'>
                            <form onSubmit={contactSubmit}>
                                <div className='row g-5'>
                                    <div className='col-md-4'>
                                        <input onChange={fieldVal} value={inputVal.username} name='username' type="text" placeholder='Username *' className='form-control' required/>
                                    </div>
                                    <div className='col-md-4'>
                                        <input onChange={fieldVal} value={inputVal.email} name='email' type="email" placeholder='E-mail *' className='form-control' required/>
                                    </div>
                                    <div className='col-md-4'>
                                        <input onChange={fieldVal} value={inputVal.phone} name='phone' type="phone" placeholder='Phone' className='form-control'/>
                                    </div>
                                    <div className='col-md-12'>
                                        <textarea onChange={fieldVal} value={inputVal.message} name='message' placeholder='Message' className='form-control' cols="30" rows="10"></textarea>
                                    </div>
                                    <div className='col-md-5'>
                                        <button  type='submit' className='submitBtn'><IoIosSend/> <span>Send Message</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="socials-media text-center">
                        <ul className="list-unstyled ">
                            <li><a target="_blank" href={socialLinks[0].facebook}><FaFacebookF /></a></li>
                            <li><a target="_blank" href={socialLinks[0].twitter}><FaTwitter/></a></li>
                            <li><a target="_blank" href={socialLinks[0].linkedin}><FaLinkedinIn/></a></li>
                            <li><a target="_blank" href={socialLinks[0].instagram}><FaInstagram/></a></li>
                            <li><a target="_blank" href={socialLinks[0].behance}><FaBehance/></a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
