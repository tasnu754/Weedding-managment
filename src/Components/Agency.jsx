import { HiOutlineHomeModern } from "react-icons/hi2";
import { BiMessageAltDetail } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { GiPartyPopper } from "react-icons/gi";

const Agency = () => {
  return (
    <div>
      <div className="py-14 space-y-16">
        <div className="space-y-10 md:px-10 ">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">
            {" "}
            <span className="text-yellow-500">Hello!</span> We Are an Social
            Managment agency
          </h1>
          <p className="text-base lg:text-lg font-bold text-center w-[300px] md:w-[500px] lg:w-[800px] mx-auto text-gray-600">
            Social Management Plan means a plan, acceptable to the Association,
            developed by the Recipient for each Project site in accordance with
            the Social Impact Assessment, setting out guidelines to implement
            and monitor social mitigation and enhancement measures, and to
            address adverse social impacts of the Project.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 ml-12 lg:ml-48 gap-10">
          <div className="space-y-4">
            <HiOutlineHomeModern className="text-red-600 text-3xl"></HiOutlineHomeModern>
            <p className=" text-base font-bold ">
              Find the perfect <br /> vanue for free
            </p>
          </div>
          <div className="space-y-4">
            <BiMessageAltDetail className="text-red-600 text-3xl"></BiMessageAltDetail>
            <p className="text-base font-bold">
              Find the perfect <br />
              vanue for free
            </p>
          </div>
          <div className="space-y-4">
            <TfiWrite className="text-red-600 text-3xl"></TfiWrite>
            <p className="text-base font-bold">
              Find the perfect <br /> vanue for free
            </p>
          </div>
          <div className="space-y-4">
            <GiPartyPopper className="text-red-600 text-3xl"></GiPartyPopper>
            <p className="text-base font-bold">
              Find the perfect <br /> vanue for free
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agency;
