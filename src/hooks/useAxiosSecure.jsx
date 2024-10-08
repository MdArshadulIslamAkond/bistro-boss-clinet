import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

export const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-ten-ruddy.vercel.app",
});
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useAuth();
  useEffect(()=>{
    // request interceptor to add authorization header for every secure call to the api
  const requestInterceptor = axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
    //   console.log("request stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  const responseInterceptor = axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
        const status = error?.response?.status;
        // for 401 and 403 logOut the user and move to the login page
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    }
  );
  // clean up interceptors on unmount
  return () => {
    axiosSecure.interceptors.request.eject(requestInterceptor);
    axiosSecure.interceptors.response.eject(responseInterceptor);
  };
  } , [logOut,navigate])
  return axiosSecure;
};

export default useAxiosSecure;
