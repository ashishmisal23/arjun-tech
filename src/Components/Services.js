import React from 'react';
import '../Style/color.css';
import '../Style/services.css';
import ServiceItem from './ServiceItem';
import {servicesData} from './servicesData';


const Services = () => {
    return (
        <section className="secondary-bg-color">
            <div className="section-common grid-container">
                <h2 className="grey-color large-heading align-center">Services</h2>
                <div className="service-grid-items">
                    {servicesData.map((service, index) => (
                        <ServiceItem key={index} {...service} />
                    ))}
                </div>
                <h2 className="grey-color fourth-large-heading align-center">And Many More Services...</h2>
            </div>
        </section>
    );
};

export default Services;
