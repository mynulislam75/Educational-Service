import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="" id="navbar">

            <div className="d-flex justify-content-between">

                <div className="nav-text">
                    <h4>KIDS EDUCATION</h4>
                </div>

                <div>
                    <NavLink className="nav-text" to="/home">HOME</NavLink>
                    <NavLink className="nav-text" to="/events">EVENTS</NavLink>
                    <NavLink className="nav-text" to="/staff">OUR STAFF</NavLink>
                    <NavLink className="nav-text" to="/services">SERVICES</NavLink>
                    <NavLink className="nav-text" to="/contacts">CONTACTS</NavLink>
                    <NavLink className="nav-text" to="/about">ABOUT US</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Navbar;