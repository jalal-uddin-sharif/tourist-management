import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Roots = () => {
    return (
        <div>
            <Navbar/>
            <div className="pt-24">
            <Outlet/>
            </div>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default Roots;