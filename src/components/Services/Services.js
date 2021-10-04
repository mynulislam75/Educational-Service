import React, { useEffect, useState } from 'react';
import './Services.css'

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    console.log(services)
    return (
        <div className="row">
           {
               services.map(service=>
                
                <div className="col-lg-4" id="service-container">
                    <img src={service.img} className="img-fluid" alt=""/>
                   <h3>
                   {service.name}
                    </h3>
                    <h5>{service.teacher}</h5>
                <p>Price:{service.price}</p>
                   
                </div>
                
                )
           }
        </div>
    );
};

export default Services;