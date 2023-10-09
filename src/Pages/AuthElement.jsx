import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase.config";

// https://i.ibb.co/K9W89d5/reinhart-julian-Wx-M465o-M4j4-unsplash-1.jpg

export const authContext = createContext(null);

const AuthElement = ({ children }) => {
    const [serviceData, setServiceData] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [detailsClicked, setDetailsClicked] = useState(false);

    const GoogleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
       return signInWithPopup(auth, GoogleProvider);
    }

    useEffect(() => {
        fetch("./event.json")
            .then(res => res.json())
            .then(data => setServiceData(data));
    }, [])

    const register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const update = (name, img) => {
          setLoading(true);
      return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img,
        });
    }

    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
           setUser(currentUser);
           setLoading(false);
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
      update,
      loading,
      setDetailsClicked,
      detailsClicked,
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
