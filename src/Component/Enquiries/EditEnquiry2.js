import React, { useEffect, useState } from 'react';
import { GrFormClose } from "react-icons/gr";


const EditEnquiry = (props) => {
    
    //const [entry, setEntry] = useState([]);
    const getEditedData = props.data;
    console.log(getEditedData);

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

    const updateData = (e, idData) => {

        e.preventDefault();
        console.log(idData);
        
        const data = localStorage.getItem('My-Enquiy');
        const newdata = JSON.parse(data);
        const filterQuiry = newdata.map((elem, index) => {
            if(elem.id === idData){
                return {...elem, id: idData}
            }
            return elem;
        });
        console.log(filterQuiry);
        console.log(inputVal);  

        localStorage.setItem('My-Enquiy', JSON.stringify([filterQuiry, inputVal]))
        
        setInputVal({username:'', email:'', phone:'', message:''});
        //console.log(record);
    }
    
    useEffect(() => {
        const data = localStorage.getItem('My-Enquiy');
        if(data){
            setRecord(JSON.parse(data));
        }
        console.log(data);
    }, [])


    return (
        <>
            <div className="modal fade" id="editEnquiry" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" data-bs-dismiss="modal" className='closeBtn'>
                            <GrFormClose/>
                        </button>
                        <div className="modal-body">
                            
                                {
                                    getEditedData.map((curVal, index) => {

                                        const {username, email, phone, message, id} = curVal;
                                        return(
                                            <>
                                            <form onSubmit={(event) => {updateData(event, id)}}>
                                                <div className='form-group' key={index}>
                                                    <input onChange={fieldVal} type="text" className='form-control' defaultValue={username} name='username' placeholder='Username' />
                                                </div>
                                                <div className='form-group'>
                                                    <input onChange={fieldVal} type="email" className='form-control' defaultValue={email} name='email' placeholder='Email Address'  />
                                                </div>
                                                <div className='form-group'>
                                                    <input onChange={fieldVal} type="phone" className='form-control' defaultValue={phone} name='phone' placeholder='Phone' />
                                                </div>
                                                <div className='form-group'>
                                                    <textarea onChange={fieldVal} name="message" className='form-control' defaultValue={message} placeholder='Message'></textarea>
                                                </div>
                                                <div>
                                                    <button data-bs-dismiss="modal" className='submitBtn' type='submit'>Update</button>
                                                </div>
                                                </form>
                                            </>
                                        )
                                    })
                                }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditEnquiry
