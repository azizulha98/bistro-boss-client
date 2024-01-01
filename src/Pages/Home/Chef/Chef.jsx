import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/FoodCard/FoodCard";

const Chef = () => {
  const [menu] = useMenu();
  const menuChef = menu?.filter(item => item.category === 'offered');
  return (
    <section>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          menuChef?.map(item => <FoodCard key={item._id} item={item} />)
        }
      </div>
    </section>
  );
};

export default Chef;