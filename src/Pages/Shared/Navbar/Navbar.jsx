import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(err => console.error(err));
  }
  const navItem = <>
    <NavLink><li><Link to='/'>Home</Link></li></NavLink>
    <NavLink><li><Link to='/menu'>Menu</Link></li></NavLink>
    <NavLink><li><Link to='/order/drinks'>Order</Link></li></NavLink>
    {
      user ?
        <>
          <NavLink><li><button onClick={handleLogout} className="btn-ghost uppercase">Logout<small className="text-orange-500">{user.displayName}</small></button></li></NavLink>

          <img src={user.photoURL} alt="" className="w-10 rounded-full" />
        </>
        :
        <>
          <NavLink><li><Link to='/login'>Login</Link></li></NavLink>
        </>
    }
  </>
  return (
    <div className="navbar fixed z-10 max-w-screen-xl text-white bg-black bg-opacity-30 uppercase">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow glass rounded-box w-36 text-black">
            {navItem}
          </ul>
        </div>
        <div className="text-center">
          <h2 className="uppercase text-xl">Bistro Boss</h2>
          <p className="uppercase tracking-widest">restaurant</p>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;