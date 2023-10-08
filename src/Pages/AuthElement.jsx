import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../firebase.config";


export const authContext = createContext(null);

const AuthElement = ({ children }) => {
    const [serviceData, setServiceData] = useState([]);
    const [user, setUser] = useState(null);

    const GoogleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
       return signInWithPopup(auth, GoogleProvider);
    }

    useEffect(() => {
        fetch("./event.json")
            .then(res => res.json())
            .then(data => setServiceData(data));
    }, [])

    const register = (email , password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email , password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
                setUser(currentUser);
                console.log("auth",currentUser);
       });
        return () => {
            unSubscribe();
        }
    },[])

    const info = {
      user,
      serviceData,
      register,
      login,
      logOut,
      googleLogin,
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
