import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage/LoadingPage";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
const location = useLocation();
    if(loading){
        // return <progress className="progress w-56"></progress>;
        return <LoadingPage />;
    }
    if(user){
        return children;
    }
    console.log(location);
    return <Navigate to='/login' state={{from: location}} replace/>;
};

export default PrivetRoute;