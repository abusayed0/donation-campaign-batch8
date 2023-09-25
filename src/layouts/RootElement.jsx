import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const RootElement = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default RootElement;