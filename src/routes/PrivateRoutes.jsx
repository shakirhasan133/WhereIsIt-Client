/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import LoadingPage from "./../Pages/Loading";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  if (user) {
    return children;
  }
  return navigate("/login");
};

export default PrivateRoutes;
