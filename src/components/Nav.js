import React from "react";

const Nav = (props) => {
    return (
    <nav>
        <i class="fa-solid fa-house"></i>
        <h1>Shopping Cart Site</h1>
        <div className='shopping-cart'>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-text">{props.cartCount}</i>
        </div>
    </nav>
    )
}

export default Nav;
