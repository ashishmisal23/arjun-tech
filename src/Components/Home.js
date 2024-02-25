import React from 'react';
import home1 from './Images/home.jpg';
import technology from './Images/technology.png';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <section id="home" className="primary-bg-color">
                <div className="section-common home-info lg-padding">
                    <div className="home-info-1">
                        <div className="home-info-desc">
                            <h1 className="white-color large-heading">The Most Reliable IT Service Provider in Pune</h1>
                            <p className="dim2-white-color md-para">
                                We, Arjun Tech, situated at Pune, Maharashtra are leading e-retailer and retailer committed to
                                becoming the most loved and trusted store for all computer, laptops and other
                                devices and their repairing services, with a focus on computer components by providing a great
                                shopping experience, rapid Service delivery, Hi-Tech Customer Service and provide the best
                                warranty support. We have well trained experts who provide best in className=ame services.
                            </p>
                        </div>
                        <div className="home-info-desc">
                            <div className="home-info-btn  grid align-content-center align-center">
                                <h2 className="md-para white-color home-info-btn-txt">
                                    <Link to="/contact">Request a Callback</Link>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="home-info-2">
                        <div className="home-info-img">
                            <img src={home1} alt='' />
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-section-2" className="secondary-bg-color">
                <div className="section-common home-info lg-padding home-sec-2-container">
                    <div className="half first-half">
                        <img src={technology} alt='' />
                    </div>
                    <div className="half second-half">
                        <h2 className="third-large-heading primary-color">Why Choose Us</h2>
                        <h2 className="grey-color fifth-large-heading">For your IT Rental Needs?</h2>
                        <br />
                        <div className="list-detail">
                            <ul>
                                <li>
                                    <p className="md-para grey-color">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z">
                                            </path>
                                        </svg>
                                        GUARANTEED TO BE THE CHEAPEST RENTAL RATE BY 20%*
                                    </p>
                                </li>
                                <li>
                                    <p className="md-para grey-color">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z">
                                            </path>
                                        </svg>
                                        Professionally Managed Company since 2018
                                    </p>
                                </li>
                                <li>
                                    <p className="md-para grey-color">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z">
                                            </path>
                                        </svg>
                                        Readily availability of products deliverable across country
                                    </p>
                                </li>
                                <li>
                                    <p className="md-para grey-color">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z">
                                            </path>
                                        </svg>
                                        Short & Long Term Rental
                                    </p>
                                </li>
                                <li>
                                    <p className="md-para grey-color">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z">
                                            </path>
                                        </svg>
                                        Lowest Monthly Rentals
                                    </p>
                                </li>
                                <li>
                                    <p className="md-para grey-color">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z">
                                            </path>
                                        </svg>
                                        Guaranteed Providing Quality It Equipment’s
                                    </p>
                                </li>
                                <li>
                                    <p className="md-para grey-color">
                                        <svg aria-hidden="true" className="e-font-icon-svg e-far-check-circle" viewBox="0 0 512 512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z">
                                            </path>
                                        </svg>
                                        Hire on Daily, Weekly, Monthly or Annual Basis
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Home