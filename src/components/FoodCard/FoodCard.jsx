import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddCart = () => {
    // console.log(food);
    if (user && user.email) {
      //Send cart items to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        price: price,
        name: name,
        image: image,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your carts`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch cart to update the cart items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //  Send the user to the login page
          navigate("/login", { state: { from: location } });
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success"
          // });
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-[#F3F3F3] h-[484.5px] shadow-sm rounded-none">
        <figure className="px-0">
          <img src={image} alt="Shoes" className="object-cover w-full" />
        </figure>
        <p className="bg-slate-950 absolute right-0 mr-5 mt-5 px-3 text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={handleAddCart}
              className="btn bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506] text-[#BB8506]"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
