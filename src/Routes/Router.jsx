import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../Components/Home";
import AllTreatMents from "../Components/AllTreatMents";
import Profile from "../Components/Profile";
import Appoinments from "../Components/Appoinments";
import ErrorPage from "../Components/ErrorPage";


const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayOut></MainLayOut>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:async ()=> {
                    const serviceRes = await fetch("/service.json")
                    const serviceData = await serviceRes.json()

                    const feedbackRes = await fetch("/happyClients.json")
                    const feedbackData = await feedbackRes.json()

                    return {serviceData,feedbackData}
                }
            },
            {
                path:'/treatments',
                element:<AllTreatMents></AllTreatMents>,
                loader:()=> fetch("/service.json")
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