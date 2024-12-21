import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default HomeLayout;
