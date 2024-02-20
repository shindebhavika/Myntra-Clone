import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./routes/App.jsx";
import Bag from "./routes/Bag.jsx"
import Home from "./routes/Home.jsx"
import "./index.css";

const router = createBrowserRouter([
  {
    path:"/",element:<App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  }
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
