import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import signupAnimation from "../assets/signup.json"; // Replace with your signup animation JSON file
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const SignUp = () => {
  const { signInWithGoogleEmail, setUser, signUpWithEmail, updateUserData } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";
  const [isError, setIsError] = useState("");

  // Register New User
  const handleRegisterNewUser = (e) => {
    e.preventDefault();
    setIsError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setIsError(
        "Password must have at least one uppercase letter, one lowercase letter, and six characters."
      );
      return;
    }

    try {
      signUpWithEmail(email, password)
        .then((res) => {
          updateUserData(name, photo).then(() => {
            setUser(res.user);
            let timerInterval;
            Swal.fire({
              title: "Login Successful",
              html: "Please wait <b></b> seconds to redirect.",
              timer: 3000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                  timer.textContent = `${(Swal.getTimerLeft() / 1000).toFixed(
                    1
                  )}`;
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                navigate(from);
              }
            });
          });
        })
        .catch((error) => {
          setIsError("This email is already in use.");
          console.log(error);
        });
    } catch {
      setIsError("Something went wrong.");
    }
  };

  // Log in with Google
  const handleLoginWithGoogleEmail = () => {
    signInWithGoogleEmail()
      .then((res) => {
        setUser(res.user);
        let timerInterval;
        Swal.fire({
          title: "Login Successful",
          html: "Please wait <b></b> seconds to redirect.",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${(Swal.getTimerLeft() / 1000).toFixed(1)}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            navigate(from);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gradient-to-b from-primary-light to-background-light dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row bg-white dark:bg-gray-900 md:py-10 gap-5 md:gap-10 shadow-lg rounded-lg p-6">
        <Helmet>
          <title>Sign up || WhereIsIt</title>
        </Helmet>

        {/* Left Section - Illustration */}
        <div className="flex-1 flex items-center justify-center md:justify-end md:py-0 py-5">
          <div className="relative w-2/3">
            <Lottie animationData={signupAnimation} loop={true} />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 flex items-center md:py-0 py-5 md:justify-start justify-start px-3 md:px-0">
          <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 border-2 border-primary-dark dark:border-gray-600">
            <h2 className="text-2xl font-bold text-primary-dark dark:text-white text-center">
              Create an Account
            </h2>
            <h2 className="text-md text-center text-primary-dark dark:text-gray-300 my-1 mb-4">
              Sign up with your details to get started
            </h2>

            <form onSubmit={handleRegisterNewUser}>
              {/* Input Fields */}
              {["name", "email", "password", "photo"].map((field, index) => (
                <div className="mb-2" key={index}>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "password" ? "password" : "text"}
                    name={field}
                    required
                    className="w-full p-2 border-2 rounded-lg focus:outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary-dark text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-darkest transition dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Sign Up
              </button>
            </form>

            {isError && <p className="text-red-500 py-2">{isError}</p>}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300 dark:border-gray-500" />
              <span className="mx-4 text-sm text-gray-500 dark:text-gray-300">
                Or Continue With
              </span>
              <hr className="flex-grow border-t border-gray-300 dark:border-gray-500" />
            </div>

            {/* Google Sign-Up */}
            <div className="flex justify-center gap-4">
              <button
                className="flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                onClick={handleLoginWithGoogleEmail}
              >
                <FaGoogle className="text-xl text-gray-600 dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
