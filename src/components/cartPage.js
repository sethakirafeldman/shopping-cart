import React from 'react';

const CartPage = (props) =>{
    
    let itemArr = [];
    const cartItems = props.cartItems;
    const product = props.data.products;
    itemArr = cartItems;

    // function that adjusts cartitems state according to value in 
    //`quantity-item-${item.index}
    // this should auto update total price displayed

    return (
            <section id='cart-container' className='cart-drawer-enter'>
                <h1>Cart</h1>
                <>
                {cartItems.map((item) => {
                    return( 
                    <div 
                        className = "product-card" 
                        key ={item.name}
                        id = {`cartItem-${item.index}`}
                        >
                        <h4>{product[item.index].name}</h4>
                        <img src= {product[item.index].src} className="cart-thumbnail"/>
                        <section className="cart-incrementor"> 
                            <button 
                                alt = "decrease number of items"
                                className="fa-solid fa-minus"
                                onClick={(event) => (props.handleIncrement(event, "minus"))}
                            ></button>
                            <input 
                                id = {`quantity-item-${item.index}`}
                                className ="quantity-input" 
                                type= "number" 
                                value={item.quantity}
                                min="0"
                                step= "1"
                                onChange = {props.handleChange}
                                onKeyDown={(event)=>props.handleKeyPress(event)
                                }
                                
                            ></input>
                            {/* <h5 className={`quantity-item-${item.index}`}>{item.quantity}</h5> */}
                            <button 
                                alt = "increase number of items"
                                className="fa-solid fa-plus"
                                onClick={(event) => (props.handleIncrement(event, "plus"))}
                            ></button>
                            
                        </section>

                        <h5>{`$${product[item.index].price * item.quantity}`}</h5>
                    </div>
                    )
                })
                }    
                </>    
                <button className='cart-button'>Checkout</button>
            </section>
    )
}

export default CartPage;