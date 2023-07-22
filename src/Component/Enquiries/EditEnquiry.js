import React, { useEffect, useState } from 'react';
import { GrFormClose } from "react-icons/gr";


const EditEnquiry = (props) => {
    
    //const [entry, setEntry] = useState([]);
    const getEditedData = props.data;
    console.log(getEditedData);
    console.log(getEditedData[0]);

    const [inputVal, setInputVal] = useState(getEditedData[0]);

    const fieldVal = (e) =>{
        const name = e.target.name; 
        const value = e.target.value;
        console.log({[name] : value});
        setInputVal({...inputVal, [name] : value});
    }
    
    const updateData = (e, getId) => {
        e.preventDefault();
        
        console.log(inputVal);
    }

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
                                            <form id={id} onSubmit={(event) => {updateData(event, id)}}>
                                                <div className='form-group' key={index}>
                                                    <input onChange={fieldVal} type="text" className='form-control'  name='username' value={username}  />
                                                </div>
                                                <div className='form-group'>
                                                    <input onChange={fieldVal} type="email" className='form-control'  name='email' value={email}  />
                                                </div>
                                                <div className='form-group'>
                                                    <input onChange={fieldVal} type="phone" className='form-control'  name='phone' value={phone}  />
                                                </div>
                                                <div className='form-group'>
                                                    <textarea onChange={fieldVal} name="message" className='form-control' value={message}></textarea>
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
