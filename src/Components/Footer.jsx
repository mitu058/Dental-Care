import React from "react";
import logo from '../assets/favicon-1920w.webp'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";




const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-950 mt-28">
        <div className="container mx-auto flex justify-around md:flex-row lg:flex-row flex-col gap-10 py-28 px-4">
          <div className="space-y-2">
            <div className="flex space-x-2 items-center">
              <img className="w-10 h-10" src={logo} alt="" />
              <h1 className="text-white text-2xl font-bold">Dental Care</h1>
            </div>
            <div className="text-white text-base font-semibold">
              <p>Location: av. Washington 165, NY CA 54003</p>
              <p>Phone: +31 85 964 47 25</p>
              <p>Email: info@yourdomain.com</p>
              <p>Openings hours: 9.00 AM - 5.00 PM</p>
            </div>
            <div className="flex text-xl space-x-3 text-white">
             <FaFacebook></FaFacebook>
            <FaInstagram></FaInstagram>
            <FaTwitter></FaTwitter>
            <FaYoutube></FaYoutube>
            </div>
          </div>

          <div className="text-white">
            <h1 className="font-bold text-lg pb-5">Useful Links</h1>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Policy</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h1 className="text-white text-lg font-bold">Drop a Message</h1>
            <input
              className="py-2 px-4 rounded-lg"
              type="text"
              placeholder="Enter Your Email"
            />
            <div>
              <button className="py-2 px-16 btn bg-main  rounded-lg font-semibold">
                Subscriber
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
