import React from 'react';
import bannerImg from '../assets/banner.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content  flex-col gap-12 lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-lg rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">Healthy Teeth, Happy Life!</h1>
            <p className="py-6 text-lg">
            Confident Smiles Start Here.Your Smile, Our Priority
            </p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;