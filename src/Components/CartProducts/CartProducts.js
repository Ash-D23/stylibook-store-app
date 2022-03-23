import React from 'react';
import { useCart } from '../../Context/CartContext/CartContext';
import SingleCartProduct from '../SingleCartProduct/SingleCartProduct';
import Loader from '../Loader/Loader'
import './CartProducts.css'

function CartProducts() {

  const {cartitems, cartloading} = useCart()
  
  return (
      <div className="checkout__products">
          { cartitems.length === 0 ? <p className="text--large margin--large">No items in Cart</p> : <h3 className="checkout__title margin--large">Items in Cart</h3> }
          { cartloading && <Loader />}
          {cartitems?.map((item)=>{
            return <SingleCartProduct key={item._id} cartItem={item} />
          })}
      </div>
  )
}

export default CartProducts