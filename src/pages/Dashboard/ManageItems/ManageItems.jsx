import { RiDeleteBin5Line } from "react-icons/ri";
import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";
import { FaRegEdit } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link, useNavigate } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const handleRemoveitem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} successfully deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div className="md:px-36 pb-36">
      <SectionTaitle heading="MANAGE ALL ITEMS" subHeading="Hurry Up!" />
      <section className="bg-white md:p-12">
        <h2 className="text-3xl">TOTAL ITEMS: {menu.length}</h2>
        <div className="overflow-x-auto rounded-lg">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white ">
              <tr>
                <th></th>
                <th>ITEM IMAGE</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item?._id}`}>
                      <button className="btn bg-[#D1A054] text-white btn-sm">
                        <FaRegEdit />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleRemoveitem(item)}
                      className="btn bg-[#B91C1C] text-white btn-sm"
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ManageItems;
