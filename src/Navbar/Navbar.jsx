import { useContext, useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../Pages/ProductContext";

const Navbar = () => {
  const { products, liked, total } = useContext(ProductContext);
  const [active, setActive] = useState(false);
  const [isTrue, setTrue] = useState(false);
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);
  const [isHome, setHome] = useState(false);

  const navigate = useNavigate();
  const handleDashboard = () => {
    navigate("/dashboard");
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
          isHome ? "bg-[#9538e2] text-white rounded-t-xl" : "bg-white"
        } `}
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
            {active ? (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
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
                  <NavLink to="/unknown">Unknown</NavLink>
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
              <button className="relative p-1.5 md:p-2 bg-gray-200 duration-300 rounded-full hover:text-white text-black hover:bg-[#9538e2]">
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
                className="dropdown-content bg-white shadow-xl p-4 rounded-lg space-y-4 w-40"
              >
                <h1 className="text-lg text-center font-bold text-black">
                  {products.length} Items in cart
                </h1>
                <div className="divider"></div>
                <p className="font-semibold text-[#9538E2]">
                  Subtotal: {total}k
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
              <button className="relative p-1.5 md:p-2 hover:text-white hover:border hover:border-white text-black hover:bg-[#9538e2] duration-300 bg-gray-200 rounded-full">
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
                className="dropdown-content bg-white shadow-xl p-4 rounded-lg w-[150px]"
              >
                <h1 className="text-lg text-center font-bold text-black">
                  {liked.length} liked items
                </h1>
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
