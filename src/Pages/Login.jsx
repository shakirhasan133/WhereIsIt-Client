import Lottie from "lottie-react";
import {
  FaGoogle,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import loginAnimation from "../assets/login.json";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();
  const { signInWithGoogleEmail, signInWithEmail, setUser } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const from = location?.state || "/";
  const [isError, setIsError] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const darkModePref = localStorage.getItem("darkMode");
    if (darkModePref === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", !isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleLoginWithGoogleEmail = () => {
    signInWithGoogleEmail()
      .then((res) => {
        setUser(res.user);
        Swal.fire({
          title: "Login Successful",
          html: "Redirecting...",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => Swal.showLoading(),
        }).then(() => navigate(from));
      })
      .catch((error) => setIsError(error.message));
  };

  const handleLoginWithEmailandPass = (e) => {
    e.preventDefault();
    setIsError("");
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmail(email, password)
      .then(async (res) => {
        await setUser(res.user);
        Swal.fire({
          title: "Login Successful",
          html: "Redirecting...",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => Swal.showLoading(),
        }).then(() => navigate(from));
      })
      .catch(() => setIsError("Something Went Wrong"));
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-b from-primary-light to-background-light dark:from-background-dark dark:to-primary-darkest transition-colors">
      <Helmet>
        <title>Login || WhereIsIt</title>
      </Helmet>

      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 text-xl"
      >
        {isDarkMode ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-600" />
        )}
      </button>

      <div className="flex-1 flex items-center justify-center md:justify-end px-6 ">
        <div className="max-w-md w-full  bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg shadow-2xl p-6 border border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
          <h2 className="text-md text-center my-1">
            Enter your details to log in
          </h2>

          <form onSubmit={handleLoginWithEmailandPass}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <div className="flex items-center border rounded-lg px-3 dark:border-gray-600">
                <FaEnvelope className="text-primary-dark" />
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full p-2 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <div className="flex items-center border rounded-lg px-3 dark:border-gray-600">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPass(!showPass);
                  }}
                >
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </button>
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="w-full p-2 bg-transparent focus:outline-none"
                />
              </div>
              <div className="text-right mt-2">
                <Link
                  to="/resetPassword"
                  className="text-sm text-primary underline"
                  state={userEmail}
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-dark text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-darkest transition"
            >
              Log In
            </button>
          </form>
          {isError && <p className="text-red-500 py-2">{isError}</p>}

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-sm">Or Continue With</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center items-center gap-4 ">
            <button
              className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              onClick={handleLoginWithGoogleEmail}
            >
              <FaGoogle className="text-xl text-gray-600 dark:text-white" />
            </button>
          </div>

          <p className="text-center mt-6 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-primary font-bold" state={from}>
              Sign Up here
            </Link>
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <Lottie animationData={loginAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Login;
