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
        loader: () => fetch('./public/event.json')
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthElement>
      <RouterProvider router={router} />
    </AuthElement>
  </React.StrictMode>
);
