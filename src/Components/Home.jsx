import React from "react";
import Banner from "./Banner";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import FeedBack from "./FeedBack";

const Home = () => {
  const services = useLoaderData();
  const  {serviceData,feedbackData} = services
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-center text-2xl font-bold">Confident Smiles Start Here.Your Smile, Our Priority</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 container mx-auto my-16">
        {serviceData.slice(0, 4).map((service) => (
          <ServiceCard service={service}></ServiceCard>
        ))}
      </div>
      <button className="btn bg-blue-950 text-white mx-auto block mb-5">
        <NavLink to='/treatments'>Show More</NavLink>
      </button>



      <FeedBack feedbackData={feedbackData}></FeedBack>

    </div>
  );
};

export default Home;
