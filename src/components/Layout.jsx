import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom"; 

const Layout = () => {
  return (
    <div className="max-h-screen">
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default Layout