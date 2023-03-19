import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="px-9 py-8 xl:px-[35%] md:px-[20%]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
