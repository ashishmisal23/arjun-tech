import React from 'react';
import '../Style/services.css';


const ServiceItem = ({ image, title, description }) => (
    <div className="grid-items">
        <div className="service-img">
            <img src={image} alt={title} />
        </div>
        <div className="service-heading">
            <h2 className="grey-color align-center fourth-large-heading">
                {title}
            </h2>
        </div>
        <div className="service-desc">
            <p className="sm-para align-center">{description}</p>
        </div>
    </div>
);


export default ServiceItem;