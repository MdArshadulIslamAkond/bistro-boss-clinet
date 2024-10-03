import { FaBook, FaCalendarAlt, FaListUl, FaUtensils } from "react-icons/fa";
import { HiMail, HiShoppingBag, HiUserGroup } from "react-icons/hi";
import { IoMdHome, IoMdMenu } from "react-icons/io";
import { IoCartSharp, IoWallet } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
  return (
    <div>
      <div className="flex ">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen p-6 bg-[#D1A054]">
          {isAdmin ? (
            <>
              <ul className="manu p-3">
                <li className="mb-6">
                  <NavLink to="/dashboard/adminHome">
                    <IoMdHome className="inline-block me-2" />
                    ADMIN HOME
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils className="inline-block me-2" />
                    ADD ITEMS
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink to="/dashboard/manageItems">
                    <FaListUl className="inline-block me-2" />
                    MANAGE ITEMS
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink to="/dashboard/bokings">
                    <FaBook className="inline-block me-2" />
                    MANAGE BOOKINGS
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink to="/dashboard/users">
                    <HiUserGroup className="inline-block me-2" />
                    ALL USER
                  </NavLink>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="manu p-3">
                <li className="mb-6">
                  <NavLink to="/dashboard/userHome">
                    <IoMdHome className="inline-block me-2" />
                    USER HOME
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink to="/dashboard/reservation">
                    <FaCalendarAlt className="inline-block me-2" />
                    RESERVATION
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink to="/dashboard/paymentHistory">
                    <IoWallet className="inline-block me-2" />
                    PAYMENT HISTORY
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink to="/dashboard/cart">
                    <IoCartSharp className="inline-block me-2" />
                    MY CART ({cart.length})
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink to="/dashboard/review">
                    <MdReviews className="inline-block me-2" />
                    ADD REVIEW
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink to="/dashboard/Booking">
                    <LuCalendarClock className="inline-block me-2" />
                    MY BOOKING
                  </NavLink>
                </li>
              </ul>
            </>
          )}
          {/* shared nav links */}
          <div className="divider divider-[#f8f6f2]"></div>

          <ul className=" p-3">
            <li className="mb-6">
              <NavLink to="/">
                <IoMdHome className="inline-block me-2" />
                HOME
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink to="/menu">
                <IoMdMenu className="inline-block me-2" />
                MENU
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink to="/">
                <HiShoppingBag className="inline-block me-2" />
                SHOP
              </NavLink>
            </li>
            <li className="mb-6">
              <NavLink to="/">
                <HiMail className="inline-block me-2" />
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        {/* dashboard contact */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Navbar Title</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu bg-base-200 min-h-full">
                {/* Navbar menu content here/menu-horizontal */}
                <li>
                  <a>Navbar Item 1</a>
                </li>
                <li>
                  <a>Navbar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          Content
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
