import ChefCard from "./ChefCard";
import useMenu from "../../../hooks/useMenu";

const Chef = () => {
  const [menu] = useMenu();
  const menuChef = menu?.filter(item => item.category === 'offered');
  return (
    <section>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          menuChef?.map(item => <ChefCard key={item._id} item={item} />)
        }
      </div>
    </section>
  );
};

export default Chef;