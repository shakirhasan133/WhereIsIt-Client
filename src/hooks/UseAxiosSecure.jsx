import axios from "axios";

const AxiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const UseAxiosSecure = () => {
  return AxiosSecure;
};

export default UseAxiosSecure;
