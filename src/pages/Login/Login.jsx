import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import img from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { FaArrowLeft } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  // const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // let from = location.state?.from?.pathName || '/';
  const from = location.state?.from?.pathname || "/";
  // console.log(from);
  useEffect(() => {
    loadCaptchaEnginge(6, "#E6923F", "white");
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const loginForm = e.currentTarget;
    // console.log(loginForm);
    const form = new FormData(loginForm);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);
    signin(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate(from, {replace: true});
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    // console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="hero bg-[url('/src/assets/others/authentication.png')] px-40 pb-36 pt-28  mx-auto ">
        <div className="bg-[url('/src/assets/others/authentication.png')] shadow-2xl">
          <Link to="/">
            <p className=" pt-10 ps-10 text-[#E6923F] text-xl">
              <FaArrowLeft className="inline-block me-2" />
              Go To Home
            </p>
          </Link>
          <div className="hero-content flex-col lg:flex-row ">
            <div className="md:w-1/2 text-center lg:text-left">
              <figure className="py-6">
                <img src={img} alt="Shoes" className="" />
              </figure>
            </div>

            <div className="card w-full max-w-sm md:w-1/2">
              <h1 className="text-5xl font-bold text-center">Login</h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    onBlur={handleValidateCaptcha}
                    // ref={captchaRef}
                    name="captcha"
                    placeholder="Type the captcha above"
                    className="input input-bordered"
                    required
                  />
                  {/* <button
                    onClick={handleValidateCaptcha}
                    className="btn btn-outline btn-xs mt-2"
                  >
                    Validate
                  </button> */}
                </div>
                <div className="form-control mt-6">
                  {/* <button className="btn btn-primary">Login</button> */}
                  <input
                    className="btn btn-primary"
                    disabled={disabled}
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <div className="mx-auto">
                <p>
                  <small>
                    New here? <Link to="/signup">Create a New Account</Link>
                  </small>
                </p>
                <p className="text-center  mt-6">Or sign in with</p>
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
