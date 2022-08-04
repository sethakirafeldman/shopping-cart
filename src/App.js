import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import React, {useState} from 'react';
import data from "./data.js";

function App() {

  const [itemCount, setItemCount] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // allows only whole numbers
  const handleKeyPress = (event) => {
      if (event.key == "-" || event.key == "." ) {
        event.preventDefault();
      }
  };

  const handleChange = (event) => {
      // setItemCount(event.target.value);
      // add to item count array
      // setItemCount(prevState =>[
      //   ...prevState,
      //   {
      //     "name": event.target.parentElement.id,
      //     "quantity": event.target.value
      //   }
      // ])
//itemCount is updated whenever number changes
// cart number val updates but this logic should be handled on the cart page for to ensure duplicates
// value in text field should clear after add to cart
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

  const addToCart = (event, index) => {

    let parent = event.target.parentElement;
    let inputVal = parent.querySelector("input").value;

    setItemCount(prevState => [
      ...prevState,
      {
        "name": parent.id,
        "quantity": inputVal,
        index: index
      }
    ])

    // updates cart counter.
    setCartCount(prevState =>   
        Number(inputVal) + Number(prevState)
      )

    // set input value back to default (0)  
    console.log(parent.querySelector("input"))  
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
            handleKeyPress = {handleKeyPress}
            handleChange = {handleChange}
            addToCart = {addToCart}
            handleIncrement = {handleIncrement}
          />} />
          <Route path = "/cart" element = {<CartPage 
            itemCount = {itemCount}
            data = {data}
            />} />
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
