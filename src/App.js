import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import React, {useState} from 'react';
import data from "./data.js";

function App() {
  // store all
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

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

  const addToCart = (event, index) => {
    // id of parent will be used to check prod name.
    const parent = event.target.parentElement;
    const inputVal = Number(parent.querySelector("input").value);

    // search to see if product already in cart. 
    let checkExisting = cartItems.find((product) => {
      return product.name == parent.id
    })
    
    if (checkExisting) {
      // if item in cart, update quantity
      setCartItems([ 
        {
          "name": parent.id,
          "quantity": inputVal + checkExisting.quantity,
          index: index
        }
      ]
      );
    }

    else {
      setCartItems(prevState => [ 
        ...prevState,
        {
          "name": parent.id,
          "quantity": inputVal,
          index: index
        }
      ]
      );
    }

    // updates cart counter.
    setCartCount(prevState =>   
        inputVal + prevState
      )
    // set input value back to default (0)  
    console.log(parent.querySelector("input"))  


    // function here to reset inputval field to 0
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
            addToCart = {addToCart}
            handleIncrement = {handleIncrement}

          />} />
          <Route path = "/cart" element = {<CartPage 
            cartItems = {cartItems}
            data = {data}
            />} />
        </Route>
      </Routes>  
    </div>
  );
}

export default App;
