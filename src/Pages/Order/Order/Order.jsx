import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from '../../../assets/shop/banner2.jpg'

const Order = () => {
  return (
    <div>
      <Helmet><title>Bistro Order</title></Helmet>
      <Cover img={coverImg} title={'our Order'} details={'Would you like to try a dish?'} />
    </div>
  );
};

export default Order;