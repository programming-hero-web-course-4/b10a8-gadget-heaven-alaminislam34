import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <section className="">
      <div className="bg-[#9538E2] rounded-b-xl flex justify-center pt-12 lg:h-[450px] md:h-[400px] h-[75vh]">
        <div className="text-center space-y-4 lg:space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white ">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-white/70 text-sm md:text-base md:w-8/12 mx-auto px-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="py-2 px-4 rounded-full text-base md:text-lg font-semibold border-[#9538e2]  hover:text-white border duration-500 bg-white hover:bg-[#732eac] text-[#9538e2]">
            Shop now
          </button>
        </div>
      </div>
      <div className="p-6 rounded-xl md:h-[350px] h-[300px] bg-white/30 backdrop-blur-xl lg:w-7/12 md:w-8/12 w-10/12 mx-auto relative md:-top-28 -top-20">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={banner}
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
