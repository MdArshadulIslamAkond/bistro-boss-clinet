import {
    createBrowserRouter,
  } from "react-router-dom";    
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import PrivetRoute from "./PrivetRoute";
import Contact from "../Contact/Contact/Contact";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/Allusers/Allusers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import {axiosPublic } from "../hooks/useAxiosPublic";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import Reservation from "../pages/Dashboard/Reservation/Reservation";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UserHome from "../pages/Dashboard/UserHome/UserHome";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element:<Home />,
        },
        {
          path: 'menu',
          element: <Menu />,
        },
        {
          path: 'order/:category',
          element: <Order />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <SignUp />
        },
        {
          path: 'contactUs',
          element: <Contact />
        }
      ],
    },
    {
      path: 'dashboard',
      element: <PrivetRoute><Dashboard /></PrivetRoute>,
      children: [
        // normal user routes
        // {
        //   path: '',
        //   element: <UserHome />,
        // },
        {
          path: 'userHome',
          element: <UserHome />,
        },
        {
          path: 'reservation',
          element: <Reservation />,
        },
        {
          path: 'cart',
          element: <Cart />,
        },
        {
          path: 'payment',
          element: <Payment />,
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory />,
        },
        {
          path: 'review',
          element: <AddReview />,
        },

        // admin only routes
       
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome /></AdminRoute>,
        },
        {
          path : 'addItems',
          element: <AdminRoute><AddItems /></AdminRoute>,
        },
        {
          path : 'manageItems',
          element: <AdminRoute><ManageItems /></AdminRoute>,
        },
        {
          path : 'updateItem/:id',
          element: <AdminRoute><UpdateItem /></AdminRoute>,
          loader: ({params}) => axiosPublic(`/menu/${params.id}`),
        },
        {
          path : 'users',
          element: <AdminRoute><AllUsers /></AdminRoute>,
        },
        {
          path: 'payment',
          element:<AdminRoute><Payment /></AdminRoute>,
        },
        {
          path: 'paymentHistory',
          element: <AdminRoute><PaymentHistory /></AdminRoute>,
        },
      ]
    },
  ]);