import { HiOutlineHomeModern } from "react-icons/hi2";
import { BiMessageAltDetail } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { GiPartyPopper } from "react-icons/gi";

const Agency = () => {
  return (
    <div>
      <div
        data-aos="zoom-in-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="py-14 space-y-16 bg-gradient-to-b from-[#6b6b83] to-[#3b8d99] text-white"
      >
        <div className="space-y-10 md:px-10 ">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            {" "}
            <span className="text-yellow-500">Hello!</span> We Are an Social
            Managment agency
          </h1>
          <p className="text-base lg:text-lg font-bold text-center w-[300px] md:w-[500px] lg:w-[800px] mx-auto text-gray-800">
            Social Management Plan means a plan, acceptable to the Association,
            developed by the Recipient for each Project site in accordance with
            the Social Impact Assessment, setting out guidelines to implement
            and monitor social mitigation and enhancement measures, and to
            address adverse social impacts of the Project.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-10">
          <div className="space-y-4">
            <div className="flex justify-center">
              <HiOutlineHomeModern className="text-red-600 text-3xl text-center"></HiOutlineHomeModern>
            </div>
            <p className=" text-base font-bold text-center">
              Find the perfect <br /> vanue for free
            </p>
          </div>
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <BiMessageAltDetail className="text-red-600 text-3xl"></BiMessageAltDetail>
            </div>
            <p className="text-base font-bold">
              Connect with the <br />
              best vendor
            </p>
          </div>
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <TfiWrite className="text-red-600 text-3xl"></TfiWrite>
            </div>
            <p className="text-base font-bold">
              Let us help you <br /> with the event
            </p>
          </div>
          <div className="space-y-4 text-center">
            <div className="flex justify-center">
              <GiPartyPopper className="text-red-600 text-3xl"></GiPartyPopper>
            </div>
            <p className="text-base font-bold">
              Enjoy the party with <br />
              your friends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;
