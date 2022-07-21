import React from "react";
import data from "../data.json"
import capo from "../assets/capo.jpg"

const ProductCard = () => {
    console.log(data.products);

    return (
        <div>
            <h1>Products</h1>
            {data.products.map( (item) => {
                console.log(window.location.origin + item.src)
            return (
                <div key = {item.index}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <img src={window.location.origin + item.src} />
                </div>
            )
        })}
        </div>
    )
}

export default ProductCard;