import { Link } from "react-router-dom";


const ErrorComp = () => {
    return (
      <div className=" h-screen p-14  lg:flex justify-around  items-center">
        <div className="space-y-6 mb-10">
          <h1 className="text-5xl font-extrabold text-red-700">Something went Wrong...</h1>
          <p className="text-2xl font-bold">
            Page you are trying to open does not exist. You may have mistyped{" "}
            <br />
            the address, or the page has been moved to another URL. If you think{" "}
            <br />
            this is an error contact support.
          </p>
          <button className="btn btn-outline btn-primary">
            <Link to="/">Get back to home page</Link>
          </button>
        </div>
        <div>
          <img className="w-[500px] " src="./public/error1.jpg" alt="" />
        </div>
      </div>
    );
};

export default ErrorComp;