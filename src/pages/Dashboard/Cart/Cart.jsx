import { RiDeleteBin5Line } from "react-icons/ri";
import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const [asc, setAsc] = useState(true);
    const [cart, refetch] = useCart(asc);
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);
  const handleRemoveItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="mx-40 w-">
      <SectionTaitle subHeading={"my cart"} heading={"WANNA ADD MORE?"} />
      <div>
        <button onClick={()=>{
            setAsc(!asc);
            // refetch();   
            }} className="my-4 btn bg-[#E8E8E8] border-0 border-b-4 border-[#D1A054] text-[#D1A054]">
        {asc ? "Price: High to Low" : "Price: Low to High"}
        </button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="uppercase text-2xl">Total orders: {cart.length}</h2>
        <h2 className="uppercase text-2xl">Total price: ${totalPrice}</h2>
        {
          cart.length > 0 ? <>
          <Link to="/dashboard/payment"><button className="btn bg-[#D1A054] btn-sm text-white">PAY</button></Link>
          </> : 
          <button disabled className="btn bg-[#D1A054] btn-sm text-white">PAY</button>
        }
      </div>
      <div className="overflow-x-auto  rounded-t-lg">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#D1A054] text-white border-black">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="btn bg-[#B91C1C] text-white btn-sm"
                  >
                    <RiDeleteBin5Line />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
