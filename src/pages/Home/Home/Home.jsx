// import Footer from "../../Shared/Footer/Footer";

import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Tastimonials from "../Tastimonials/Tastimonials";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/home/chef-service.jpg';
import CallUs from "../CallUs/CallUs";
import Chef from "../Chef/Chef";
import useAuth from "../../../hooks/useAuth";

const Home = () => {
 
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Banner />
      <Category />
      <Cover img={img} color={'bg-White'} title={'Bistro Boss'} height='550' />
      <PopularMenu />
      <CallUs />  
      <Chef />
      <Featured />
      <Tastimonials />
    </div>
  );
};

export default Home;
