import React from 'react'
import './style.css';
import logo from '../../logo.svg'

export const Navbar: React.VoidFunctionComponent = () => {
    
    return (
        <div  className="navbar">
            <img src={logo}  className="logo" alt=""/>
            <div className="user">john.thomas@gmail.com</div>
        </div>
    );
}   