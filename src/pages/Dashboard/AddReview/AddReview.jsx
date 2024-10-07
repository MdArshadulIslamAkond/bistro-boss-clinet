import { useForm } from "react-hook-form";
import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
const AddReview = () => {
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    const reviewInfo = {
      name: user?.displayName,
      email: user?.email,
      likedRecipe: data.likedRecipe,
      suggestion: data.suggestion,
      details: data.details,
      rating: rating,
    };
    axiosPublic.post("/reviews", reviewInfo).then((result) => {
      if (result.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: " Review Add Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        setRating(0);
        console.log(result.data);
      }
    });
  };

  return (
    <div className="bg-white">
      <div className="md:mx-28">
        <SectionTaitle
          heading="Give a Review..."
          subHeading="Sharing is Caring!!!"
        />
        <section className="bg-[#F3F3F3] text-center md:px-32 py-12">
          <h2 className="text-3xl">RATE US</h2>
          <div className="my-6">
            <Rating
              value={rating}
              onChange={(value) => setRating(value)}
              emptySymbol={<span className="text-gray-300 text-sm">&#9734;</span>} // Empty star
              fullSymbol={<span className="text-yellow-500 text-sm">&#9733;</span>} // Filled star
            />
            {/* <p>Your Rating: {rating}</p> */}
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Which recipe you liked most?
                  </span>
                </div>
                <input
                  type="text"
                  {...register("likedRecipe", {
                    required: "This field is required",
                  })}
                  placeholder="Recipe you liked most"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs ">
                <div className="label">
                  <span className="label-text">
                    Do you have any suggestion for us?
                  </span>
                </div>
                <input
                  type="text"
                  {...register("suggestion", {
                    required: "This field is required",
                  })}
                  placeholder="suggestion"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">
                    Kindly express your care in a short way.
                  </span>
                </div>
                <textarea
                  {...register("details", {
                    required: "This field is required",
                  })}
                  className="textarea textarea-bordered h-24 max-w-xs"
                  placeholder="Review in detail"
                ></textarea>
              </label>
              <div className="my-8">
                <button
                  type="submit"
                  className="btn btn-lg text-white bg-gradient-to-r from-[#835D23] to-[#B58130] py-4 px-8"
                >
                  <span className="text-2xl font-bold"> Send Review</span>
                  <BsFillRocketTakeoffFill className="inline-block text-2xl" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddReview;
