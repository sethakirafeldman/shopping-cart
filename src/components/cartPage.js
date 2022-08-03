import React from 'react';

const CartPage = (props) =>{
    console.log(props.itemCount);
    // do something with grabbing the end of name prop to get image from
    // data.js
    console.log(props.data.products[0].src)

    return (
        <>
            <h1>Cart</h1>
            {props.itemCount.map((item) => {
                return( 
                <div className = "cart-item"key ={item.name}>
                    <h4>{item.name}</h4>
                    <h5>{item.quantity}</h5>
                    <img src= {props.data.products[item.index].src} />
                </div>
                )
            })
            }         
        </>
    )
}

export default CartPage;