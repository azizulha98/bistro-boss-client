import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Chef from "../Chef/Chef";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet><title>Bistro Home</title></Helmet>
      <Banner />
      <Category />
      <ChefService />
      <PopularMenu />
      <Chef />
      <Featured />
      <Testimonials />
    </>
  );
};

export default Home;