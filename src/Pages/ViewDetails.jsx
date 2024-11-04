import { useContext } from "react";
import { FiHeart } from "react-icons/fi";
import { useLoaderData, useParams } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { ToastContainer } from "react-toastify";

const ViewDetails = () => {
  const { handleProduct, handleLiked } = useContext(ProductContext);
  const gadget = useLoaderData();
  const { id } = useParams();
  const viewGadget = gadget.find(
    (product) => product.product_id === parseInt(id)
  );
  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    availability,
    rating,
  } = viewGadget;
  const Star = Math.floor(rating);
  const emptyStar = 5 - Star;

  return (
    <div>
      <div className="bg-[#9538e2] h-[250px] md:h-[300px] lg:h-[350px] text-center pt-6 px-4 space-y-3 mt-4">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
          Product Details
        </h1>
        <p className="text-white/70 md:w-8/12 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="rounded-2xl bg-white md:w-10/12 lg:w-8/12 w-11/12 mx-auto z-40 relative -top-36 shadow-xl">
        <div className="grid md:grid-cols-5 gap-4 grid-cols-1 p-6 rounded-lg ">
          <div className="md:col-span-2 flex justify-center items-center">
            <img className="object-cover" src={product_image} alt="" />
          </div>
          <div className="md:col-span-3 space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              {product_title}
            </h2>
            <p>Price: {price}k</p>
            <p
              className={`py-1 px-3 rounded-full ${
                availability ? "bg-green-200" : "bg-red-200"
              } inline-block`}
            >
              {availability ? "in stock" : "out stock"}
            </p>
            <p className="text-black/70">{description}</p>
            <p className="text-lg font-medium">Specification: </p>
            <ol className="list-decimal list-inside">
              {specification.map((spe, index) => (
                <li key={index} className="text-black/70">
                  {spe}
                </li>
              ))}
            </ol>
            <p className="font-medium">
              Rating {rating} <span className="text-yellow-500">★</span>
            </p>
            <p className="text-yellow-500">
              {"★".repeat(Math.floor(rating))}
              {"★".repeat(Math.floor(emptyStar))}
            </p>
            <div className="flex flex-row gap-2 justify-start items-center">
              <button
                onClick={() => handleProduct(viewGadget)}
                className="py-1 px-3 rounded-full border border-[#9538E2] hover:bg-[#9538E2] text-[#9538E2] font-semibold hover:text-white"
              >
                Add to Card
              </button>
              <button onClick={() => handleLiked(viewGadget)}>
                <FiHeart className="md:text-2xl text-lg" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewDetails;
