import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { FaArrowLeft } from "react-icons/fa";

// type Inputs = {
//     example: string
//     exampleRequired: string
//   }
const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { creatUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    creatUser(data.email, data.password)
      .then((result) => {
        // console.log(result.user);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            // console.log("user profile updated successfully");
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((result) => {
              if (result.data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "user created successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
                navigate("/");
              }
            });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  // console.log(watch("example"));

  // const handleSignup = (e) => {
  //     e.preventDefault();
  //     const loginForm = e.currentTarget;
  //     // console.log(loginForm);
  //     const form = new FormData(loginForm);
  //     const email = form.get("email");
  //     const password = form.get("password");
  //     creatUser(email, password)
  //     .then(result => console.log(result.user))
  //     .catch(error=>console.log(error))
  // }
  return (
    <>
      <Helmet>
        <title>Bistro Boss | SignUp</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="hero bg-[url('/src/assets/others/authentication.png')] px-40 pb-36 pt-28 mx-auto">
        <div className="bg-[url('/src/assets/others/authentication.png')] shadow-2xl">
          <Link to="/">
            <p className=" text-end pt-10 pe-10 text-[#E6923F] text-xl">
              <FaArrowLeft className="inline-block me-2" />
              Go To Home
            </p>
          </Link>
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <div className="text-center md:w-1/2 lg:text-left">
              <figure className="py-6">
                <img src={img} alt="Shoes" className="" />
              </figure>
            </div>
            <div className="card w-full max-w-sm md:w-1/2">
              <h1 className="text-5xl font-bold text-center">Sign Up</h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true, maxLength: 30 })}
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered"
                  />
                  {/* {errors.name && <span className="text-red-600">This field is required</span>} */}
                  {errors.name && errors.name.type === "required" && (
                    <span role="alert" className="text-red-600">
                      This is required
                    </span>
                  )}
                  {errors.name && errors.name.type === "maxLength" && (
                    <span className="text-red-600">Max length exceeded</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", {
                      required: "Photo URL is require",
                    })}
                    placeholder="Enter your Photo URL"
                    className="input input-bordered"
                  />
                  {/* {errors.name && <span className="text-red-600">This field is required</span>} */}
                  {/* {errors.photoURL && (
                    <span role="alert" className="text-red-600">
                      This is required
                    </span>
                  )} */}
                  {errors.photoURL && (
                    <span className="text-red-600">
                      {errors.photoURL.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered"
                  />
                  {/* {errors.email?.type === "required" && (
                  <span className="text-red-600">This field is required</span>
                )} */}
                  {errors.email && (
                    <span role="alert" className="text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character",
                      },
                    })}
                    name="password"
                    placeholder="Enter your password"
                    className="input input-bordered"
                  />
                  {/* {errors.password?.type === "required" && (
                  <span role="alert" className="text-red-600">
                    This field is required
                  </span>
                )} */}
                  {errors.password && (
                    <span role="alert" className="text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  {/* <button className="btn btn-primary">Login</button> */}
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <div className="mx-auto">
                <p>
                  <small>
                    Already registered? <Link to="/login">Go to log in</Link>
                  </small>
                </p>
                <p className="text-center mt-6">Or sign in with</p>
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
