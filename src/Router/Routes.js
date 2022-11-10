// import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/AddService";
import Blog from "../components/Blog";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReview from "../components/MyReview";
import Register from "../components/Register";
import ServiceDetails from "../components/ServiceDetails";
import Services from "../components/Services";
import Main from "../Layout/Main";
import PrivateRouts from "./PrivateRouts";
const { createBrowserRouter } = require("react-router-dom");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://uber-barber-server.vercel.app/${params.id}`),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/addservice",
        element: <AddService></AddService>,
      },
      {
        path: "/reviews",
        element: (
          <PrivateRouts>
            <MyReview></MyReview>
          </PrivateRouts>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
