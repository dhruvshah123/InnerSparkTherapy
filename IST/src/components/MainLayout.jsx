import { Outlet,useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";  // Your footer component
import Footer from "./Footer";

const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on route change
    }, [location.pathname]);
  return (
    <div>
       
      <Navbar />
      <Outlet />  
      <Footer />
    </div>
  );
};

export default MainLayout;
