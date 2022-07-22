import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import data from "../data.json"


const RouteSwitch = (props) => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home 
            data = {data}
          />} />
          <Route 
            path="/cart" 
            element={<cartPage />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default RouteSwitch;