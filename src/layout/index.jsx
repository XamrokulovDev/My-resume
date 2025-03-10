import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Routerlayout = () => {
  return (
    <div className="min-h-screen w-screen bg-blue-100 flex flex-col items-center justify-between py-[2.5vh]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Routerlayout;