import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Provider/AuthContext";
import useAuthContext from "./useAuthContext";

const AxiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const UseAxiosSecure = () => {
  const { signOutUser } = useAuthContext() || {};
  const navigate = useNavigate();

  useEffect(() => {
    AxiosSecure.interceptors.response.use(
      (result) => {
        return result;
      },
      async (error) => {
        console.log(error.message);
        if (error.status === 401 || error.status === 403) {
          signOutUser();
          await AxiosSecure.get("/logout").then(() => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Something Went Wrong",
              showConfirmButton: false,
              timer: 1000,
            });
            navigate("/login");
          });
        }
      }
    );
  }, [navigate, signOutUser]);
  return AxiosSecure;
};

export default UseAxiosSecure;
