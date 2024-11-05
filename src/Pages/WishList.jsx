import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { RxCrossCircled } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import { ImCross } from "react-icons/im";

const WishList = () => {
  const { liked, setLiked, handleProduct } = useContext(ProductContext);

  const handleRemoveCartItem = (id) => {
    const remainingProducts = liked.filter((p) => p.product_id !== id);
    setLiked(remainingProducts);
    toast(
      <div className="flex gap-2 items-center">
        <ImCross className="text-red-500" />
        <p>Removed item</p>
      </div>
    );
  };
  return (
    <div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6">
        Wishlist
      </h2>
      <div className=" flex flex-col gap-4 my-4 md:my-6">
        {liked.map((product, index) => (
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
              <button
                onClick={() => {
                  handleProduct(product),
                    handleRemoveCartItem(product.product_id);
                }}
                className="py-1 px-3 rounded-full border border-[#9538E2] hover:bg-[#9538E2] text-[#9538E2] font-semibold hover:text-white"
              >
                Add to Card
              </button>
            </div>
            <button
              onClick={() => handleRemoveCartItem(product.product_id)}
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

export default WishList;
