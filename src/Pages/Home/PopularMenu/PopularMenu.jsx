import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const menuItems = data.filter(item => item.category === 'popular')
        setMenu(menuItems)
      })
  }, [])
  return (
    <section className="my-10 space-y-3">
      <SectionTitle heading={'from our menu'} subHeading={'Check it out'} />
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {
          menu?.map(item => <MenuItem key={item._id} item={item} />)
        }
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline btn-sm border-0 border-b-2 text-yellow-700 uppercase font-bold tracking-widest ">View full menu</button>
      </div>
    </section>
  );
};

export default PopularMenu;