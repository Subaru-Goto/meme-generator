import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom"; 

const Layout = () => {
  return (
    <div className="
    flex flex-col justify-between
    max-w-[1280px] min-h-[900px]
    lg:min-w-[1024px]">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Layout