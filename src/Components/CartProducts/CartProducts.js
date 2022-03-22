import React from 'react';
import { useCart } from '../../Context/CartContext/CartContext';
import SingleCartProduct from '../SingleCartProduct/SingleCartProduct'
import './CartProducts.css'

function CartProducts() {

  const {cartitems} = useCart()
  
  return (
      <div className="checkout__products">
          <h3 className="checkout__title margin--large">Items in Cart</h3>
          {cartitems?.map((item)=>{
            return <SingleCartProduct cartItem={item} />
          })}
      </div>
  )
}

export default CartProducts