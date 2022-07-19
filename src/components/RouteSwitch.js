import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import cartPage from "./cartPage";

const RouteSwitch = (props) => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/cart" 
            element={<cartPage />} />
        </Routes>
      </BrowserRouter>
    );
  };

  export default RouteSwitch;