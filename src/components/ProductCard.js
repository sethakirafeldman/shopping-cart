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
                            onChange={(event) => (props.handleChange(event))}
                            ></input>
                        <i 
                            className="fa-solid fa-minus"
                            onClick={(event)=>(props.handleIncrement(event, "minus"))}
                        
                            >
                            </i>
                        <i 
                            className="fa-solid fa-plus"
                            onClick={(event) => (props.handleIncrement(event, "plus"))}
                            
                        ></i>
                        <i 
                            data-testid="cart-test"
                            className="fa-solid fa-cart-plus"
                            onClick={props.addToCart} 
                             ></i>
                    </div>
                </div>
            )
        })}
        </div>
    </>
    )
}

export default ProductCard;