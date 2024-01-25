import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom"; 
// why max-w-[1280px] min-h-[900px] lg:min-w-[1024px]
//Use min-h-screen to make the outer div take at least the full height of the viewport.
const Layout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Layout