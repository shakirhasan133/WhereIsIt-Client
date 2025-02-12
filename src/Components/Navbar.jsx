import { useState, useEffect, useContext } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoMdCloseCircle, IoMdSunny } from "react-icons/io";
import { IoHome, IoMoonOutline } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import logo from "../assets/WhereIsItLogo.png";
import { motion } from "framer-motion";
import UseAxiosSecure from "../hooks/UseAxiosSecure";

const Navbar = () => {
  const { user, signOutUser, darkMode, setDarkMode } = useContext(AuthContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const AxiosSecure = UseAxiosSecure();

  // const [darkMode, setDarkMode] = useState(
  //   localStorage.getItem("theme") === "dark"
  // );
  // console.log(darkMode);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);

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
        AxiosSecure.get("/logout")
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
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                className=" rounded-full"
                initial={{ y: -200 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <img src={logo} alt="" className="w-9 h-9 rounded-full" />
              </motion.div>
              <span className="text-xl font-bold text-primary-light">
                WhereIsIt
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-primary transition duration-200 ${
                  isActive
                    ? "border-b-2 text-white transition-all scale-105"
                    : ""
                }`
              }
            >
              <div className="flex items-center justify-center gap-1">
                <IoHome className="inline"></IoHome>
                <span>Home</span>
              </div>
            </NavLink>
            <NavLink
              to="/allitems"
              className={({ isActive }) =>
                `hover:text-primary transition duration-200 ${
                  isActive
                    ? "border-b-2 text-white transition-all scale-105"
                    : ""
                }`
              }
            >
              <div className="flex items-center justify-center gap-1">
                <FaSearchLocation className="inline"></FaSearchLocation>
                <span>Lost and found item</span>
              </div>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-primary transition duration-200 ${
                  isActive
                    ? "border-b-2 text-white transition-all scale-105"
                    : ""
                }`
              }
            >
              <div className="flex items-center justify-center gap-1">
                <FaSearchLocation className="inline"></FaSearchLocation>
                <span>About</span>
              </div>
            </NavLink>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center space-x-4">
            <div>
              <button
                className="bg-primary-dark p-2 rounded-full"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <IoMdSunny /> : <IoMoonOutline />}
              </button>
            </div>
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
                    onClick={(event) => {
                      event.stopPropagation();
                      setDropdownOpen((prev) => !prev);
                    }}
                    onBlur={() => {
                      setTimeout(() => {
                        setDropdownOpen(false);
                      }, 300);
                    }}
                  >
                    <img
                      src={user.photoURL}
                      alt="User Profile"
                      className="w-10 h-10 rounded-full border-2 border-primary object-contain p-[2px] hover:scale-110 transition-all"
                      referrerPolicy="no-referrer"
                      title={user?.displayName}
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
                  <div className="absolute w-[250px] right-0 mt-2 bg-primary-light text-primary-dark rounded-md shadow-lg z-50">
                    <NavLink
                      to="/addItems"
                      className={({ isActive }) =>
                        `block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition ${
                          isActive
                            ? "bg-primary-dark text-primary-light transition"
                            : ""
                        }`
                      }
                    >
                      Add Lost & Found Item
                    </NavLink>
                    <NavLink
                      to="/allRecovered"
                      className={({ isActive }) =>
                        `block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition ${
                          isActive
                            ? "bg-primary-dark text-primary-light transition"
                            : ""
                        }`
                      }
                    >
                      All Recovered Items
                    </NavLink>
                    <NavLink
                      to="/myItems"
                      className={({ isActive }) =>
                        `block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition ${
                          isActive
                            ? "bg-primary-dark text-primary-light transition"
                            : ""
                        }`
                      }
                    >
                      Manage My Items
                    </NavLink>
                    <NavLink
                      to="/addStory"
                      className={({ isActive }) =>
                        `block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition ${
                          isActive
                            ? "bg-primary-dark text-primary-light transition"
                            : ""
                        }`
                      }
                    >
                      Add Story
                    </NavLink>

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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 w-full text-left  ${
                    isActive
                      ? "bg-primary-dark text-primary-light transition"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allitems"
                className={({ isActive }) =>
                  `block px-4 py-2 w-full text-left  ${
                    isActive
                      ? "bg-primary-dark text-primary-light transition"
                      : ""
                  }`
                }
              >
                Lost & Found Items
              </NavLink>
            </li>
            {user ? (
              <ul>
                <li>
                  <NavLink
                    to="/addItems"
                    className={({ isActive }) =>
                      `block px-4 py-2 w-full text-left  ${
                        isActive
                          ? "bg-primary-dark text-primary-light transition"
                          : ""
                      }`
                    }
                  >
                    Add Lost and Found Item
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/allRecovered"
                    className={({ isActive }) =>
                      `block px-4 py-2 w-full text-left ${
                        isActive
                          ? "bg-primary-dark text-primary-light transition"
                          : ""
                      }`
                    }
                  >
                    All Recovered Item
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myItems"
                    className={({ isActive }) =>
                      `block px-4 py-2 w-full text-left ${
                        isActive
                          ? " bg-primary-dark text-primary-light transition"
                          : ""
                      }`
                    }
                  >
                    Manage My Item
                  </NavLink>
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
                  {user?.displayName}
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
