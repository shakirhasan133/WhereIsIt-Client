import Lottie from "lottie-react";
import { FaGoogle, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import loginAnimation from "../assets/login.json";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-primary-lightest ">
      {/* Left Section - Illustration */}
      <div className="flex-1 flex items-center md:justify-end justify-center px-6 ">
        <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-6 border-2 border-primary-dark">
          <h2 className="text-2xl font-bold text-primary-dark text-center">
            Welcome Back
          </h2>
          <h2 className="text-md text-center text-primary-dark my-1">
            Enter your details for login
          </h2>

          <form>
            {/* Email Field */}
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-2"
              >
                Email
              </label>
              <div className="flex items-center border-2 rounded-lg px-3">
                <FaEnvelope className="text-primary-dark" />
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
              <div className="flex items-center border-2 rounded-lg px-3 ">
                <button
                  onClick={(e) => {
                    e.preventDefault(), setShowPass(!showPass);
                  }}
                >
                  {showPass ? (
                    <FaEye className="text-primary-dark"></FaEye>
                  ) : (
                    <FaEyeSlash className="text-primary-dark" />
                  )}
                </button>
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  className="w-full p-2 focus:outline-none"
                />
              </div>
              <div className="text-right mt-2">
                <a
                  href="/forgot-password"
                  className="text-sm text-primary underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-dark text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-darkest transition"
            >
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">Or Continue With</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social Media Login */}
          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaGoogle className="text-xl text-gray-600" />
            </button>
            {/* <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaFacebook className="text-xl text-blue-600" />
            </button>
            <button className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full hover:bg-gray-300 transition">
              <FaApple className="text-xl text-gray-800" />
            </button> */}
          </div>

          {/* Signup Link */}
          <p className="text-center mt-6 text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-primary font-bold">
              Sign Up here
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;
