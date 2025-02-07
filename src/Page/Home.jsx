import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import Portfolio from "../Components/Portfolio";


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Outlet></Outlet>
         {/* <Portfolio></Portfolio> */}
        </div>
    );
};

export default Home;