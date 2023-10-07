import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

const Header = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/y4LdQGb/shardayyy-photography-f-Jzm-Pe-a0e-U-unsplash.jpg"
            className="w-full h-[800px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>

          <div className="absolute text-white top-1/3 space-y-6 left-1/4 text-center">
            <h1 data-aos="fade-up" className="text-7xl font-bold ">
              {" "}
              <span className="text-yellow-500">We Create</span> <br />
              You Celebrate
            </h1>
            <p className="text-3xl font-medium ">
              Planning a Wedding proposal or an even in this busy city is not
              easy <br />
              and it takes skill and time to make it all look easy-going
            </p>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/xgqqq81/hannah-busing-6-NUUZZ16h-Jk-unsplash.jpg"
            className="w-full h-[800px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute text-white top-1/3 space-y-6 left-1/4 text-center">
            <h1 className="text-7xl font-bold ">
              {" "}
              <span className="text-yellow-500">From set up </span> <br />
              To clean up
            </h1>
            <p className="text-3xl font-medium ">
              Planning a Wedding proposal or an even in this busy city is not
              easy <br />
              and it takes skill and time to make it all look easy-going
            </p>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/6rtC4Yk/guanfranco-g-82p7-Jgz-KOpo-unsplash.jpg"
            className="w-full h-[800px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute text-white top-1/3 space-y-6 left-1/4 text-center">
            <h1 className="text-7xl font-bold ">
              {" "}
              <span className="text-yellow-500">Your Desire </span> <br />
              Our Responsibility
            </h1>
            <p className="text-3xl font-medium ">
              Planning a Wedding proposal or an even in this busy city is not
              easy <br />
              and it takes skill and time to make it all look easy-going
            </p>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/Zx3mVmY/jazmin-quaynor-18m-UXUS8ks-I-unsplash.jpg"
            className="w-full h-[800px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute text-white top-1/3 space-y-6 left-1/4 text-center">
            <h1 className="text-7xl font-bold ">
              {" "}
              <span className="text-yellow-500">HAPPY </span> <br />
              WEDDING
            </h1>
            <p className="text-3xl font-medium ">
              Planning a Wedding proposal or an even in this busy city is not
              easy <br />
              and it takes skill and time to make it all look easy-going
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
