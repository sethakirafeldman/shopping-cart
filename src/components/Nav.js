import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
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
        {/* <Link to="/cart" onClick={props.toggleCart}>
            
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
        </Link> */}

        <button className="cart-button" onClick={props.toggleCart}>
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
        </button>
    </nav>
    )
}

export default Nav;
