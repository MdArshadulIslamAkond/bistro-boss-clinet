import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-ten-ruddy.vercel.app',

})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;