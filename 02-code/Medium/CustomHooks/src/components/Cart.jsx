import React from 'react'
import {CartItem} from "./CartItem";


function Cart({cart,onUpdateQuantity}) {
  return (
    <div className="cart">
      <h2>Shoppingcart</h2>
      {cart.map((item)=>
    (<CartItem 
    key={item.id}
    item={item}
    onUpdateQuantity={onUpdateQuantity}
    onRemove={onRemove}/>))}
    <div className="cart-total">
      <h3>Total:${typeof total==="string"?total:total.toFixed(2)}</h3>
      <button className="checkout-btn">Checkout</button>
    </div>

    </div>
  )
}

export default Cart