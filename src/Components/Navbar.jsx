import { useState, useEffect, useContext } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to toggle navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Sign Out
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Logout Successful",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav
      className={`${
        isScrolled ? "bg-opacity-95 bg-primary-darkest" : "bg-primary-darkest"
      } text-primary-light bg-primary-darkest shadow-md sticky top-0 z-50 transition duration-300 navbarIndex`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-primary-light p-2 rounded-full">
              <span className="block w-4 h-4 rounded-full bg-primary-dark"></span>
            </div>
            <span className="text-xl font-bold text-primary-light">
              WhereIsIt
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-primary transition duration-200">
              <div className="flex items-center justify-center gap-1">
                <IoHome className="inline"></IoHome>
                <span>Home</span>
              </div>
            </Link>
            <Link
              to="/lost-found-items"
              className="hover:text-primary transition duration-200"
            >
              <div className="flex items-center justify-center gap-1">
                <FaSearchLocation className="inline"></FaSearchLocation>
                <span>Lost and found item</span>
              </div>
            </Link>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <div className="md:flex items-center justify-center gap-2 hidden ">
                <Link
                  to="/login"
                  className="px-4 py-2 bg-primary-light text-primary-dark font-medium rounded-md hover:bg-primary-dark hover:text-primary-light transition"
                >
                  Log In
                </Link>

                <Link
                  to="/signup"
                  className="px-4 py-2 bg-primary-dark text-primary-white font-medium rounded-md hover:bg-primary-light hover:text-primary-darkest transition"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="relative">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="hidden md:block"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    onBlur={() => setDropdownOpen(false)}
                  >
                    <img
                      src={user.photoURL} // Replace with user.photoURL
                      alt="User Profile"
                      className="w-10 h-10 rounded-full border-2 border-primary"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                  <button
                    className="hidden md:block p-2 text-primary-light font-medium rounded-md hover:bg-primary-dark transition"
                    onClick={handleSignOut}
                  >
                    Log out
                  </button>
                </div>
                {isDropdownOpen && (
                  <div className="absolute w-[250px] right-0 mt-2 bg-primary-light text-primary-dark rounded-md shadow-lg z-10">
                    <Link
                      to="/add-item"
                      className="block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition"
                    >
                      Add Lost & Found Item
                    </Link>
                    <Link
                      to="/recovered-items"
                      className="block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition"
                    >
                      All Recovered Items
                    </Link>
                    <Link
                      to="/my-items"
                      className="block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition"
                    >
                      Manage My Items
                    </Link>

                    {/* <button
                      onClick={() => alert("Logged Out")} // Replace with sign-out logic
                      className="block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition"
                    >
                      Sign Out
                    </button> */}
                  </div>
                )}
              </div>
            )}
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden flex items-center"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <span className="sr-only">Open Mobile Menu</span>
              {!isMobileMenuOpen ? (
                <RiMenu3Fill className="text-xl"></RiMenu3Fill>
              ) : (
                <IoMdCloseCircle className="text-xl"></IoMdCloseCircle>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-darkest w-3/4 h-screen float-end absolute right-0">
          <ul className="flex flex-col  px-4 py-2 justify-center ">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/lost-found-items"
                className="block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition"
              >
                Lost & Found Items
              </Link>
            </li>
            {user ? (
              <ul>
                <li>
                  <Link
                    to="/add-item"
                    className="block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition"
                  >
                    Add Lost and Found Item
                  </Link>
                </li>
                <li>
                  <Link
                    to="/recovered-items"
                    className="block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition"
                  >
                    All Recovered Item
                  </Link>
                </li>
                <li>
                  <Link
                    to="/my-items"
                    className="block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition"
                  >
                    Manage My Item
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}

            <span className="w-full h-[1px] bg-white mb-3"></span>
            {!user ? (
              <div className="flex flex-col items-left  gap-2  w-full text-center">
                <Link
                  to="/login"
                  className="px-4 py-2 text-primary-darkest w-full bg-primary font-medium rounded-md  hover:text-primary-light transition"
                >
                  Log In
                </Link>

                <Link
                  to="/signup"
                  className="px-4 py-2 text-primary-light w-full bg-primary-dark font-medium rounded-md  transition"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="w-full text-center">
                <h1 className=" py-2 w-full  hover:bg-primary-dark hover:text-primary-light transition">
                  Shakir Hasan
                </h1>
                <button
                  className="px-4 py-2 text-primary-darkest w-full bg-primary font-medium rounded-md  hover:text-primary-light transition"
                  onClick={handleSignOut}
                >
                  Log Out
                </button>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
