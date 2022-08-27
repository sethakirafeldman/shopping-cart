import React from 'react';
import ProductCard from './ProductCard';
import CartPage from './CartPage';
import {CSSTransition} from 'react-transition-group';

const Home = (props) =>{

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
    
        <CSSTransition 
            in={props.cartDrawer}
            classNames="cart-drawer"
            timeout={200}>
            {<CartPage 
                cartItems = {props.cartItems}
                data = {props.data}
                cartDrawer = {props.cartDrawer}
                handleIncrement = {props.handleIncrement}
                calculateTotal = {props.calculateTotal}
                handleChange = {props.handleChange}
                handleKeyPress = {props.handleKeyPress}
            /> }
        </CSSTransition>
        </section>
    </>
    )
}

export default Home;