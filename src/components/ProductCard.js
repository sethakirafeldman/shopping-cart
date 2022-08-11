import React from "react";

const ProductCard = (props) => {

    return (
    <>
        <h1>Products</h1>
        <div id="products-container">
            {props.data.products.map( (item) => {
            return (
                <div 
                    className="product-card"
                    key = {item.index}
                    id={`item-${item.index}`}
                >
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <img 
                        className="product-image"
                        alt={item.name}
                        src={item.src} 
                    />
                    <h4>{`$${item.price}`}</h4>
                    <div 
                        className="quantity"
                        id={`product-${item.index}`}
                        >
                        <input 
                            className ="quantity-input" 
                            type= "number" 
                            placeholder="0"
                            min="0"
                            step= "1"
                            onKeyDown={(event)=>props.handleKeyPress(event)}
                            // onChange={(event) => {
                            //     (props.handleChange(event))}}
                            ></input>
                        <button 
                            alt = "reduce number of items"
                            className="fa-solid fa-minus"
                            onClick={(event)=>(props.handleIncrement(event, "minus"))}
                            >
                        </button>
                        <button 
                            alt = "increase number of items"
                            className="fa-solid fa-plus"
                            onClick={(event) => (props.handleIncrement(event, "plus"))}
                        ></button>
                        <button 
                            alt ="add to cart icon"
                            className="fa-solid fa-cart-plus"
                            onClick={(event) => (props.addToCart(event, item.index))} 
                        ></button>
                    </div>
                </div>
            )
        })}
        </div>
    </>
    )
}

export default ProductCard;