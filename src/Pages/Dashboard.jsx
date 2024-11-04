import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { RxCrossCircled } from "react-icons/rx";

const Dashboard = () => {
  const { products, setProducts } = useContext(ProductContext);
  const handleRemoveCartItem = (id) => {
    const remainingProducts = products.filter((p) => p.product_id !== id);
    setProducts(remainingProducts);
    console.log(remainingProducts);
  };
  return (
    <div>
      <div className="bg-[#9538e2] my-4 py-4 md:py-6 text-center pt-6 px-4 space-y-3 w-full">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
          Dashboard
        </h1>
        <p className="text-white md:w-8/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex gap-3 justify-center items-center">
          <button className="md:py-2 py-1 text-sm md:text-base md:px-6 px-4 duration-300 rounded-full border border-white text-white hover:text-[#9538e2] font-semibold hover:bg-white">
            Cart
          </button>
          <button className="md:py-2 py-1 text-sm md:text-base md:px-6 px-4 duration-300 rounded-full border border-white text-white hover:text-[#9538e2] font-semibold hover:bg-white">
            Wishlist
          </button>
        </div>
      </div>
      <div className="w-11/12 mx-auto flex flex-col gap-4 my-4 md:my-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="grid md:grid-cols-5 grid-cols-3 items-center gap-4 p-2 md:p-4 rounded-xl bg-white shadow-2xl relative"
          >
            <img src={product.product_image} alt="" />
            <div className="md:col-span-4 col-span-2 md:space-y-4">
              <h2 className="text-lg font-semibold">{product.product_title}</h2>
              <p className="text-black/70 text-sm md:text-base">
                {product.description}
              </p>
              <p className="text-sm md:text-base font-medium">
                Price: $ {product.price}
              </p>
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
    </div>
  );
};

export default Dashboard;
