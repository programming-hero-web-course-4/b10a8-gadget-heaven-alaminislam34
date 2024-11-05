/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../Pages/ProductContext";
import "./Navbar.css";

const Navbar = () => {
  const { products, liked, total, id } = useContext(ProductContext);
  const [active, setActive] = useState(false);
  const [isTrue, setTrue] = useState(false);
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);
  const [isHome, setHome] = useState(false);

  const navigate = useNavigate();
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
      className={`mt-6 left-0 top-0 mx-auto duration-500  w-full ${
        isSticky ? "sticky bg-white/30 z-50 backdrop-blur-2xl" : ""
      }`}
    >
      <div
        className={`navbar  max-w-6xl mx-auto ${
          isHome ? "bg-[#9538e2] text-white " : ""
        } ${isSticky ? "rounded-none" : "rounded-t-xl"} `}
      >
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
            <ul
              className={`absolute bg-base-100 rounded-box z-[1] mt-3 w-40 flex flex-col gap-2 justify-center items-center p-2 shadow-2xl duration-1000 ${
                active ? "top-6" : "-top-52"
              }`}
            >
              <li className="text-black hover:text-[#9538e2] font-semibold">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-black hover:text-[#9538e2] font-semibold">
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
              <li className="text-black hover:text-[#9538e2] font-semibold">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="text-black hover:text-[#9538e2] font-semibold">
                <NavLink to="/unknown">Unknown</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="md:text-xl font-bold ml-2">
            Gadget Heaven
          </NavLink>
        </div>
        <div className=" navbar-center hidden lg:flex">
          <ul
            className={`${
              isHome ? "" : "Navbar_item"
            } flex flex-row gap-4 px-1`}
          >
            <li className={`font-semibold ${isHome ? "underlined_text" : ""}`}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={`font-semibold `}>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li className={`font-semibold `}>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li className={`font-semibold `}>
              <NavLink to="/unknown">Unknown</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex flex-row gap-2 md:gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              onClick={() => setTrue(!isTrue)}
              className=""
            >
              <button className="relative p-1.5 md:p-2 border hover:border-white bg-gray-200 duration-300 rounded-full hover:text-white text-black hover:bg-[#9538e2]">
                <GiShoppingCart className="md:text-2xl text-lg" />
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
                <h1 className="text-lg text-center font-bold text-black">
                  {products.length} Items in cart
                </h1>
                <div className="divider"></div>
                <p className="font-semibold text-[#9538E2]">
                  Subtotal: {total} BDT
                </p>
                <button
                  onClick={handleDashboard}
                  className="py-1 md:py-2 px-2 md:px-4 rounded-full bg-[#9538E2] text-white font-semibold"
                >
                  Dashboard
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="dropdown dropdown-end mr-4">
            <div tabIndex={0} role="button" onClick={() => setTrue(!isTrue)}>
              <button className="relative p-1.5 md:p-2 hover:text-white border hover:border-white text-black hover:bg-[#9538e2] duration-300 bg-gray-200 rounded-full">
                <FiHeart className="md:text-2xl text-lg" />
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
                className="dropdown-content bg-white shadow-xl p-4 rounded-lg w-40"
              >
                <h1 className="text-base md:text-lg text-left font-bold text-black">
                  {liked.length} Items in WishList
                </h1>
                <div className="divider"></div>
                <button
                  onClick={handleWishlist}
                  className="py-1 md:py-2 px-3 md:px-6 rounded-full bg-[#9538E2] text-white font-semibold"
                >
                  WishList
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
