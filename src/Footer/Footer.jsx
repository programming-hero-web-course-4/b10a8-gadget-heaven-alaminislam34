const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-4 py-8 mt-6">
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Gadget Heaven
        </h2>
        <p className="text-sm md:text-base text-black/70">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="border-b border-black/40 w-full"></div>
      <div className="grid grid-cols-3 gap-4 items-start w-11/12  md:w-8/12 lg:w-6/12 mx-auto">
        <nav className="flex flex-col gap-2 text-black/70">
          <p className="font-bold text-base md:text-lg text-black">Services</p>
          <a className="link link-hover text-xs md:text-sm">Product Support</a>
          <a className="link link-hover text-xs md:text-sm">Order Tricking</a>
          <a className="link link-hover text-xs md:text-sm">
            Shipping & Delivery
          </a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col gap-2 text-black/70">
          <p className="font-bold text-base md:text-lg text-black">Company</p>
          <a className="link link-hover text-xs md:text-sm">About us</a>
          <a className="link link-hover text-xs md:text-sm">Career</a>
          <a className="link link-hover text-xs md:text-sm">Contact</a>
        </nav>
        <nav className="flex flex-col gap-2 text-black/70">
          <p className="font-bold text-base md:text-lg text-black">Legal</p>
          <a className="link link-hover text-xs md:text-sm">Term of Service</a>
          <a className="link link-hover text-xs md:text-sm">Privacy Policy</a>
          <a className="link link-hover text-xs md:text-sm">Cookie Policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
