/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImCross } from "react-icons/im";
import { AiFillLike } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";

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
          <ImCross className="text-red-500" />
          Already added..
        </div>
      );
    } else {
      setLiked((prevProduct) => [...prevProduct, product]);
      toast(
        <p className="font-semibold flex items-center gap-2">
          <AiFillLike className="text-[#9538E2]" />
          Like this product
        </p>
      );
    }

    return;
  };
  const handleProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
    setTotal((p) => p + product.price);
    toast(
      <p className="font-semibold flex items-center gap-2">
        <FaCheckCircle className="text-[#9538E2]" />
        Add to Cart
      </p>
    );
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
