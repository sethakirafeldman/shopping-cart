import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import React, {useState} from 'react';
import data from "./data.js";

function App() {

  const [itemCount, setItemCount] = useState({});
  const [cartCount, setCartCount] = useState(0);

  const handleChange = (event) => {
    console.log(event.target.parentElement.id)
    setItemCount(event.target.value);
    setItemCount({
      "name": event.target.parentElement.id,
      "quantity": event.target.value
    })

  }

  const handleIncrement = (event, operator) => {
    let parent = event.target.parentElement;
    let input = parent.querySelector('.quantity-input');

    if (input.value > 0) {
      if (operator == "minus") {
        input.value--;
      }
      else {
        input.value++;
      }
    }
    else {
      if (operator =="plus") {
        input.value++
      }
    }
  }

  const addToCart = () => {
    let temp = Number(itemCount.quantity);
    // updates cart number
    setCartCount((prevState)=> prevState + temp);
  }

  return (
    <div className="App">
      <Nav 
        cartCount = {cartCount} 
      />
      <Routes>
        <Route>
          <Route path = "/" element={<Navigate to ="/home"/>}></Route>
          <Route path = "/home" element = {<Home 
            data = {data}
            handleChange = {handleChange}
            addToCart = {addToCart}
            handleIncrement = {handleIncrement}
          />} />
          <Route path = "/cart" element = {<CartPage />} />
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
