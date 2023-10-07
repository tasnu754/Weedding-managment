import { NavLink } from "react-router-dom";

const Navbar = () => {
    const item = (
      <>
        <li className="">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "btn btn-accent" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "btn btn-accent" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "btn btn-accent" : ""
            }
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "btn btn-accent" : ""
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feedback"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "btn btn-accent" : ""
            }
          >
            Feedback
          </NavLink>
        </li>
      </>
    );
    return (
      <div className="">
        <div className=" navbar navBg px-10">
          <div className="navbar-start">
            <div className="dropdown text-white">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className=" menu-sm dropdown-content mt-3 gap-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg text-black font-semibold"
              >
                {item}
              </ul>
            </div>
            <img
              className="h-[40px] w-[40px] rounded-full"
              src="https://i.ibb.co/cvK1W1T/Weedding.jpg"
              alt=""
            />
            <a className="text-xl font-bold btn btn-ghost normal-case text-xl text-white">
              Wedding Managment
            </a>
          </div>
          <div className="navbar-center hidden lg:flex ">
            <ul className="text-lg flex items-center   menu-horizontal px-1 gap-4 text-white">
              {item}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btnSignin border-none">SignIn</a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
