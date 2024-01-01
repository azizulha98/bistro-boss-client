import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if (loading) {
    return <RingLoader color="#36d7b7" />
  }
  if (user) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;