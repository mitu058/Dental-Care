import React from 'react';

const ServiceCard = ({service}) => {
    const {treatment,image,cost,description} = service
    return (
        <div className="card bg-base-100  shadow-xl">
  <figure>
    <img className='h-52 w-full'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {treatment}
      <div className="badge badge-secondary">$ {cost}</div>
    </h2>
    <p title={description}>{description.slice(0,100)}...</p>
    <div className="card-actions justify-end">
      <button className="badge badge-outline bg-blue-950 text-white p-4">Checkout More</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;