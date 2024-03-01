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
import { useEffect , useState, createContext} from "react";
import Newhome from "./pages/Newhome.jsx";
import Cart from "./components/Cart"

export const CartContext = createContext()


function App() {
  window.document.title = "Sahara"

  const [cart, setCart] = useState(getSavedIds())
  

  return (

    <Router>
     <CartContext.Provider value={{cart, setCart}}>
        <Navtab />
        <div className="min-w-full bg-gray-200">
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
        </CartContext.Provider>
    </Router>

  );
}

export default App;
