/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Errorpage from "../assets/ErrorPage.json";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-primary-lightest flex flex-col items-center justify-center text-center py-12">
      {/* Lottie Animation */}
      <Lottie className="w-80 h-auto mb-8" animationData={Errorpage}></Lottie>

      {/* Error Title */}
      <h1 className="text-5xl font-extrabold text-primary-dark mb-4">
        404 - Page Not Found
      </h1>

      {/* Error Description */}
      <p className="text-lg text-primary-darkest mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist or may have been moved.
        Don't worry, you can head back to the homepage and continue exploring!
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="bg-primary hover:bg-primary-dark text-white py-3 px-8 rounded-lg text-lg font-medium shadow-md transition-all duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
