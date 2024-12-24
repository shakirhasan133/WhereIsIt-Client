import { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthContext";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { resetPassword } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state) {
      setEmail(location.state);
    }
  }, [location.state]);

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }
    resetPassword(email);
    toast.success("Password reset link sent to your email! Wait 3 Sec");
    setTimeout(() => {
      window.open("https://mail.google.com/", "_blank");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-background-light flex flex-col items-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-primary-darkest mb-6">
          Forgot Password
        </h1>
        <p className="text-gray-600 mb-4">
          Enter your email address below, and we’ll send you a link to reset
          your password.
        </p>
        <Toaster />
        <form onSubmit={handleResetPassword} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-primary-light rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-4 rounded hover:bg-primary-dark transition-all"
          >
            Reset Password
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={() => navigate("/login")}
            className="text-primary underline hover:text-primary-dark transition-all"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
