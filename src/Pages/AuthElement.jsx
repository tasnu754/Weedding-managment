import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.config";


export const authContext = createContext(null);

const AuthElement = ({ children }) => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch("./event.json")
            .then(res => res.json())
            .then(data => setServiceData(data));
    }, [])

    const register = (email , password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const info = {
      serviceData,
      register,
    };
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
