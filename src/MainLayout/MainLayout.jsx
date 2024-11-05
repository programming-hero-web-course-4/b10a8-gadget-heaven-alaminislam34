import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <section className="">
        <Navbar />
        <section className="max-w-6xl mx-auto min-h-[40vh]">
          <section className="">
            <Outlet />
          </section>
        </section>
        <Footer />
      </section>
    </div>
  );
};

export default MainLayout;
