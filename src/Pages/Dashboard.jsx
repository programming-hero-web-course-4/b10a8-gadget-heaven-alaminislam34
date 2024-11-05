import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const handleCart = () => {
    setActive("cart");
    navigate("/dashboard/cart");
  };
  const handleWishlist = () => {
    setActive("wish");
    navigate("/dashboard/wishlist");
  };
  return (
    <div>
      <div className="bg-[#9538e2] my-4 py-4 md:py-6 text-center pt-6 px-4 space-y-3 w-full">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
          Dashboard
        </h1>
        <p className="text-white md:w-8/12 mx-auto text-sm lg:text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div
          role="tablist"
          className="tabs tabs-boxed justify-center flex gap-4 bg-transparent"
        >
          <a
            onClick={handleCart}
            role="tab"
            className={`cursor-pointer border py-2 px-6 border-white font-semibold rounded-full ${
              active === "cart"
                ? "bg-white text-[#9538e2]"
                : "bg-transparent text-white"
            }`}
          >
            Cart
          </a>
          <a
            onClick={handleWishlist}
            role="tab"
            className={`cursor-pointer border py-2 px-6 border-white font-semibold rounded-full ${
              active === "wish"
                ? "bg-white text-[#9538e2]"
                : "bg-transparent text-white"
            }`}
          >
            WishList
          </a>
        </div>
        {/* <div role="tab" className=" tab tabs-boxed">
          <button
            role="tab"
            onClick={handleCart}
            className={`md:py-2 py-1 text-sm md:text-base md:px-6 px-4 duration-300 rounded-full border border-white text-white  font-semibold`}
          >
            Cart
          </button>
          <button
            role="tab"
            onClick={handleWishlist}
            className={`md:py-2 py-1 text-sm md:text-base md:px-6 px-4 duration-300 rounded-full border border-white text-white  font-semibold`}
          >
            Wishlist
          </button>
        </div> */}
      </div>
      <section className="w-11/12 mx-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default Dashboard;
