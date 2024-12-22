import { useState, useEffect } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false; // Replace with user state or context
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
              <div className="flex items-center justify-center gap-2">
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
                      src="https://via.placeholder.com/40" // Replace with user.photoURL
                      alt="User Profile"
                      className="w-10 h-10 rounded-full border-2 border-primary"
                    />
                  </button>
                  <button className="p-2 text-primary-light font-medium rounded-md hover:bg-primary-dark transition">
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

                    <button
                      onClick={() => alert("Logged Out")} // Replace with sign-out logic
                      className="block px-4 py-2 w-full text-left hover:bg-primary-dark hover:text-primary-light transition"
                    >
                      Sign Out
                    </button>
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
              <svg
                className="w-6 h-6 text-primary-light"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary-dark">
          <ul className="flex flex-col space-y-2 px-4 py-2">
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
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
