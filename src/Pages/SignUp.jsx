import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import signupAnimation from "../assets/signup.json"; // Replace with your signup animation JSON file
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row  bg-primary-lightest my-10 gap-20">
      {/* Left Section - Illustration */}
      <div className="flex-1 flex items-center justify-end ">
        <div className="relative w-2/3">
          <Lottie animationData={signupAnimation} loop={true} />
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="flex-1 flex items-center md:justify-start justify-start ">
        <div className="  max-w-md w-full bg-white rounded-lg shadow-2xl p-6 border-primary-dark">
          <h2 className="text-2xl font-bold text-primary-dark text-center">
            Create an Account
          </h2>
          <h2 className="text-md text-center text-primary-dark my-1 mb-4">
            Sign up with your details to get started
          </h2>

          <form>
            {/* Name Field */}
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Full Name
              </label>
              <div className="flex items-center border-2 rounded-lg px-3">
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full p-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email
              </label>
              <div className="flex items-center border-2 rounded-lg px-3">
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full p-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Password
              </label>
              <div className="flex items-center border-2 rounded-lg px-3">
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full p-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Photo URL Field */}
            <div className="mb-2">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Photo URL
              </label>
              <div className="flex items-center border-2 rounded-lg px-3">
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="https://your-image-link.jpg"
                  className="w-full p-2 focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-dark text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-darkest transition"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">Or Continue With</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Media Sign-Up */}
          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaGoogle className="text-xl text-gray-600" />
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-bold">
              Log In here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
