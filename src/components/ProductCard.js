import React from "react";
// import data from "../data.json"

const ProductCard = (props) => {
    console.log(props.data);

    return (
        <div>
            <h1>Products</h1>
            {props.data.products.map( (item) => {
                console.log(item.src)
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