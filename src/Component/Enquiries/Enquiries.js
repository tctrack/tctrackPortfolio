import React, { useEffect, useState } from 'react';
import CommonBanner from '../CommonBanner/CommonBanner';
import { GrFormEdit } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';
import EditEnquiry from './EditEnquiry';

const Enquiries = () => {

    const [quiry, setQuiry] = useState([]);
    const [editEntry, setEditEntry] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('My-Enquiy');
        if(data){
            setQuiry(JSON.parse(data));
        }
        
    }, []);

    const deleteEnquiry = (getval) => {
        
        const filterQuiry = quiry.filter((elem, index) => {
            console.log(elem.id);
            return elem.id !== getval;
        })

        setQuiry(filterQuiry);

        localStorage.setItem('My-Enquiy', JSON.stringify(filterQuiry));
    }

    const editEnquiry = (getval) =>{

        const data = localStorage.getItem('My-Enquiy');
        const newdata = JSON.parse(data);
        const filterQuiry = newdata.filter((elem, index) => {
            return elem.id === getval;
        });
        setEditEntry(filterQuiry);
        
    }

    console.log(editEntry);

    return (
        <>
            <CommonBanner title="Our Enquiries" />
            <section className='enquiries-section'>
                <div className='container'>
                    <div className='enquiries-table'>
                        <div className="table-responsive">
                            <table className='table'>
                                <tr>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Message</th>
                                    <th></th>
                                </tr>
                                {
                                    quiry.map((curVal, index) => {
                                        const {username, email, phone, message, id} = curVal;
                                        return (
                                            <tr key={id}>
                                                <td className='text-truncate'>{username}</td>
                                                <td>{email}</td>
                                                <td>{phone}</td>
                                                <td>{message}</td>
                                                <td className='editDelete-btns'>
                                                    <a className='editTable'><GrFormEdit data-bs-toggle="modal" data-bs-target="#editEnquiry" onClick={() => {editEnquiry(id)}} /></a>
                                                    <a className='deleteTable'><MdDeleteOutline onClick={() => {deleteEnquiry(id)}} /></a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <EditEnquiry data={editEntry} />
        </>
    )
}

export default Enquiries;
