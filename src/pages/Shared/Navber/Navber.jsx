import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut();
  };
  // if(isAdminLoading){
  //   return <progress className="progress w-56"></progress>;
  // }
  const navLinkStyle = ({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "gray" : isActive ? "red" : " white",
      backgroundColor: isPending ? "rgba(255, 255, 255, 0.1)" : "transparent",
      border: isPending ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
    };
  };
  const navOptions = (
    <>
      <li>
        <NavLink to="/" style={navLinkStyle}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/contactUs" style={navLinkStyle}>
          CONTACT US
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/dashboard" style={navLinkStyle}>
          DASHBOARD
        </NavLink>
      </li> */}
      {user && !isAdmin && (
        <li>
          <NavLink to="/dashboard/userHome" style={navLinkStyle}>
          DASHBOARD
          </NavLink>
        </li>
      )}
      {user && isAdmin && (
        <li>
          <NavLink to="/dashboard/adminHome" style={navLinkStyle}>
            DASHBOARD
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to="/menu" style={navLinkStyle}>
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink to="/order/salad" style={navLinkStyle}>
          ORDER FOOD
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/cart" style={navLinkStyle}>
          <button className="btn justify-center items-center">
            <FaShoppingCart className="mr-2" />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
      
      {!user && (
        <>
          <li>
            <NavLink to="/login" style={navLinkStyle}>
              LOGIN
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" style={navLinkStyle}>
              SIGN UP
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-base-100 max-w-screen-xl mx-auto justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <p className="btn btn-ghost text-xl text-white">
            BISTRO BOSS <br /> Restaurant
          </p>
          {/* <a href=""></a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            {navOptions}
          </ul>
        </div>
        <div className="flex flex-col md:gap-2 items-center md:flex-row-reverse">
          {user && (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </ul>
              </div>
              <h3 className="text-white">{user?.displayName}</h3>
              {/* <button onClick={handleLogOut} className="btn btn-ghost text-white">SIGN OUT</button> */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navber;
