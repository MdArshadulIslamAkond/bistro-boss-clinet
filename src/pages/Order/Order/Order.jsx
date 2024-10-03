import { Helmet } from "react-helmet";
import orderCoverImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu/useMenu";
import OrderTabPanel from "../OrderTabPanel/OrderTabPanel";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  // console.log(category);
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  // console.log(drinks);
  return (
    <div className="my-8">
      <Helmet>
        <title>Bistro Boss | Order</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <Cover img={orderCoverImg} title={"OUR SHOP"} height="700" />

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="uppercase">
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
        </TabList>
        <TabPanel>
           <OrderTabPanel items={salad} />
        </TabPanel>
        <TabPanel>
        <OrderTabPanel items={pizza} />
        </TabPanel>
        <TabPanel>
        <OrderTabPanel items={soups} />
        </TabPanel>
        <TabPanel>
        <OrderTabPanel items={desserts} />
        </TabPanel>
        <TabPanel>
        <OrderTabPanel items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
