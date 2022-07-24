import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
    <nav>
        <Link to = "/home">
            <i 
                className="fa-solid fa-house"
                id = "home"
            ></i> 
        </Link>    
        <h1>Shopping Cart Site</h1>
        <Link to="/cart" >
            <div className='shopping-cart'>
                <i 
                    className="fa-solid fa-cart-shopping"
                    id = "cart"
                ></i>
                <i 
                    className="fa-solid fa-text"
                >{props.cartCount}</i>
            </div>
        </Link>
    </nav>
    )
}

export default Nav;
