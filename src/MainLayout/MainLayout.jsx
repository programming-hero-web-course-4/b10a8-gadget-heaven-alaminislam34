import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="max-w-6xl mx-auto">
        <section className="">
          <Outlet />
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
