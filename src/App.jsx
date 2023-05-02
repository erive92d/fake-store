import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx"
import { Navtab } from "./components/Navtab";
import Login from "./components/Login.jsx"
import Cart from "./components/Cart.jsx";
import Profile from "./components/Profile.jsx";
import Order from "./pages/Order.jsx";
import Signup from "./components/Signup.jsx";


function App() {
  window.document.title = "Sahara"
  return (

    <Router>
      <>
        <Navtab />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
          <Route path="/order" element={<Order />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </>
    </Router>

  );
}

export default App;
