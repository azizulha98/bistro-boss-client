import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Chef from "../Chef/Chef";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ChefService />
      <PopularMenu />
      <Chef />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;