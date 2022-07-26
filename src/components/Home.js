import React from 'react';
import ProductCard from './ProductCard';

const Home = (props) =>{

    return (
    <>  
        <ProductCard 
            data = {props.data}
            handleChange = {props.handleChange}
            addToCart = {props.addToCart}
            handleIncrement = {props.handleIncrement}
        />            
    </>
    )
}

export default Home;