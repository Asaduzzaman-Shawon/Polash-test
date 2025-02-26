import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Nav from "../nav/Nav";

const Layout = () => {
  return (
    <div className="flex flex-col mx-auto container">
      <Nav></Nav>
      <Outlet></Outlet>
      
      <Footer></Footer>
    </div>
  );
};

export default Layout;
