import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Components/Home";
import AllTreatMents from "../Components/AllTreatMents";
import Profile from "../Components/Profile";
import Appoinments from "../Components/Appoinments";


const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/treatments',
                element:<AllTreatMents></AllTreatMents>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/appoinments',
                element:<Appoinments></Appoinments>
            }
        ]
    }
])

export default router