import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const product = useLoaderData();
  const [products, setProduct] = useState([]);
  useEffect(() => {
    setProduct(product);
  }, [product]);
  const handlePhoneCategory = () => {
    const phones = product.filter((p) => p.category === "Phone");
    setProduct(phones);
  };
  const handleTabletCategory = () => {
    const phones = product.filter((p) => p.category === "Tablet");
    setProduct(phones);
  };
  const handleLaptopCategory = () => {
    const phones = product.filter((p) => p.category === "Laptop");
    setProduct(phones);
  };
  const handleEarbudsCategory = () => {
    const phones = product.filter((p) => p.category === "Earbuds");
    setProduct(phones);
  };
  const handleDesktopCategory = () => {
    const phones = product.filter((p) => p.category === "desktop");
    setProduct(phones);
  };
  const allProducts = () => {
    setProduct(product);
  };
  return (
    <div>
      <h1>{products.length}</h1>
      <section className="grid md:grid-cols-5 grid-cols-1 gap-8 justify-center ">
        <aside className="rounded-lg bg-base-300 h-[65vh] flex justify-center items-center">
          <ul className="flex flex-col gap-4 justify-center items-center w-full h-full ">
            <li>
              <button
                onClick={allProducts}
                className="py-2 px-4 md:py-3 md:px-6 transition-colors text-sm md:text-lg duration-300 rounded-full hover:bg-[#9538E2] font-semibold hover:text-white"
              >
                All Products
              </button>
            </li>
            <li>
              <button
                onClick={handlePhoneCategory}
                className="py-2 px-4 md:py-3 md:px-6 transition-colors text-sm md:text-lg duration-300 rounded-full hover:bg-[#9538E2] font-semibold hover:text-white"
              >
                Phones
              </button>
            </li>
            <li>
              <button
                onClick={handleTabletCategory}
                className="py-2 px-4 md:py-3 md:px-6 transition-colors text-sm md:text-lg duration-300 rounded-full hover:bg-[#9538E2] font-semibold hover:text-white"
              >
                Tablets
              </button>
            </li>
            <li>
              <button
                onClick={handleLaptopCategory}
                className="py-2 px-4 md:py-3 md:px-6 transition-colors text-sm md:text-lg duration-300 rounded-full hover:bg-[#9538E2] font-semibold hover:text-white"
              >
                Laptops
              </button>
            </li>
            <li>
              <button
                onClick={handleEarbudsCategory}
                className="py-2 px-4 md:py-3 md:px-6 transition-colors text-sm md:text-lg duration-300 rounded-full hover:bg-[#9538E2] font-semibold hover:text-white"
              >
                Earbuds
              </button>
            </li>
            <li>
              <button
                onClick={handleDesktopCategory}
                className="py-2 px-4 md:py-3 md:px-6 transition-colors text-sm md:text-lg duration-300 rounded-full hover:bg-[#9538E2] font-semibold hover:text-white"
              >
                Desktop
              </button>
            </li>
          </ul>
        </aside>
        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 rounded-lg bg-base-200">
          {products.length > 0 ? (
            products.map((p, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={p.product_image} alt="gadget" />
                </figure>
                <div className="p-4 space-y-4">
                  <h2 className="card-title">{p.product_title}</h2>
                  <p>Price: {p.price} $</p>
                  <div className="card-actions justify-start">
                    <button className="btn btn-primary">View Details</button>
                  </div>
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
