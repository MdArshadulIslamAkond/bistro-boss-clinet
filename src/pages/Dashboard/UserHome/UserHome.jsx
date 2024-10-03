import { IoWallet } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaCartShopping, FaShop } from "react-icons/fa6";
import { FaCalendarAlt, FaPhoneVolume, FaStar } from "react-icons/fa";

const UserHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  console.log(user);
  const { data: stats = [] } = useQuery({
    queryKey: ["user-stats", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-stats?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user,
    refetchInterval: 60000, // Fetch stats every minute
  });
  return (
    <div className="md:mx-6">
      <h2 className="text-3xl mt-12">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <section className="mt-6">
        <div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="border rounded-md flex gap-6 justify-center items-center bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white py-9">
              <div className="stat-figure text-primary">
                <IoWallet className="text-3xl text-white" />
              </div>
              <div>
                <div className="text-3xl">{stats.menuItems}</div>
                <div className="text-2xl">Menu</div>
              </div>
            </div>
            <div className="border rounded-md flex gap-4 py-9 justify-center items-center bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white">
              <div className="stat-figure text-primary">
                <FaShop className="text-3xl text-white" />
              </div>
              <div>
                <div className="text-3xl">103</div>
                <div className="text-2xl">Shop</div>
              </div>
            </div>
            <div className="border rounded-md flex gap-4 py-9 justify-center items-center bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white">
              <div className="stat-figure text-primary">
                <FaPhoneVolume className="text-3xl text-white" />
              </div>
              <div>
                <div className="text-3xl">03</div>
                <div className="text-2xl">Contact</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex mt-8">
          <div className="md:w-1/2 bg-[#FFEDD5] text-center">
         <div className="my-24">
         <img
              src={user.photoURL}
              alt=""
              className="w-48 h-48 rounded-full border-[#D1A054] border-2 mx-auto"
            />

            <h2 className="text-3xl mt-10">{user.displayName}</h2>
         </div>
          </div>
          <div className="md:w-1/2 bg-[#FEF9C3]">
            <div className=" ps-24 my-24">
              <h2 className="text-3xl my-8">YOUR ACTIVITIES</h2>
              <div className="text-[#0088FE] flex gap-2 items-center">
                <FaCartShopping className="text-xl" />
                <h2 className="text-xl">
                  ORDERS: {stats?.orders?.[0]?.quantity || 0}
                </h2>
              </div>
              <div className="text-[#00C4A1] flex gap-2 items-center">
                <FaStar className="text-xl" />
                <h2 className="text-xl">
                  REVIEWS: {stats?.review?.[0]?.quantity || 0}
                </h2>
              </div>
              <div className="text-[#FFBB28] flex gap-2 items-center">
                <FaCalendarAlt className="text-xl" />
                <h2 className="text-xl">
                  BOOKINGS: {stats?.orders?.[0]?.quantity || 0}
                </h2>
              </div>
              <div className="text-[#FF8042] flex gap-2 items-center">
                <IoWallet className="text-xl" />
                <h2 className="text-xl">
                  PAYMENT: {stats?.paymen?.[0]?.quantity || 0}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserHome;
