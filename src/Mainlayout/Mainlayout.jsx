import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Headers/Navbar";


const Mainlayout = () => {
    return (
        <div>
          
            <Navbar></Navbar>
        
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Mainlayout;