import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isTrue, setTrue] = useState(false);

  return (
    <div>
      <div className="navbar bg-base-100 my-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              onClick={() => setActive(!active)}
              tabIndex={0}
              role="button"
              className="p-2 rounded-full lg:hidden"
            >
              {active ? <RxCross2 /> : <RiMenu2Fill />}
            </div>
            {active ? (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Statistics</a>
                </li>
                <li>
                  <a>Dashboard</a>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
          <a className="md:text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/unknown">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex flex-row gap-2 md:gap-4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" onClick={() => setTrue(!isTrue)}>
              <button className="relative p-1.5 md:p-2 hover:bg-gray-300 duration-300 bg-gray-200 rounded-full">
                <GiShoppingCart className="md:text-2xl text-lg" />
              </button>
              <span className="h-5 w-5 rounded-full bg-gray-100 flex justify-center items-center absolute -top-2 -right-2">
                0
              </span>
            </div>
            {isTrue ? (
              <div
                tabIndex={0}
                className="dropdown-content bg-green-200 p-2 rounded-lg"
              >
                <h1 className="text-lg text-center">buy card</h1>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="dropdown dropdown-end mr-4">
            <div tabIndex={0} role="button" onClick={() => setTrue(!isTrue)}>
              <button className="relative p-1.5 md:p-2 hover:bg-gray-300 duration-300 bg-gray-200 rounded-full">
                <FiHeart className="md:text-2xl text-lg" />
              </button>
              <span className="h-5 w-5 rounded-full bg-gray-100 flex justify-center items-center absolute -top-2 -right-2">
                0
              </span>
            </div>
            {isTrue ? (
              <div
                tabIndex={0}
                className="dropdown-content bg-green-200 p-2 rounded-lg"
              >
                <h1 className="text-lg text-center">love item</h1>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* <div className="navbar-end">
          <button className=" p-2 hover:bg-gray-300 duration-300 bg-gray-200 rounded-full">
            <GiShoppingCart className="text-xl" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
