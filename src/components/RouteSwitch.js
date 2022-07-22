import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

const RouteSwitch = (props) => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home 
            data = {props.data}
          />} />
          <Route 
            path="/cart" 
            element={<cartPage />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default RouteSwitch;