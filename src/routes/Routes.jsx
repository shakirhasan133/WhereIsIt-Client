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
import ManageMyItems from "../Pages/ManageMyItems";
import UpdateItem from "../Pages/UpdateItem";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPassword from "../Pages/ForgetPassword";
import ShortReview from "../Pages/ShortReview";
import About from "../Pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/updateItems/:id",
        element: (
          <PrivateRoutes>
            <UpdateItem></UpdateItem>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myItems",
        element: (
          <PrivateRoutes>
            <ManageMyItems></ManageMyItems>
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
      {
        path: "/addStory",
        element: (
          <PrivateRoutes>
            <ShortReview></ShortReview>
          </PrivateRoutes>
        ),
      },
      {
        path: "/resetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);
