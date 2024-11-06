import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <section className="relative mb-[210px] md:mb-[240px] lg:mb-[250px] flex flex-col justify-center items-center">
      <div className="bg-[#9538E2] rounded-b-xl flex justify-center lg:pt-12 md:pt-8 pt-6 lg:h-[450px] h-[400px]">
        <div className="text-center space-y-4 lg:space-y-4 md:w-11/12 lg:w-10/12 mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-white px-1">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-white/70 text-sm md:text-base md:w-8/12 mx-auto px-2">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="py-1.5 px-4 md:py-2 md:px-6 rounded-full font-medium border-[#9538e2] hover:border-white  hover:text-white border duration-500 bg-white hover:bg-[#732eac] text-[#9538e2] text-sm md:text-base lg:text-lg">
            Shop now
          </button>
        </div>
      </div>
      <div className="p-4 rounded-2xl md:h-[350px] h-[300px] bg-white/20 border backdrop-blur-xl lg:w-7/12 md:w-8/12 w-10/12 mx-auto absolute -bottom-48 sm:-bottom-36 md:-bottom-56">
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
