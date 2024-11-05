/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImCross } from "react-icons/im";
import { FaCheckCircle, FaHeart } from "react-icons/fa";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState([]);
  const [total, setTotal] = useState(0);
  const [id, setId] = useState();
  const handleDetailsId = (id) => {
    setId(id);
  };
  const handleLiked = (product) => {
    const available = liked.find((p) => p.product_id == product.product_id);
    if (available) {
      toast(
        <div className="flex justify-start gap-2 items-center font-semibold">
          <ImCross className="text-red-500 text-2xl" />
          Already added..
        </div>
      );
    } else {
      setLiked((prevProduct) => [...prevProduct, product]);
      toast(
        <p className="font-semibold flex items-center gap-2 ">
          <FaHeart className="text-[#9538E2] text-2xl" />
          Add to wishlist
        </p>
      );
    }

    return;
  };
  const handleProduct = (product) => {
    const available = products.find((p) => p.product_id === product.product_id);
    if (available) {
      toast(
        <div className="flex justify-start gap-2 items-center font-semibold ">
          <ImCross className="text-red-500 text-2xl" />
          Already added..
        </div>
      );
    } else {
      setProducts((prevProducts) => [...prevProducts, product]);
      setTotal((p) => p + product.price);
      toast(
        <p className="font-semibold flex items-center gap-2 ">
          <FaCheckCircle className="text-[#9538E2] text-2xl" />
          Add to Cart
        </p>
      );
    }
  };
  return (
    <ProductContext.Provider
      value={{
        products,
        handleProduct,
        handleLiked,
        liked,
        total,
        handleDetailsId,
        id,
        setProducts,
        setLiked,
        setTotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
