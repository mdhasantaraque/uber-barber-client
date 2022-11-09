// import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReview from "../components/MyReview";
import Register from "../components/Register";
import ServiceDetails from "../components/ServiceDetails";
import Services from "../components/Services";
import Main from "../Layout/Main";
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
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/reviews",
        element: <MyReview></MyReview>,
      },
    ],
  },
]);

export default router;
