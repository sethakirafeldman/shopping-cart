import RouteSwitch from "./components/RouteSwitch";
import Nav from "./components/Nav";
import React, {useState} from 'react';
import data from "./data.js";

function App() {

  const [cartCount, setCartCount] = useState(0);
  

  return (
    <div className="App">
      <Nav cartCount = {cartCount} />
      <RouteSwitch 
        data = {data}
        cartCount = {cartCount}
      />
    </div>
  );
}

export default App;
