import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";


export const authContext = createContext(null);

const AuthElement = ({ children }) => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch("./event.json")
            .then(res => res.json())
            .then(data => setServiceData(data));
    }, [])

    // console.log(serviceData);

    const info = {
        serviceData,
    }
  return (
    <div>
      <authContext.Provider value={info}>{children}</authContext.Provider>
    </div>
  );
};

AuthElement.propTypes = {
  children: PropTypes.node,
};

export default AuthElement;
