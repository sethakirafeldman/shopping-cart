import React from 'react';
import ProductCard from './ProductCard';
import CartPage from './CartPage';
import {CSSTransition} from 'react-transition-group';

const Home = (props) =>{

    console.log(props.cartDrawer)
    return (
    <>    
        <h1>Products</h1>
        <section id="page-content">  
            <ProductCard 
                data = {props.data}
                handleKeyPress = {props.handleKeyPress}
                handleChange = {props.handleChange}
                addToCart = {props.addToCart}
                handleIncrement = {props.handleIncrement}
            />            
    
        
        {/* {props.cartDrawer ?  */}

        <CSSTransition 
            in={props.cartDrawer}
            classNames="cart-drawer"
            timeout={200} 
        >
            {<CartPage 
                    cartItems = {props.cartItems}
                    data = {props.data}
                    cartDrawer = {props.cartDrawer}
                /> }
        </CSSTransition>
            
        {/* // : 
        // null } */}
        </section>
    </>
    )
}

export default Home;