import React from 'react';
import Home from '../Components/Home';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const MainLayOut = () => {
    return (
        <div>
           <Navbar></Navbar>
           
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;