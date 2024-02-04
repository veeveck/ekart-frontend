import React from "react";
//import { Counter } from "./features/counter/Counter";
import ProductList from "./features/productList/ProductList";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

import "./App.css";
import SignupPage from "./pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./features/cart/Cart";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <SignupPage />,
  },
  {
    path: "shopping-cart",
    element: <CartPage></CartPage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
