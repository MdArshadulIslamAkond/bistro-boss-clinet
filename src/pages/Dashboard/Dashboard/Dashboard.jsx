import { FaBook, FaCalendarAlt, FaListUl, FaUtensils } from "react-icons/fa";
import { HiMail, HiShoppingBag, HiUserGroup } from "react-icons/hi";
import { IoMdHome, IoMdMenu } from "react-icons/io";
import { IoCartSharp, IoWallet } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Toolbar } from "@mui/material";

import Typography from "@mui/material/Typography";
import { useState } from "react";
const drawerWidth = 240;

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const [isAdmin] = useAdmin();
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Typography
        variant="h6"
        // noWrap
        component="div"
        sx={{ textAlign: "center", p: 2 }}
      >
        BISTRO BOSS Restaurant
      </Typography>
      <Divider />
      {isAdmin ? (
        <>
          <List>
            <ListItem
              button
              component={NavLink}
              to={"/dashboard/adminHome"}
              disablePadding
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : " black",
              })}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  <IoMdHome className="inline-block me-2" />
                </ListItemIcon>
                <ListItemText primary="ADMIN HOME" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              button
              component={NavLink}
              to={"/dashboard/addItems"}
              disablePadding
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : " black",
              })}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  <FaUtensils className="inline-block me-2" />
                </ListItemIcon>
                <ListItemText primary="ADD ITEMS" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              button
              component={NavLink}
              to={"/dashboard/manageItems"}
              disablePadding
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : " black",
              })}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  <FaListUl className="inline-block me-2" />
                </ListItemIcon>
                <ListItemText primary="MANAGE ITEMS" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              button
              component={NavLink}
              to={"/dashboard/bokings"}
              disablePadding
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : " black",
              })}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  <FaBook className="inline-block me-2" />
                </ListItemIcon>
                <ListItemText primary="MANAGE BOOKINGS" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              button
              component={NavLink}
              to={"/dashboard/users"}
              disablePadding
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : " black",
              })}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  <HiUserGroup className="inline-block me-2" />
                </ListItemIcon>
                <ListItemText primary="ALL USER" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      ) : (
        <>
          <List>
            <ListItem
              button
              component={NavLink}
              to={"/dashboard/userHome"}
              disablePadding
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : " black",
              })}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  <IoMdHome className="inline-block me-2" />
                </ListItemIcon>
                <ListItemText primary="USER HOME" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              button
              component={NavLink}
              to={"/dashboard/reservation"}
              disablePadding
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : " black",
              })}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  <FaCalendarAlt className="inline-block me-2" />
                </ListItemIcon>
                <ListItemText primary="RESERVATION" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              button
              component={NavLink}
              to={"/dashboard/paymentHistory"}
              disablePadding
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : " black",
              })}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  <IoWallet className="inline-block me-2" />
                </ListItemIcon>
                <ListItemText primary="PAYMENT HISTORY" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              button
              component={NavLink}
              to={"/dashboard/cart"}
              disablePadding
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : " black",
              })}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  <IoCartSharp className="inline-block me-2" />
                </ListItemIcon>
                <ListItemText primary="MY CART" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              button
              component={NavLink}
              to={"/dashboard/review"}
              disablePadding
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : " black",
              })}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  <MdReviews className="inline-block me-2" />
                </ListItemIcon>
                <ListItemText primary="ADD REVIEW" />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem
              button
              component={NavLink}
              to={"/dashboard/Booking"}
              disablePadding
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "white" : " black",
              })}
            >
              <ListItemButton>
                <ListItemIcon style={{ color: "inherit" }}>
                  <LuCalendarClock className="inline-block me-2" />
                </ListItemIcon>
                <ListItemText primary="MY BOOKING" />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}

      <Divider />
      <List>
        <ListItem
          button
          component={NavLink}
          to={"/"}
          disablePadding
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "white" : " black",
          })}
        >
          <ListItemButton>
            <ListItemIcon style={{ color: "inherit" }}>
              <IoMdHome className="inline-block me-2" />
            </ListItemIcon>
            <ListItemText primary="HOME" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem
          button
          component={NavLink}
          to={"/menu"}
          disablePadding
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "white" : " black",
          })}
        >
          <ListItemButton>
            <ListItemIcon style={{ color: "inherit" }}>
              <IoMdMenu className="inline-block me-2" />
            </ListItemIcon>
            <ListItemText primary="MENU" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem
          button
          component={NavLink}
          to={"/order/salad"}
          disablePadding
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "white" : " black",
          })}
        >
          <ListItemButton>
            <ListItemIcon style={{ color: "inherit" }}>
              <HiShoppingBag className="inline-block me-2" />
            </ListItemIcon>
            <ListItemText primary="SHOP" />
          </ListItemButton>
        </ListItem>
        {/* </ListItemIcon> */}
      </List>
      <List>
        <ListItem
          button
          component={NavLink}
          to={"/contactUs"}
          disablePadding
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "white" : " black",
          })}
        >
          <ListItemButton>
            <ListItemIcon style={{ color: "inherit" }}>
              <HiMail className="inline-block me-2" />
            </ListItemIcon>
            <ListItemText primary="CONTACT" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#D1A054",
          display: { md: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            BISTRO BOSS
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: 120 }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#D1A054",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#D1A054",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#f6f6f6",
          // border: "1px solid #ce0f0f",
        }}
      >
        {/* <Toolbar /> */}
        <Outlet />
      </Box>
    </Box>
  );
};

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * Remove this when copying and pasting into your project.
//    */
//   window: PropTypes.func,
// };

