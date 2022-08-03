import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    // console.log(props.cartCount)
    return (
    <nav>
        <Link to = "/home">
            <i 
                aria-label="Open Home"
                className="fa-solid fa-house"
                id = "home"
            ></i> 
        </Link>    
        <h1>Shopping Cart Site</h1>
        <Link to="/cart" >
            <div className='shopping-cart'>
                <i  
                    aria-label="Open Cart"
                    className="fa-solid fa-cart-shopping"
                    id = "cart"
                ></i>
                <i 
                    aria-label="Cart Count"
                    className="fa-solid fa-text"
                >{props.cartCount}</i>
            </div>
        </Link>
    </nav>
    )
}

export default Nav;
