import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Ncomponents/account/Login.jsx";
import Order from "./pages/Order.jsx";
import Signup from "./components/Signup.jsx";
import Footer from "./components/Footer.jsx";
import CheckoutForm from "./pages/CheckoutForm.jsx";
import Complete from "./pages/Complete.jsx";
import Home from "./Ncomponents/Home.jsx";
import NavigationBar from "./Ncomponents/NavigationBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ViewProduct from "./Ncomponents/productComps/ViewProduct";
import CartComp from "./Ncomponents/CartComp.jsx";
import { CartProvider } from "./context/CartContext.jsx";
const queryClient = new QueryClient()

function App() {
  window.document.title = "Sahara"

  return (

    <Router>
      <CartProvider>
        <NavigationBar />
        <div className="min-w-full bg-white text-black">
          <QueryClientProvider client={queryClient}>
            <Routes>
              {/* <Route path="/product" element={<ViewProduct />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/order" element={<Order />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products/:productId" element={< ViewProduct />} />
              <Route path="/cart" element={<CartComp />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/complete" element={<Complete />} />
            </Routes>
          </QueryClientProvider>
        </div>
        <Footer />
      </CartProvider>
    </Router>

  );
}

export default App;
