import { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";

const useAuthContext = () => {
  const authc = useContext(AuthContext);
  return authc;
};

export default useAuthContext;
