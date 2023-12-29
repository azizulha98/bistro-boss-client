import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu?.filter(item => item.category === 'popular');
  return (
    <section className="my-10 space-y-3">
      <SectionTitle heading={'from our menu'} subHeading={'Check it out'} />
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {
          popular?.map(item => <MenuItem key={item._id} item={item} />)
        }
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline btn-sm border-0 border-b-2 text-yellow-700 uppercase font-bold tracking-widest ">View full menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;