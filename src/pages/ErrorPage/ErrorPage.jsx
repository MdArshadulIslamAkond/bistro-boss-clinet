import { IoMdHome } from "react-icons/io";
import image from "../../../src/assets/404.gif";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <img src={image} alt="" className="mx-auto" />
      <Link to='/'>
        <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
          <span>Back To Home</span>
          <IoMdHome className="inline-block me-2" />
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
