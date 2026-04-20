import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./app/components/navbar";
import Footer from "./app/components/footer";
import Home from "./app/pages/home";
import ProductDetail from "./app/pages/productDetail";
import Cart from "./app/pages/cart";
import Checkout from "./app/pages/checkout";
import OrderHistory from "./app/pages/orderHistory";
import Login from "./app/pages/login";
import Register from "./app/pages/register";
import ProtectedRoute from "../src/app/components/protectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <ProtectedRoute>
                      <ProductDetail />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <Checkout />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <ProtectedRoute>
                      <OrderHistory />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
