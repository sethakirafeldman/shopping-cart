import React from 'react';
import ProductCard from './ProductCard';

const Home = (props) =>{

    return (
    <>  
        <ProductCard data = {props.data}/>            
    </>
    )
}

export default Home;