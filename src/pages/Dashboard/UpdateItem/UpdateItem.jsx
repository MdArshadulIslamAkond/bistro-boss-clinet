import { useForm } from "react-hook-form";
// import { LiaUtensilsSolid } from "react-icons/lia";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const image_hosting_key = import.meta.env.VITE_Image_Upload_Token;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const navigate = useNavigate();
  const { data } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { _id, name = "", recipe = "", image="", price = "", category = "" } = data;
  console.log(_id, name, image, recipe, price, category);
  // const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name, recipe, price, category },
  });
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) { 
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const updatedata = await axiosSecure.patch(`/menu/${_id}`, menuItem );
      if (updatedata.data.modifiedCount > 0) {
        // navigate('/dashboard/manageItems');
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} has been successfully updated`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(updatedata.data);
    }
  };
  return (
    <div>
      <h2 className="text-3xl text-center my-16">Update Item</h2>
      <section className="bg-[#F3F3F3] p-12">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe name*</span>
              </div>
              <input
                {...register("name", { required: "This field is required" })}
                type="text"
                placeholder="Recipe name"
                className="input input-bordered w-full"
              />
            </label>
            <div className="md:flex gap-6 my-6">
              {/* Category */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Category*</span>
                </div>
                <select
                  defaultValue="default"
                  {...register("category", {
                    required: "This field is required",
                  })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="sOUP">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drink">Drink</option>
                </select>
              </label>
              {/* price */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  {...register("price", { required: "This field is required" })}
                  type="number"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details*</span>
              </div>
              <textarea
                {...register("recipe", { required: "This field is required" })}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"
              ></textarea>
            </label>
            {/* imge file upload */}
            <div className="form-control w-full my-6">
              <input
                {...register("image", { required: "This field is required" })}
                type="file"
                className="file-input w-full max-w-xs file-input-secondary"
              />
            </div>
            <div className="text-center">
              <button className="btn bg-gradient-to-r from-[#835D23] to-[#b58130] text-white mb-6">
                Update Recipe Details
                {/* <LiaUtensilsSolid /> */}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateItem;