export default Dashboard;

// const Dashboard = () => {
//   const [cart] = useCart();

//   // TODO: get isAdmin value from the database
//   const [isAdmin] = useAdmin();
//   return (
//     <div>
//       <div className="flex ">
//         {/* dashboard side bar */}
//         <div className="w-64 min-h-screen p-6 bg-[#D1A054]">
//           {isAdmin ? (
//             <>
//               <ul className="manu p-3">
//                 <li className="mb-6">
//                   <NavLink to="/dashboard/adminHome">
//                     <IoMdHome className="inline-block me-2" />
//                     ADMIN HOME
//                   </NavLink>
//                 </li>
//                 <li className="mb-6">
//                   <NavLink to="/dashboard/addItems">
//                     <FaUtensils className="inline-block me-2" />
//                     ADD ITEMS
//                   </NavLink>
//                 </li>
//                 <li className="mb-6">
//                   <NavLink to="/dashboard/manageItems">
//                     <FaListUl className="inline-block me-2" />
//                     MANAGE ITEMS
//                   </NavLink>
//                 </li>
//                 <li className="mb-6">
//                   <NavLink to="/dashboard/bokings">
//                     <FaBook className="inline-block me-2" />
//                     MANAGE BOOKINGS
//                   </NavLink>
//                 </li>
//                 <li className="mb-6">
//                   <NavLink to="/dashboard/users">
//                     <HiUserGroup className="inline-block me-2" />
//                     ALL USER
//                   </NavLink>
//                 </li>
//               </ul>
//             </>
//           ) : (
//             <>
//               <ul className="manu p-3">
//                 <li className="mb-6">
//                   <NavLink to="/dashboard/userHome">
//                     <IoMdHome className="inline-block me-2" />
//                     USER HOME
//                   </NavLink>
//                 </li>
//                 <li className="mb-6">
//                   <NavLink to="/dashboard/reservation">
//                     <FaCalendarAlt className="inline-block me-2" />
//                     RESERVATION
//                   </NavLink>
//                 </li>
//                 <li className="mb-6">
//                   <NavLink to="/dashboard/paymentHistory">
//                     <IoWallet className="inline-block me-2" />
//                     PAYMENT HISTORY
//                   </NavLink>
//                 </li>
//                 <li className="mb-6">
//                   <NavLink to="/dashboard/cart">
//                     <IoCartSharp className="inline-block me-2" />
//                     MY CART ({cart.length})
//                   </NavLink>
//                 </li>
//                 <li className="mb-6">
//                   <NavLink to="/dashboard/review">
//                     <MdReviews className="inline-block me-2" />
//                     ADD REVIEW
//                   </NavLink>
//                 </li>
//                 <li className="mb-6">
//                   <NavLink to="/dashboard/Booking">
//                     <LuCalendarClock className="inline-block me-2" />
//                     MY BOOKING
//                   </NavLink>
//                 </li>
//               </ul>
//             </>
//           )}
//           {/* shared nav links */}
//           <div className="divider divider-[#f8f6f2]"></div>

//           <ul className=" p-3">
//             <li className="mb-6">
//               <NavLink to="/">
//                 <IoMdHome className="inline-block me-2" />
//                 HOME
//               </NavLink>
//             </li>
//             <li className="mb-6">
//               <NavLink to="/menu">
//                 <IoMdMenu className="inline-block me-2" />
//                 MENU
//               </NavLink>
//             </li>
//             <li className="mb-6">
//               <NavLink to="/">
//                 <HiShoppingBag className="inline-block me-2" />
//                 SHOP
//               </NavLink>
//             </li>
//             <li className="mb-6">
//               <NavLink to="/">
//                 <HiMail className="inline-block me-2" />
//                 CONTACT
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         {/* dashboard contact */}
//         <div className="flex-1">
//           <Outlet />
//         </div>
//       </div>
//       {/* import * as React from 'react';
// import PropTypes from 'prop-types'; */}
//     </div>
//   );
// };

// export default Dashboard;
