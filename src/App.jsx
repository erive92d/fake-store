import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx"
import { Navtab } from "./components/Navtab";
import Login from "./components/Login.jsx"
import Cart from "./components/Cart.jsx";
import Profile from "./components/Profile.jsx";

// THIS IS A TEST

function App() {

  return (

    <Router>
      <>
        <Navtab />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Profile />} />
        </Routes>
      </>
    </Router>

  );
}

export default App;
