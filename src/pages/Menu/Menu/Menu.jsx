import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../hooks/useMenu/useMenu";
import SectionTaitle from "../../../components/SectionTaitle/SectionTaitle";
import MenuCategory from "../MenuCategory/MenuCategory";
// import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter((item) => item.category === "dessert");
    const soups = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Cover img={menuImg} title='our menu' height='800' />
      {/* main cover */}
      <SectionTaitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
      {/* offered menu items */}
      <MenuCategory items={offered} />
      {/* desserts menu items */}
      <MenuCategory items={desserts} title={"desserts"} coverImg={dessertImg} />
      {/* pizzas menu items */}
      <MenuCategory items={pizza} title={"pizza"} coverImg={pizzaImg} />
      {/* salads menu items */}
      <MenuCategory items={salad} title={"salad"} coverImg={saladImg} />
      {/* soups menu items */}
      <MenuCategory items={soups} title={"soups"} coverImg={soupImg} />
    </div>
  );
};

export default Menu;
