import React from 'react';
import bannerImg from '../assets/banner.png'
const Banner = () => {
    return (
        <div className="hero ">
        <div className="hero-content  flex-col gap-12 lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-lg rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">Healthy Teeth, Happy Life!</h1>
            <p className="py-6 text-lg">
            focuses on keeping your teeth and gums healthy through regular cleaning, check-ups, and treatment. It prevents issues like cavities, gum disease, and tooth loss while improving oral hygiene and overall health.
            </p>
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;