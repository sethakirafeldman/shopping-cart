import React from 'react';

const CartPage = (props) =>{

    // checkes for duplicate cart items then adds 
    // doesn't work for adding unique products though.
    for (let i=0; i < props.itemCount.length; i++) {
        for (let j=1; j < props.itemCount.length; j++) {
            if (props.itemCount[i].name === props.itemCount[j].name) {
                props.itemCount[i].quantity += props.itemCount[j].quantity;
                props.itemCount.splice(j);
            }
        }
    }

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