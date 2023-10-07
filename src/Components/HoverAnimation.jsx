import { GiPartyFlags } from "react-icons/gi";

const HoverAnimation = () => {
  return (
    <div className="pt-14 space-y-10 bg-neutral-900">
      <div className="text-center space-y-10 text-white ">
        <h2 className="text-5xl font-extrabold ">
          It is simple . You have an event to plan
          <br /> and we have{" "}
          <span className="text-yellow-600">the Solution</span>
        </h2>
        <p className="text-lg font-bold">Here is how we can help you</p>
      </div>
      <div className="flex min-h-screen items-center justify-center bg-neutral-900 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <div className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                src="https://i.ibb.co/0hk0Gp1/al-elmes-ULHx-Wq8reao-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0  flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
              <div>
                <GiPartyFlags className="text-7xl text-yellow-200"></GiPartyFlags>
              </div>
              <h1 className="text-3xl font-bold text-[#D3959B]">Celebration</h1>
              <p className="text-lg italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#c471ed] mt-14">
                From a sweet 16 pary to a 50th birthday celebration…You can
                enjoy and eat food. and can spend time with your loved ones.many
                things can be considered special occasions.
              </p>
            </div>
          </div>
          <div className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                src="https://i.ibb.co/z2dy9WH/ray-hennessy-gd-Tx-VSAE5sk-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0  flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
              <div>
                <GiPartyFlags className="text-7xl text-yellow-200"></GiPartyFlags>
              </div>
              <h1 className="text-3xl font-bold text-[#D3959B]">Occasion</h1>
              <p className="text-lg italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#c471ed] mt-14">
                Birthdays, Anniversaries, these include work anniversaries. Also
                a death with a funeral can be a special occasion weddings.Day
                Events. We have a variety
              </p>
            </div>
          </div>
          <div className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                src="https://i.ibb.co/rFxFhcV/sam-mathews-w-Zj-Jx-Ox8-FPI-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0  flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
              <div>
                <GiPartyFlags className="text-7xl text-yellow-200"></GiPartyFlags>
              </div>
              <h1 className="text-3xl font-bold text-[#D3959B]">Party</h1>
              <p className="text-lg italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#c471ed] mt-14">
                Make your parties feel more alive by having the right number of
                guests. Research suggests the best group size is from five to
                nine.Party with friends and family
              </p>
            </div>
          </div>
          <div className="group relative item-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-md">
            <div className="h-96 w-72">
              <img
                className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500"
                src="https://i.ibb.co/2K0NJnR/nathan-dumlao-5-BB-at-DT4o-A-unsplash.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0  flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all">
              <div>
                <GiPartyFlags className="text-7xl text-yellow-200"></GiPartyFlags>
              </div>
              <h1 className="text-3xl font-bold text-[#D3959B]">Wedding</h1>
              <p className="text-lg italic text-whitemb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#c471ed] mt-14">
                he system is designed to facilitate the arrangement and
                organization of weddings. It provides a centralized platform to
                manage various aspects of wedding planning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverAnimation;
