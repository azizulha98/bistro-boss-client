import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../../assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
  const { category } = useParams()
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu?.filter(item => item.category === 'dessert');
  const drinks = menu?.filter(item => item.category === 'drinks');
  const salad = menu?.filter(item => item.category === 'salad');
  const pizzas = menu?.filter(item => item.category === 'pizza');
  const soups = menu?.filter(item => item.category === 'soup');
  return (
    <div>
      <Helmet><title>Bistro Order</title></Helmet>
      <Cover img={coverImg} title={'our Order'} details={'Would you like to try a dish?'} />
      <section className="my-10 text-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel><OrderTab items={salad} /></TabPanel>
          <TabPanel><OrderTab items={pizzas} /></TabPanel>
          <TabPanel><OrderTab items={soups} /></TabPanel>
          <TabPanel><OrderTab items={desserts} /></TabPanel>
          <TabPanel><OrderTab items={drinks} /></TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;