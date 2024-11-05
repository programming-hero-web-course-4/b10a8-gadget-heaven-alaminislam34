import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { RxCrossCircled } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import { ImCross } from "react-icons/im";
import { FaSortAmountDown } from "react-icons/fa";
import success from "../assets/Group.png";
import { PiEmptyBold } from "react-icons/pi";

const Cart = () => {
  const { products, setProducts, total, setTotal } = useContext(ProductContext);
  const handleRemoveCartItem = (id, price) => {
    const remainingTotal = total - price;
    setTotal(remainingTotal);
    const remainingProducts = products.filter((p) => p.product_id !== id);
    setProducts(remainingProducts);
    toast(
      <div className="flex gap-2 items-center">
        <ImCross className="text-red-500" />
        <p>Item Removed</p>
      </div>
    );
  };
  const handlePurchase = () => {
    if (products.length === 0) {
      toast(
        <div className="flex gap-2">
          <PiEmptyBold className="text-2xl font-bold text-red-500" />
          <p className="font-bold">Your cart is empty.</p>
        </div>
      );
    } else {
      document.getElementById("my_modal_5").showModal();
      setProducts([]);
    }
  };
  const handleSortByPrice = () => {
    const sortPrice = [...products].sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );
    setProducts(sortPrice);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Cart</h2>
        <div className="flex flex-col md:flex-row gap-2 items-center">
          <h4 className="text-base md:text-lg font-bold">
            Total Cost: {total} BDT
          </h4>
          <div className="flex flex-row gap-2 items-center justify-center">
            <button
              onClick={handleSortByPrice}
              className="py-1.5 px-4 font-semibold rounded-full border border-[#9538e2] text-[#9538e2] flex flex-row gap-2 items-center justify-center"
            >
              <span>Sort by Price</span>
              <FaSortAmountDown />
            </button>
            <button
              onClick={handlePurchase}
              className="py-1.5 px-4 ml-2 font-semibold rounded-full border text-white border-[#9538e2] bg-gradient-to-tr from-yellow-500 via-[#9538e2] to-[#9538e2] hover:bg-gradient-to-bl hover:from-yellow-500 hover:via-[#9538e2] hover:to-[#9538e2]"
            >
              Purchase
            </button>
          </div>
        </div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box flex flex-col justify-center items-center space-y-2">
            <img src={success} alt="" />
            <h3 className="font-bold text-xl">Payment Successfully</h3>
            <div className="divider"></div>
            <p className="font-medium text-black/70">Thanks for purchasing</p>
            <p className="font-medium text-black/70">Total: {total} BDT</p>
            <div className="modal-action">
              <form method="dialog">
                <button onClick={() => setTotal(0)} className="btn">
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div className="divider"></div>
      <div className=" flex flex-col gap-4 my-4 md:my-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="grid md:grid-cols-5 grid-cols-3 items-center gap-4 p-2 md:p-4 rounded-xl bg-white shadow-2xl relative"
          >
            <img src={product.product_image} alt="" />
            <div className="md:col-span-4 col-span-2 md:space-y-4">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                {product.product_title}
              </h2>
              <p className="text-black/70 text-sm md:text-base">
                {product.description}
              </p>
              <p className="text-sm md:text-base font-medium">
                Price: $ {product.price}
              </p>
            </div>
            <button
              onClick={() =>
                handleRemoveCartItem(product.product_id, product.price)
              }
              className="absolute top-0 right-0 md:text-4xl text-3xl text-red-600"
            >
              <RxCrossCircled />
            </button>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Cart;
