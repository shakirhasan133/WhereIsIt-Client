import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import MainPage from "../Pages/MainPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AllItems from "../Pages/AllItems";
import PostDetails from "../Pages/PostDetails";
import AddLostFoundItem from "../Pages/AddLostFoundItem";

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
        path: "/items/:id",
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/addItems",
        element: <AddLostFoundItem></AddLostFoundItem>,
      },
    ],
  },
]);
