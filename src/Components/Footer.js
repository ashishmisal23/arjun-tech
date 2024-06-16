import React from 'react';
import '../Style/footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer grey-bg-color">
            <div className="footer-container">
                <div className="column-1">
                    <h3 className="white-color">Arjun Tech</h3>
                    <p className="dim2-white-color">
                        Shop No. 03, Near Shell Petrol Pump, <br />
                        Durvankur Society, Ashoka Nagar, <br />
                        Kharadi, Pune - 411014
                    </p>


                </div>
                <div className="column-2">
                    <h3 className="white-color">Working Hours</h3>
                    <p className="dim2-white-color">Monday to Saturday
                        <br />
                        10:00 AM – 08:00 PM <br />
                    </p>
                </div>
                <div className="column-3">
                    <h3 className="white-color">Contact</h3>
                    <ul>
                        <li className="dim2-white-color">
                            <div className="icons">
                                <span className="material-symbols-outlined">
                                    call
                                </span>
                                <p className=""><Link to="tel:+917879797676" target='_blank'>+91 78 7979 7676</Link></p>
                            </div>
                        </li>
                        <li className="dim2-white-color">
                            <div className="icons">
                                <span className="material-symbols-outlined">
                                    mail
                                </span>
                                <p className=""><Link to="mailto:admin@arjuntech.in" target='_blank'>admin@arjuntech.in</Link></p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="footer-desclaimer">
                <p className="dim2-white-color align-center">Copyright © 2018 Arjun Tech</p>
            </div>
        </footer>
    )
}

export default Footer