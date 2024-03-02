import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/account/Login.jsx";
import Order from "./pages/Order.jsx";
import Signup from "./components/account/Signup.jsx";
import Footer from "./components/Footer.jsx";
import CheckoutForm from "./pages/CheckoutForm.jsx";
import Complete from "./pages/Complete.jsx";
import Home from "./components/Home.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ViewProduct from "./components/productComps/ViewProduct.jsx";
import CartComp from "./components/CartComp.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import HeaderTop from "./components/HeaderTop.jsx";
import Products from "./components/productComps/Products.jsx";
import Category from "./components/productComps/Category.jsx";
const queryClient = new QueryClient()

function App() {
  window.document.title = "Sahara"
  

  return (

    <Router>
      <CartProvider>
  
          <HeaderTop/>
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
              <Route path="/c/:categoryName" element={< Category />} />
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
