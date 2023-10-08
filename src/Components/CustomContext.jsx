import { useContext } from "react";
import { authContext } from "../Pages/AuthElement";

const CustomContext = () => {
    const all = useContext(authContext);
    return all ;
};

export default CustomContext;