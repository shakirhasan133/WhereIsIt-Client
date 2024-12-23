import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import MainPage from "../Pages/MainPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AllItems from "../Pages/AllItems";
import PostDetails from "../Pages/PostDetails";
import AddLostFoundItem from "../Pages/AddLostFoundItem";
import PrivateRoutes from "./PrivateRoutes";
import AllRecoveredItems from "../Pages/AllRecoveredItems";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allitems",
        element: <AllItems></AllItems>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <PostDetails></PostDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addItems",
        element: (
          <PrivateRoutes>
            <AddLostFoundItem></AddLostFoundItem>
          </PrivateRoutes>
        ),
      },
      {
        path: "/allRecovered",
        element: (
          <PrivateRoutes>
            <AllRecoveredItems></AllRecoveredItems>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
