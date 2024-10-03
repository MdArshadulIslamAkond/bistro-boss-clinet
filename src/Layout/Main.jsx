import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navber from "../pages/Shared/Navber/Navber";
// import useAuth from "../hooks/useAuth";

const Main = () => {
    const location = useLocation();
    // console.log("location", location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    // const {loading} = useAuth();
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
    return (
        <div>
            {noHeaderFooter || <Navber />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;