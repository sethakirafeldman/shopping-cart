import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import React, {useState} from 'react';
import data from "./data.js";

function App() {

  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <Nav 
        cartCount = {cartCount} 
      />
      <Routes>
        <Route>
          <Route path = "/" element={<Navigate to ="/home"/>}></Route>
          <Route path = "/home" element = {<Home data = {data} />} />
          <Route path = "/cart" element = {<CartPage />} />
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
