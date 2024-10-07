import { LiaUtensilsSolid } from "react-icons/lia";
import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_Image_Upload_Token;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    // const imageFile = new FormData();
    // imageFile.append("image", data.image[0]);
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    } )
    console.log("with image url", res.data);
    if(res.data.success){
        // new send the menu item data  to the server with the image
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe:data.recipe,
            image: res.data.data.display_url
        }
        const menuRes = await axiosSecure.post("/menu", menuItem);
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is add to themenu`,
                showConfirmButton: false,
                timer: 1500
              });

    }
    
  };
  } 
  return (
    <div>
      <SectionTaitle heading="ADD AN ITEM" subHeading="What's new?" />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe name*</span>
            </div>
            <input
              {...register("name", {required:"This field is required"})}
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
              <select defaultValue='default'
                {...register("category", {required:"This field is required"})}
                className="select select-bordered w-full"
              >
                <option disabled value='default'>
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
                {...register("price", {required:"This field is required"})}
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
              {...register("recipe", {required:"This field is required"})}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          {/* imge file upload */}
          <div className="form-control w-full my-6">
            <input {...register("image", {required:"This field is required"})} type="file" className="file-input w-full max-w-xs file-input-secondary" />
          </div>
          <button className="btn bg-gradient-to-r from-[#835D23] to-[#b58130] text-white">
            Add Item <LiaUtensilsSolid />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
