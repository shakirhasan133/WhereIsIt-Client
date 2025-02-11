import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-darkest text-primary-light py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About WhereIsIt</h3>
            <p className="text-sm text-primary-lightest">
              WhereIsIt is a platform to connect people who have lost or found
              items. We help in reuniting people with their belongings
              efficiently and securely.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-primary transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/allitems"
                  className="text-sm hover:text-primary transition duration-200"
                >
                  Lost & Found Items
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-primary transition duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-sm hover:text-primary transition duration-200"
                >
                  FAQ
                </Link>
              </li> */}
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
                  className="hover:text-primary transition duration-200"
                >
                  support@whereisit.com
                </a>
              </li>
              <li className="text-sm">
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:+123456789"
                  className="hover:text-primary transition duration-200"
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
                  className="hover:text-primary transition duration-200"
                >
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition duration-200"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition duration-200"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition duration-200"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-primary-light pt-4 text-center">
          <p className="text-sm text-primary-lightest">
            &copy; {new Date().getFullYear()} WhereIsIt. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
