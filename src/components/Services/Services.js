import React, { useEffect, useState } from 'react';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    // fething data from public folder
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div className="row">
            {
                services.map(service =>

                    <div className="col-lg-4 container" id="service-container">
                        <img src={service.img} className="img-fluid p-2" alt="" />

                        <div className="p-3">
                        <h3>
                            {service.name}
                        </h3>
                        <h6>Instructor:{service.teacher}</h6>
                        <p>Price:${service.price}</p>
                        <button className="btn-enroll">Enroll Now</button>
                        </div>

                    </div>

                )
            }
        </div>
    );
};

export default Services;