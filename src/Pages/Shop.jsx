import { GrLocation } from "react-icons/gr";
import { BiMessageEdit } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import Footer from "../Components/Footer";

const Shop = () => {
  
  return (
    <div>
      <div className="md:flex justify-around py-10 px-6 space-y-6 text-xl bg-teal-500  ">
        <div>
          <h3 className="font-bold">Visit Us:</h3>
          <p className="text-lg">819-821 High Rd, London N17 8ER</p>
        </div>
        <div className="font-bold">Social Managment</div>
        <div>
          <h3 className="font-bold">Phone Us:</h3>
          <p className="text-lg">020 3805 8483</p>
        </div>
      </div>

      <div className="md:flex justify-evenly items-center space-y-10 p-6  ">
        <div className="space-y-6 ">
          <h2 className="text-3xl font-bold">Contact our team</h2>
          <p className="text-2xl">
            If you have any queries about our Banqueting Suites <br />
            or would like to book an appointment to discuss your <br />
            requirements and take a tour of our premises, please <br /> don’t
            hesitate to get in touch.
          </p>
          <div className="text-xl flex gap-4 items-center">
            {" "}
            <GrLocation></GrLocation>
            <span>819-821 High Rd, London, N17 8ER</span>
          </div>
          <div className="text-xl flex gap-4 items-center">
            <BiMessageEdit></BiMessageEdit>
            <span>info@laroyale.co.uk</span>
          </div>
          <div className="text-xl flex gap-4 items-center">
            {" "}
            <FiPhoneCall></FiPhoneCall>
            <span>020 3805 8483</span>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/8KGbRGc/location.jpg" alt="" />
        </div>
          </div>
          <Footer></Footer>
    </div>
  );
};

export default Shop;
