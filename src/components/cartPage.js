import React from 'react';

const CartPage = (props) =>{
    const product = props.data.products;
    return (
        <>
            <h1>Cart</h1>
            <section id='cart-container'>
            {props.itemCount.map((item) => {
                return( 

                <div className = "product-card" key ={item.name}>
                    <h4>{product[item.index].name}</h4>
                    <img src= {product[item.index].src}  className="cart-thumbnail"/>
                    <h5>{item.quantity}</h5>
                </div>
                )
            })
            }    
            </section>     
        </>
    )
}

export default CartPage;