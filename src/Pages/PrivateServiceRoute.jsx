
import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";
import CustomContext from "../Components/CustomContext";

const PrivateServiceRoute = ({ children }) => {
  const { user, loading } = CustomContext();

  if(loading){
    return <span className="loading loading-spinner text-success"></span>
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/signin"></Navigate>
    </div>
  );
};

PrivateServiceRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateServiceRoute;
