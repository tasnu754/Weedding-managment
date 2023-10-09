import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";
import CustomContext from "../Components/CustomContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = CustomContext();

  if(loading){
    return <span className="loading loading-spinner text-success"></span>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
