const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-base-200 text-base-content rounded md:p-8 p-4 mt-6">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Gadget Heaven
          </h2>
          <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="border-b border-black/40 w-full"></div>
        <div className="flex justify-around gap-4 items-start w-11/12  md:w-8/12 lg:w-6/12 mx-auto">
          <nav className="flex flex-col gap-2 text-black/70">
            <p className="font-bold text-lg text-black">Services</p>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tricking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav className="flex flex-col gap-2 text-black/70">
            <p className="font-bold text-lg text-black">Company</p>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Career</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav className="flex flex-col gap-2 text-black/70">
            <p className="font-bold text-lg text-black">Legal</p>
            <a className="link link-hover">Term of Service</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
