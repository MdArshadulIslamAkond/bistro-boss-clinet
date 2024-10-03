import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result);
      const userInfo ={
        email: result.user?.email,
        name: result.user?.displayName
      }
      axiosPublic.post('/users', userInfo)
      .then((result) =>{
        console.log(result.data);
        navigate('/');
      })
    });
  };
  return (
    <div className="text-center mt-8 mb-24">
      <div>
        <button onClick={handleGoogleSignIn} className="btn btn-sm">
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
