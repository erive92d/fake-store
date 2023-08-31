import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navtab } from "./components/Navtab";
import Login from "./components/Login.jsx"

import Order from "./pages/Order.jsx";
import Signup from "./components/Signup.jsx";
import ItemDetail from "./components/ItemDetail.jsx";
import Footer from "./components/Footer.jsx";
import New from "./pages/New.jsx";
import CheckoutForm from "./pages/CheckoutForm.jsx";
import Complete from "./pages/Complete.jsx";
import { getSavedIds } from "./utils/localStorage.js";
import { useEffect , useState} from "react";
import Newhome from "./pages/Newhome.jsx";
import Cart from "./components/Cart"

function App() {
  window.document.title = "Sahara"

  return (

    <Router>

      <Navtab />
      <div className="min-w-full  bg-gradient-to-b from-gray-700 to-black text-white">
        <Routes>
          <Route path="/" element={<Newhome />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/item/:itemId" element={< ItemDetail />} />
          <Route path="/newcart" element={<New />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>

      </div>
      <Footer />
    </Router>

  );
}

export default App;
