import React from 'react';
import '../Style/about-us.css';
import { Link } from 'react-router-dom';
import about from '../Images/about.jpg';


const About = () => {
    return (
        <>
            <section className="primary-bg-color" id="about">
                <div className="section-container section-common" id="about-content">
                    <div className="about-half">
                        <h2 className="white-color large-heading ">About Us</h2>
                        <p className="dim2-white-color  md-para">
                            "Welcome to Arjun Tech – your ultimate hub for seamless laptop rentals! With half a decade of
                            industry mastery, we bring you cutting-edge laptops that are contemporary, dependable, and easy on
                            the wallet. Our committed team ensures each device meets the highest standards, ensuring an
                            outstanding user experience. Whether you're a student, professional, or simply seeking a temporary
                            laptop solution, we've got you sorted. Dive into our adaptable rental packages, designed to cater to
                            both short-term needs and long-term leases. Immerse yourself in the simplicity of renting with Arjun
                            Tech – the nexus where quality, affordability, and stellar customer service unite."
                        </p>
                    </div>
                    <div className="about-half">
                        <img src={about} alt="About Us" />
                    </div>
                </div>
            </section>
            <section className="secondary-bg-color">
                <div className="section-container">
                    <div className="aboutus-grid">
                        <div className="grid-column">
                            <h2 className="primary-dimbg-color align-center">Our Mission</h2>
                            <ul>
                                <li className="grey-color md-para">Arjun Tech's mission is to grow with its customers through
                                    meaningful and mutually beneficial relationships with an emphasis on maintaining the best
                                    practices of the trade."</li>
                                <li className="grey-color md-para">We believe that trust is the key to a successful business and we
                                    live this belief "</li>
                            </ul>
                        </div>
                        <div className="grid-column">
                            <h2 className="primary-dimbg-color align-center">Our Strength</h2>
                            <ul>
                                <li className="grey-color md-para">We are staffed with qualified persons who are specialized to
                                    handle each department which is centrally managed by the top management.</li>
                                <li className="grey-color md-para">Marketing Team: Our Marketing team members are one of our key
                                    strengths in the successful long journey of the organization.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
            <section className="primary-bg-color">
                <div className="section-container section-common">
                    <div className="banner">
                        <div className="banner-content grid">
                            <h2 className="white-color fifth-large-heading about-half text-justify">
                                "We are serving our customer for the last since 5 years to our customer with trust and they are
                                happy !!"
                            </h2>
                            <div className="btn primary-bg-color md-para">
                                <Link to="/">Be Part of Us</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default About