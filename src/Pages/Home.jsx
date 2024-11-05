import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "./Banner";
import { ProductContext } from "./ProductContext";

const Home = () => {
  const { handleDetailsId } = useContext(ProductContext);
  const product = useLoaderData();
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();
  const handleProductsDetails = (id) => {
    navigate(`/viewDetails/${id}`);
    handleDetailsId(id);
  };
  useEffect(() => {
    setProduct(product);
  }, [product]);
  const handleDisplayCategoryProducts = (cate) => {
    if (cate == "All Products") {
      setProduct(product);
    } else if (product.filter((p) => p.category === cate)) {
      const showItem = product.filter((p) => p.category === cate);
      setProduct(showItem);
    }
    return;
  };

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((data) => data.json())
      .then((category) => setCategory(category));
  }, []);
  return (
    <div>
      <Banner />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4">
        Explore Cutting-Edge Gadgets
      </h1>
      <section className="grid lg:grid-cols-5 md:grid-cols-7 grid-cols-1 gap-6 justify-center ">
        <aside className=" md:col-span-2 lg:col-span-1">
          <ul className="grid grid-cols-2 md:grid-cols-1 items-center justify-center gap-2 md:gap-4 p-4 rounded-lg bg-base-200">
            {category.map((cate) => (
              <li
                onClick={() => handleDisplayCategoryProducts(cate.category)}
                key={cate.id}
                className="py-1 px-2.5 md:px-4 hover:bg-[#9538E2] rounded-full text-[#9538E2] hover:text-white font-semibold text-center border border-[#9538E2] w-full h-full"
              >
                {cate.category}
              </li>
            ))}
          </ul>
        </aside>
        <div className=" md:col-span-5 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-lg bg-base-200">
          {products.length > 0 ? (
            products.map((p, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl p-2 md:p-4"
              >
                <figure>
                  <img src={p.product_image} alt="gadget" />
                </figure>
                <div className="p-4 space-y-2">
                  <h2 className="card-title">{p.product_title}</h2>
                  <p>Price: {p.price} BDT</p>
                  <button
                    onClick={() => handleProductsDetails(p.product_id)}
                    className="py-2 px-4 rounded-full border duration-300 border-[#9538e2] text-[#9538e2] hover:bg-[#9538e2] hover:text-white"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center col-span-4 h-full">
              <h1 className="text-2xl  md:text-3xl lg:text-5xl font-bold text-red-700">
                Not Available Products
              </h1>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
