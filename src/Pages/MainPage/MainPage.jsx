import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";


const MainPage = () => {
    return (
        <div className=" font-Raleway">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainPage;