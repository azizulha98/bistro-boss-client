import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.jpg'
import dessertsImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupsImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu?.filter(item => item.category === 'dessert');
  // const drinks = menu?.filter(item => item.category === 'drinks');
  const salad = menu?.filter(item => item.category === 'salad');
  const pizzas = menu?.filter(item => item.category === 'pizza');
  const soups = menu?.filter(item => item.category === 'soup');
  const offered = menu?.filter(item => item.category === 'offered');

  return (
    <>
      <Helmet><title>Bistro Menu</title></Helmet>
      <Cover img={menuImg} title={'our menu'} details={'Would you like to try a dish?'} />
      <section className="my-10 space-y-8">
        <SectionTitle heading="today's offer" subHeading="Don't miss" />
        <MenuCategory items={offered} />
        <div className="flex justify-center">
          <button className="btn btn-outline btn-sm border-0 border-b-2 text-yellow-700 uppercase font-bold tracking-widest ">order your favorite food</button>
        </div>
      </section>

      <section className="my-10 space-y-8">
        <MenuCategory
          items={desserts}
          title="Dessert"
          coverImg={dessertsImg}
          details={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        />
        <div className="flex justify-center">
          <button className="btn btn-outline btn-sm border-0 border-b-2 text-yellow-700 uppercase font-bold tracking-widest ">order your favorite food</button>
        </div>
      </section>

      <section className="my-10 space-y-8">
        <MenuCategory
          items={pizzas}
          title="pizza"
          coverImg={pizzaImg}
          details={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        />
        <div className="flex justify-center">
          <button className="btn btn-outline btn-sm border-0 border-b-2 text-yellow-700 uppercase font-bold tracking-widest ">order your favorite food</button>
        </div>
      </section>

      <section className="my-10 space-y-8">
        <MenuCategory
          items={salad}
          title="Salad"
          coverImg={saladImg}
          details={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        />
        <div className="flex justify-center">
          <button className="btn btn-outline btn-sm border-0 border-b-2 text-yellow-700 uppercase font-bold tracking-widest ">order your favorite food</button>
        </div>
      </section>

      <section className="my-10 space-y-8">
        <MenuCategory
          items={soups}
          title="soups"
          coverImg={soupsImg}
          details={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
        />
       <div className="flex justify-center">
          <button className="btn btn-outline btn-sm border-0 border-b-2 text-yellow-700 uppercase font-bold tracking-widest ">order your favorite food</button>
        </div>
      </section>
    </>
  );
};

export default Menu;