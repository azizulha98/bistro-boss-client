const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-4">
      <img src={image} alt="" className="w-32" style={{ borderRadius: '0 200px 200px 200px' }} />
      <div>
        <h2 className="uppercase">{name}---------</h2>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuItem;