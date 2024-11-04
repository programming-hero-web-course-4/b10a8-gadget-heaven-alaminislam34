/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState([]);
  const handleLiked = (product) => {
    const available = liked.find((p) => p.product_id == product.product_id);
    if (available) {
      toast("Already exist..");
    } else {
      setLiked((prevProduct) => [...prevProduct, product]);
    }

    return;
  };
  const handleProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };
  return (
    <ProductContext.Provider
      value={{ products, handleProduct, handleLiked, liked }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
