import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login.jsx";
import Home from "../Components/HomePage.jsx";


export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  }
  
]);