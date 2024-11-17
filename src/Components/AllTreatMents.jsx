import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const AllTreatMents = () => {
    const services = useLoaderData()
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 container mx-auto my-16'>
            {services.map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
        </div>
    );
};

export default AllTreatMents;