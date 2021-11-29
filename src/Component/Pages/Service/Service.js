import React, { useEffect, useState } from 'react';
import ShowService from './ShowService';

const Service = () => {
    const [services, setServices] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/service')
    .then(res=>res.json())
    .then(data => setServices(data))
},[]);
    return (
        <div>
            <div>
                <h3>We're an agency</h3>
                <h3>clients'needs that always delivers </h3>
            </div>
            <div style={{display: "flex", flexWrap: "wrap",  margin: "5%"}}>
                {
                 services.map(service =><ShowService
                 key={service._id}
                 service={service}
                 ></ShowService>)   
                }
            </div>
        </div>
    );
};

export default Service;