import React, { useEffect, useState } from 'react';
import ShowService from './ShowService';

const Service = () => {
    const [services, setServices] = useState([]);

useEffect(()=>{
    fetch('https://aqueous-hollows-73658.herokuapp.com/service')
    .then(res=>res.json())
    .then(data => setServices(data))
},[]);
    return (
        <div>
            <div>
                <h3>We're an agency</h3>
                <h3>clients'needs that always delivers </h3>
            </div>
            <div className='service'>
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