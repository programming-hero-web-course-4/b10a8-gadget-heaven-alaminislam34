/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../Pages/ProductContext";
import "./Navbar.css";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const { products, liked, total, id, mainBalance } =
    useContext(ProductContext);
  const [active, setActive] = useState(false);
  const [isTrue, setTrue] = useState(false);
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);
  const [isHome, setHome] = useState(false);

  const navigate = useNavigate();
  const handleUsers = () => {
    navigate("/users");
  };
  const handleDashboard = () => {
    navigate("/dashboard/cart");
  };
  const handleWishlist = () => {
    navigate("/dashboard/wishlist");
  };
  useEffect(() => {
    switch (location.pathname) {
      case "/statistics":
        document.title = "Statistics || Gadget Heaven";
        setHome(false);
        break;
      case "/dashboard":
        document.title = "Dashboard || Gadget Heaven";
        setHome(false);
        break;
      case "/unknown":
        document.title = "Unknown || Gadget Heaven";
        setHome(false);
        break;
      case `/viewDetails/${id}`:
        document.title = "Gadget Heaven";
        setHome(false);
        break;
      case "/dashboard/cart":
        document.title = "Dashboard || Gadget Heaven";
        setHome(false);
        break;
      case "/dashboard/wish":
        document.title = "Dashboard || Gadget Heaven";
        setHome(false);
        break;
      case "/":
        document.title = "Gadget Heaven";
        setHome(true);
        break;
      default:
        document.title = "Gadget Heaven";
    }
  }, [location.pathname]);

  const handleSticky = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    return () => window.removeEventListener("scroll", handleSticky);
  }, []);
  return (
    <div
      className={` ${
        isHome ? "mt-6" : "mt-0"
      } left-0 top-0 mx-auto duration-700 w-full ${
        isSticky ? "sticky bg-white/30 z-50 backdrop-blur-2xl" : ""
      }`}
    >
      <div
        className={`navbar  max-w-6xl mx-auto p-3 md:p-4 ${
          isHome ? "bg-[#9538e2] text-white " : ""
        } ${isSticky ? "rounded-none" : "rounded-t-xl"} `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              onClick={() => setActive(!active)}
              tabIndex={0}
              role="button"
              className="p-2 rounded-full md:hidden"
            >
              {active ? <RxCross2 /> : <RiMenu2Fill />}
            </div>
            <ul
              className={`absolute bg-base-300 rounded-xl z-[1] mt-3 w-32 flex flex-col gap-2 justify-center items-center p-4 drop-shadow-2xl duration-1000 ${
                active ? "top-6" : "-top-52"
              }`}
            >
              <li className="text-black hover:text-[#9538e2] text-sm md:text-base lg:text-lg font-medium">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-black hover:text-[#9538e2] text-sm md:text-base lg:text-lg font-medium">
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li className="text-black hover:text-[#9538e2] text-sm md:text-base lg:text-lg font-medium">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="md:text-xl lg:text-2xl font-bold">
            Gadget Heaven
          </NavLink>
        </div>
        <div className=" navbar-center hidden md:flex">
          <ul
            className={`${
              isHome ? "" : "Navbar_item"
            } flex flex-row gap-4 px-1`}
          >
            <li
              className={`font-medium text-sm lg:text-base ${
                isHome ? "underlined_text" : ""
              }`}
            >
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={`font-medium text-sm lg:text-base `}>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li className={`font-medium text-sm lg:text-base `}>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex flex-row gap-2 md:gap-4 items-center">
          <div
            className="bg-base-300 tooltip tooltip-left hover:bg-[#9538e2] hover:text-white md:h-8 md:w-8 w-[26px] h-[26px] rounded-full flex justify-center items-center text-black md:text-xl text-sm font-bold cursor-pointer"
            data-tip={mainBalance}
          >
            <p className="">৳</p>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              onClick={() => setTrue(!isTrue)}
              className=""
            >
              <button className="relative p-1 md:p-2 border hover:border-white bg-gray-200 duration-300 rounded-full hover:text-white text-black hover:bg-[#9538e2]">
                <GiShoppingCart className="md:text-xl text-lg" />
              </button>
              {products.length !== 0 ? (
                <span className="h-5 w-5 rounded-full bg-[#9538e2] text-white font-bold flex justify-center items-center absolute -top-2 -right-2">
                  {products.length > 0 ? products.length : 0}
                </span>
              ) : (
                ""
              )}
            </div>
            {isTrue ? (
              <div
                tabIndex={0}
                className="dropdown-content bg-white shadow-xl p-4 rounded-lg space-y-4 w-40 z-30"
              >
                <h1 className=" text-sm md:text-base lg:text-lg text-center font-bold text-black">
                  {products.length} Items in cart
                </h1>
                <div className="border-b w-full my-3"></div>
                <p className="font-semibold text-xs md:text-sm lg:text-base text-center text-[#9538E2]">
                  Subtotal: {total} BDT
                </p>
                <div className="flex justify-center items-center">
                  <button
                    onClick={handleDashboard}
                    className="py-1.5 md:py-2 px-4 md:px-6 text-xs md:text-sm lg:text-base rounded-full bg-[#9538E2] text-white font-semibold"
                  >
                    Dashboard
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" onClick={() => setTrue(!isTrue)}>
              <button className="relative p-1 md:p-2 hover:text-white border hover:border-white text-black hover:bg-[#9538e2] duration-300 bg-gray-200 rounded-full flex justify-center items-center">
                <FiHeart className="md:text-xl text-lg" />
              </button>
              {liked.length === 0 ? (
                ""
              ) : (
                <span className="h-5 w-5 rounded-full bg-[#9538e2] text-white font-bold flex justify-center items-center absolute -top-2 -right-2">
                  {liked ? liked.length : 0}
                </span>
              )}
            </div>
            {isTrue ? (
              <div
                tabIndex={0}
                className="dropdown-content bg-white shadow-xl p-4 rounded-lg w-40 z-30"
              >
                <h2 className="text-sm md:text-base lg:text-lg text-center font-bold text-black">
                  {liked.length} Items in WishList
                </h2>
                <div className="border-b w-full my-3"></div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={handleWishlist}
                    className="py-1.5 md:py-2 px-4 md:px-6 text-xs md:text-sm lg:text-base rounded-full bg-[#9538E2] text-white font-semibold"
                  >
                    WishList
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div tabIndex={0} role="button" onClick={() => setTrue(!isTrue)}>
            <button
              onClick={handleUsers}
              className="relative p-1 md:p-2 hover:text-white border hover:border-white text-black hover:bg-[#9538e2] duration-300 bg-gray-200 rounded-full"
            >
              <FaRegCircleUser className="md:text-xl text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
