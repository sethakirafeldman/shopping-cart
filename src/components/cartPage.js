import React from 'react';

const CartPage = (props) =>{
    // console.log(props)
    let itemArr = [];
    const cartItems = props.cartItems;
    const product = props.data.products;
    // console.log(cartItems)
    // store item names somewhere as reference....
    itemArr = cartItems;
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
                        <img src= {product[item.index].src}  className="cart-thumbnail"/>
                        <h5 className={`quantity-item-${item.index}`}>{item.quantity}</h5>
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