import React from 'react';
import '../Style/header.css';

import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import whatsapp from '../Images/whatsapp.png';


const Header = () => {
    return (
        <header className="primary-bg-color">
            <nav className="navbar">
                <div className="logo-container">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="nav-list-container">
                    <ul className="nav-list">
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-msgbtn">
                    <a href="https://api.whatsapp.com/send?phone=917879797676&text=Hello,%20I%20have%20a%20question%20about%20Laptop%20and%20Desktop%20Rental"
                        target="_blank" rel="noreferrer">
                        <div className="msgbtn">
                            <img src={whatsapp} alt="whatsapp" />
                            <p className="sm-para"><strong>Message Us</strong></p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header
