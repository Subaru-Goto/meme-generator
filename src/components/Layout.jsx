import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom"; 

const Layout = () => {
  return (
    <div className="
    flex flex-col justify-between min-h-screen">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Layout