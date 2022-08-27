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

  const handleChange = (targetItem) => {
    let targetIndex = targetItem.id.charAt(targetItem.id.length -1);
    try {
    cartItems.forEach((cartItem, index)=> {
      let cartIndex = cartItem.name.charAt(cartItem.name.length -1);
      let inputVal = document.querySelector(`#quantity-item-${targetIndex}`).value;
      if (cartIndex === targetIndex) {
        // update setCartItems at particular index to update quantity
        // this works, but modifies state directly.
        let tempCart = [...cartItems];
        let updateItem = tempCart[index];
        updateItem.quantity = Number(inputVal);
        setCartItems(tempCart);

        // if it gets down to 0 it should remove item.
        // and decimals need to be limited to 2 places
      }
    })
  }

  catch {

  }

  };

  const handleIncrement = (event, operator) => {
    let parent = event.target.parentElement;
    let input = parent.querySelector('.quantity-input');

    if (operator == "minus") {
      if (input.value > 0) {
        input.value--;
        handleChange(input);
      }
    }

    else if (operator == "plus") {
      input.value++;
      handleChange(input);
    }
  };

  const calculateTotal = (val, quan) => {
    let total = val *quan;
    total.toFixed(2);
    return total;
  };

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
            handleChange = {handleChange}
            calculateTotal = {calculateTotal}
            cartItems = {cartItems}
            cartDrawer = {cartDrawer}

          />} />
        </Route>
      </Routes>  
      
    </div>
  );
}

export default App;
