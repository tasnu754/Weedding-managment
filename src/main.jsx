import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import Home from './Pages/Home';
import ErrorComp from './Components/ErrorComp';
import AOS from "aos";
import "aos/dist/aos.css";
import AuthElement from './Pages/AuthElement';
import Registration from './Pages/Registration';
import Signin from './Pages/Signin';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Feedback from './Pages/Feedback';
import ServicPage from './Pages/ServicPage';
import PrivateRoute from './Pages/PrivateRoute';
import PrivateServiceRoute from './Pages/PrivateServiceRoute';
AOS.init();


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorComp></ErrorComp>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./public/event.json"),
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/shop",
        element: (
          <PrivateRoute>
            <Shop></Shop>
          </PrivateRoute>
        ),
      },
      {
        path: "/feedback",
        element: (
          <PrivateRoute>
            <Feedback></Feedback>
          </PrivateRoute>
        ),
      },
      {
        path: "/servicepage/:id",
        element: (
          <PrivateServiceRoute>
            <ServicPage></ServicPage>
          </PrivateServiceRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthElement>
      <RouterProvider router={router} />
    </AuthElement>
  </React.StrictMode>
);
