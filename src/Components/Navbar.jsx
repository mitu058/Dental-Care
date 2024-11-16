import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
       <div className='bg-blue-950 text-white'>
         <div className='min-h-20 container mx-auto items-center flex justify-between '>
            <div className='text-xl font-bold'>SmileCare Hub</div>
            <div className='space-x-4 text-base font-semibold'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/treatments'>Treatments</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/appoinments'>Aappointments</NavLink>
            </div>
            <div>
                <button className='btn'>Login</button>
            </div>
        </div>
       </div>
    );
};

export default Navbar;