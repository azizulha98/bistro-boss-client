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
    </div>
  );
};

export default MenuCategory;