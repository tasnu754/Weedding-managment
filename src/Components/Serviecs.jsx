import { useContext } from "react";
import { authContext } from "../Pages/AuthElement";
import ServiceCard from "./ServiceCard";

const Serviecs = () => {
    const { serviceData } = useContext(authContext);
    // console.log(serviceData);
    return (
        <div className="p-4 md:p-14 ">
            <h1 className="text-5xl font-bold text-center mb-10 text-sky-700">Our Services & Features Below</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                 {
                serviceData.map((data ,idx) => <ServiceCard key={idx} data={data}></ServiceCard>)
                 }
           </div>

        </div>
    );
};

export default Serviecs;