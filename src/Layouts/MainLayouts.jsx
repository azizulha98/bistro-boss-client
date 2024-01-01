import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayouts = () => {
  const location = useLocation();
  const withoutHeaderFooter = location.pathname.includes('login') || location.pathname.includes('singing')
  return (
    <div>
      <Navbar />
      <Outlet />
      {withoutHeaderFooter || <Footer />}
    </div>
  );
};

export default MainLayouts;