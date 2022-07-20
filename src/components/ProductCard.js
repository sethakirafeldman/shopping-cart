import React from "react";
import data from "../data.json"

const ProductCard = () => {
    console.log(data.products);
    return (
        data.products.map( (card) => {
            <div 
                key = {card.index}
                className="product-card"
            >
                <h3>{card.name}</h3>
                <p>{card.description}</p>
            </div>
        })
    )
}

export default ProductCard;