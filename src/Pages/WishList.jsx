import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { RxCrossCircled } from "react-icons/rx";
import { ToastContainer } from "react-toastify";

const WishList = () => {
  const { liked, setLiked, handleProduct, products } =
    useContext(ProductContext);

  const handleRemoveCartItem = (id, avail) => {
    const outStock = avail === false;
    if (outStock) {
      return;
    } else {
      const remainingProducts = liked.filter((p) => p.product_id !== id);
      const available = products.find((p) => p.product_id === id);
      if (available) {
        return;
      } else {
        setLiked(remainingProducts);
      }
    }
  };
  return (
    <div>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 md:my-6">
        Wishlist
      </h2>
      <div className="divider"></div>
      <div className=" flex flex-col gap-4 my-4 md:my-6">
        {liked.map((product, index) => (
          <div
            key={index}
            className="grid md:grid-cols-5 grid-cols-3 items-center gap-4 p-4 py-6 rounded-xl bg-white shadow-2xl relative"
          >
            <img src={product.product_image} alt="" />
            <div className="md:col-span-4 col-span-2 space-y-2 md:space-y-4">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">
                {product.product_title}
              </h2>
              <p className="text-black/70 text-xs md:text-sm lg:text-base">
                {product.description}
              </p>
              <p className="text-sm md:text-base font-medium">
                Price: $ {product.price}
              </p>
              <button
                onClick={() => {
                  handleProduct(product),
                    handleRemoveCartItem(
                      product.product_id,
                      product.availability
                    );
                }}
                className="py-1.5 md:py-2 px-4 md:px-6 rounded-full border border-[#9538E2] hover:bg-[#9538E2] text-[#9538E2] font-semibold hover:text-white text-xs md:text-sm lg:text-base"
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
