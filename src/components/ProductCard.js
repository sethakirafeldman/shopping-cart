import React from "react";
import data from "../../public/data.json"

const ProductCard = () => {
    console.log(data.products);

    return (
        <div>
            <h1>Products</h1>
            {data.products.map( (item) => {
            return (
                <div key = {item.index}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <img src={item.src} />
                </div>
            )
        })}
        </div>
    )
}

export default ProductCard;