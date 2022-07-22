import React from "react";

const ProductCard = (props) => {
    console.log(props.data);

    return (
    <>
        <h1>Products</h1>
        <div id="products-container">
            {props.data.products.map( (item) => {
            return (
                <div 
                className="product-card"
                key = {item.index}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <img 
                        className="product-image"
                        alt={item.name}
                        src={item.src} 
                    />
                    <h4>{item.price}</h4>
                    <i class="fa-solid fa-cart-plus"></i>

                </div>
            )
        })}
        </div>
    </>
    )
}

export default ProductCard;