import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import MainPage from "../Pages/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <p>Error 404, Page Not Found</p>,
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <MainPage></MainPage>,
      },
    ],
  },
]);
