import { createBrowserRouter } from "react-router-dom";
import RootElement from "../../layouts/RootElement";
import Home from "../../pages/home/Home";
import Donation from "../../pages/donation/Donation";
import Statistics from "../../pages/statistics/Statistics";

const router = createBrowserRouter([
    {
        path : "/",
        element : <RootElement/>,
        children : [
            {
              path : "/",
              loader : () => fetch("data.json"),
              element : <Home/> 
            },
            {
                path : "/donation",
                element : <Donation/>
            },
            {
                path : "/statistics",
                element : <Statistics/>
            }
        ]
    }
]);
export default router;