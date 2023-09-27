import { createBrowserRouter } from "react-router-dom";
import RootElement from "../../layouts/RootElement";
import Home from "../../pages/home/Home";
import Donation from "../../pages/donation/Donation";
import Statistics from "../../pages/statistics/Statistics";
import DonationDetails from "../../pages/donation-details/DonationDetails";

const router = createBrowserRouter([
    {
        path : "/",
        element : <RootElement/>,
        children : [
            {
              path : "/",
              loader : () => fetch("/data.json"),
              element : <Home/> 
            },
            {
                path : "/:id/details",
                loader :() => fetch("/data.json"),
                element : <DonationDetails/>
            },
            {
                path : "/donation",
                loader :() => fetch("/data.json"),
                element : <Donation/>
            },
            {
                path : "/statistics",
                loader : () =>fetch("/data.json"),
                element : <Statistics/>
            }
        ]
    }
]);
export default router;