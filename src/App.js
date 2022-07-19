import RouteSwitch from "./components/RouteSwitch";
import Nav from "./components/Nav";
import React, {useState} from 'react';

function App() {

  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <Nav cartCount = {cartCount} />
      <RouteSwitch 
        cartCount = {cartCount}
      />
    </div>
  );
}

export default App;
