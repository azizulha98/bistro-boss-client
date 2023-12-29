const ChefCard = ({ item }) => {
  console.log(item);
  const { image, name, recipe } = item;
  return (
    <div className="w-full shadow-xl rounded-xl">
      <figure><img src={image} className="w-full rounded-t-xl" /></figure>
      <div className="text-center my-6 space-y-2 px-4">
        <h2 className="text-2xl">{name}</h2>
        <p>{recipe}</p>
        <div className="">
          <button className="btn btn-outline btn-sm border-0 border-b-2 text-yellow-700 uppercase font-bold tracking-widest ">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;