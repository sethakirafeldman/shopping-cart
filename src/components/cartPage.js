import React from 'react';

const CartPage = (props) =>{
    let itemArr = [];
    let namesArr = [];
    // checkes for duplicate cart items then adds 
    // doesn't work for adding unique products though.
    // sort array by index first
    const cartItems = props.cartItems;
    const product = props.data.products;
    console.log(cartItems)
    // store item names somewhere as reference....
    itemArr = cartItems;


    // do something with creating two arrays
    // one with original, and one with only uniqueItem. then get quantity from original
    // const set = new Set();
    // const uniqueItems = itemArr.filter(item => {
    //     const alreadyHas = set.has(item.name);
    //     console.log(item);
    //     set.add(item.name);
    //     // only adds to uniqueItem if not alreadyHas
    //     return !alreadyHas;
    // })

    // uniqueItems.forEach((uniqueItem)=>{
    //     let num = [];
    //     itemArr.forEach((origItem) => {
    //         if (uniqueItem.name == origItem.name) {
              
    //             num.push(origItem.quantity);
    //             console.log(num)
    //             // uniqueItem.quantity += origItem.quantity;
    //             let i = 0;
    //             let sum = 0;
    //             while (i < num.length) {
    //                 sum += num[i];
    //                 i++;
    //             }
    //             console.log(sum)
    //             uniqueItem.quantity = sum;
    //         }

    //     })
    // })
    // console.log(uniqueItems)
   
     



    // for (let i=0; i < itemArr.length; i++) {
    //   for (let j= 1; j < itemArr.length; j++) {
    //       console.log(itemArr);
    //       // checks if first item name matches second, then moves up
    //       if (itemArr[i].name === itemArr[j].name) {
    //             itemArr[i].quantity += itemArr[j].quantity;
    //             itemArr.splice(j);
    //             j++;
    //       }
    //   }
    // }
    return (
        <>
            <h1>Cart</h1>
            <section id='cart-container'>
            {cartItems.map((item) => {
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