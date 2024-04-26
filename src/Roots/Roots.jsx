import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Roots = () => {
    return (
        <div>
            <Navbar/>
            <div className="pt-24">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Roots;