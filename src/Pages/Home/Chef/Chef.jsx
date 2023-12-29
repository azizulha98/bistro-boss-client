import { useEffect } from "react";
import { useState } from "react";
import ChefCard from "./ChefCard";

const Chef = () => {
  const [menuChef, setMenuChef] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const chefItem = data.filter(item => item.category === 'offered')
        setMenuChef(chefItem)
      })
  }, [])
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