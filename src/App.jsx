import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/account/LoginForm.jsx";
import Signup from "./components/account/Signup.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import ViewProduct from "./components/productComps/ViewProduct.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Category from "./components/productComps/Category.jsx";
import NewNav from "./components/navbar/NewNav.jsx";
import CartPage from "./components/navbar/cartcomps/CartPage.jsx";
const queryClient = new QueryClient()

function App() {
  window.document.title = "Sahara"


  return (

    <Router>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <NewNav />
          <div className="min-w-full bg-white text-black">

            <Routes>
              {/* <Route path="/product" element={<ViewProduct />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/products/:productId" element={< ViewProduct />} />
              <Route path="/c/:categoryName" element={< Category />} />
            </Routes>

          </div>
          <Footer />
        </CartProvider>
      </QueryClientProvider>
    </Router>

  );
}

export default App;
