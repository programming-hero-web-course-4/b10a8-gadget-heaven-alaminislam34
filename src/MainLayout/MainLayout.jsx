import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <section className="w-11/12 mx-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
