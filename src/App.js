import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import React, {useState} from 'react';
import data from "./data.js";
import ProductCard from "./components/ProductCard";

function App() {
  // store all
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartDrawer, setCartDrawer] = useState(false);

  // allows only whole numbers
  const handleKeyPress = (event) => {
      if (event.key == "-" || event.key == "." ) {
        event.preventDefault();
      }
  };

  const handleIncrement = (event, operator) => {
    let parent = event.target.parentElement;
    let input = parent.querySelector('.quantity-input');

    if (operator =="minus") {
      if (input.value > 0) {
        input.value--;
      }
    }

    else if (operator =="plus") {
      input.value++;
    }
  }

  const toggleCart = () => {
    setCartDrawer(!cartDrawer);
  };

  const addToCart = (event, index) => {

    // simplify function down to adding objects to cart successfully.
    // id of parent checked against product name
    const parent = event.target.parentElement;
    const inputVal = Number(parent.querySelector("input").value);

    const checkExisting = cartItems.find((item) => item.name === parent.id);

    if (checkExisting) {
      cartItems.forEach((item, index)=> {
        if (item.name === parent.id) {
          const newCart = [...cartItems];
          const updateItem = newCart[index];
          updateItem.quantity += inputVal;
          newCart[index] = updateItem;
          setCartItems(newCart);
        } 

      })
    }

    else {
      setCartItems(
      [...cartItems,
        { 
          "name": parent.id,
          "quantity": inputVal,
          "index": index
        }
      ])
    }

    // update cart counter.
    setCartCount(prevState =>   
        inputVal + prevState
    )
  
    // reset input value to 0
    parent.querySelector("input").value = 0;

  } 
  
  return (
    <div className="App">
      <Nav 
        toggleCart = {toggleCart}
        cartCount = {cartCount} 
      />
      <Routes>
        <Route>
          <Route path = "/" element={<Navigate to ="/home"/>}></Route>
          <Route path = "/home" element = {<Home 
            data = {data}
            handleKeyPress = {handleKeyPress}
            addToCart = {addToCart}
            handleIncrement = {handleIncrement}
            cartItems = {cartItems}
            cartDrawer = {cartDrawer}
          />} />
        </Route>
      </Routes>  
      
    </div>
  );
}

export default App;
