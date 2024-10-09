import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignIn, facebookSignIn, githubSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      // console.log(result);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((result) => {
        // console.log(result.data);
        navigate("/");
      });
    });
  };
  const handleGithubSignIn = () => {
    githubSignIn().then((result) => {
      // console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((result) => {
        // console.log(result.data);
        navigate("/");
      });
    });
  };
  const handleFacebookSignIn = () => {
    facebookSignIn().then((result) => {
      // console.log(result);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((result) => {
        // console.log(result.data);
        navigate("/");
      });
    });
  };
  return (
    <div className="text-center mt-8 mb-24">
      <div className="space-x-6">
        <button onClick={handleGoogleSignIn} className="btn btn-sm btn-circle btn-outline">
          <FcGoogle className="text-xl" />
        </button>
        <button onClick={handleGithubSignIn} className="btn btn-sm btn-circle btn-outline">
          <FaGithub className="text-xl" />
        </button>
        <button onClick={handleFacebookSignIn} className="btn btn-sm btn-circle btn-outline">
          <FaFacebook className="text-[#0866FF] text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
