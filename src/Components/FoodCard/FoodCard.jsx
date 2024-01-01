const FoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure><img src={image} className="w-full" /></figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-8 py-2 rounded-md">${price}</p>
      <div className="py-4 px-4 flex flex-col items-center">
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl font-bold text-center">{name}</h2>
          <p className="text-justify">{recipe}</p>
        </div>
        <div className="absolute bottom-3">
          <button className="btn btn-outline bg-slate-100 btn-sm border-0 border-b-2 text-yellow-700 uppercase font-bold tracking-widest ">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
