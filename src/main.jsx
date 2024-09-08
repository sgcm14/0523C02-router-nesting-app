import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Home";
import About from "./About";
import Faqs from "./Faqs";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
