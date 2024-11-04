import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const Home = () => {
  const product = useLoaderData();
  const [products, setProduct] = useState([]);
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
      <h1>{products.length}</h1>
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
              <div key={index} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={p.product_image} alt="gadget" />
                </figure>
                <div className="p-4 space-y-4">
                  <h2 className="card-title">{p.product_title}</h2>
                  <p>Price: {p.price} $</p>
                  <div className="card-actions justify-start">
                    <NavLink
                      to={`/viewDetails/${p.product_id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </NavLink>
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
