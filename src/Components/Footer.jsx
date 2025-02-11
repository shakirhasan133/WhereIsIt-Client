import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-darkest dark:bg-black text-primary-light dark:text-primary-lightest py-10 transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About WhereIsIt</h3>
            <p className="text-sm text-primary-lightest opacity-90">
              WhereIsIt connects people who have lost or found items, helping
              them reunite with their belongings efficiently and securely.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-primary-light dark:hover:text-primary transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/allitems"
                  className="text-sm hover:text-primary-light dark:hover:text-primary transition duration-200"
                >
                  Lost & Found Items
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:support@whereisit.com"
                  className="hover:text-primary-light dark:hover:text-primary transition duration-200"
                >
                  support@whereisit.com
                </a>
              </li>
              <li className="text-sm">
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:+123456789"
                  className="hover:text-primary-light dark:hover:text-primary transition duration-200"
                >
                  +123 456 789
                </a>
              </li>
              <li className="text-sm">
                <span className="font-medium">Address:</span> 123 Main Street,
                Cityville, Country
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light dark:hover:text-primary transition duration-200"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light dark:hover:text-primary transition duration-200"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light dark:hover:text-primary transition duration-200"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-light dark:hover:text-primary transition duration-200"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-primary-light dark:border-primary-lightest pt-4 text-center">
          <p className="text-sm text-primary-lightest opacity-90">
            &copy; {new Date().getFullYear()} WhereIsIt. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
