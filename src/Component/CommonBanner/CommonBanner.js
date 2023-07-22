import React from 'react';
import { BiChevronsRight } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const CommonBanner = (props) => {
  return (
    <>
      <section className="breadcrumb-header text-center">
            <div className="container">
                <div className="title-header">
                    <h1>{props.title}</h1>
                </div>
                <ul className="list-unstyled">
                    <li><NavLink to='/'>Home</NavLink><span><BiChevronsRight/></span></li>
                    <li>{props.title}</li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default CommonBanner
