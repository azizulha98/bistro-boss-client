import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg, details }) => {
  return (
    <div className="space-y-10">
      {title && <Cover img={coverImg} title={title} details={details} />}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        {
          items?.map(item => <MenuItem key={item._id} item={item} />)
        }
      </div>
      
        <Link className="flex justify-center" to={`/order/${title}`}>
          <button className="btn btn-outline btn-sm border-0 border-b-2 text-yellow-700 uppercase font-bold tracking-widest ">order your favorite food</button>
        </Link>
      
    </div>
  );
};

export default MenuCategory;