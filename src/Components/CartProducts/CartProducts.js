import React from 'react';
import { useCart } from '../../Context';
import { SingleCartProduct } from '../SingleCartProduct/SingleCartProduct';
import { Loader } from '../Loader/Loader'
import './CartProducts.css'

function CartProducts({ checkout }) {

  const {cartItems, cartLoading} = useCart()
  
  return (
      <div className="checkout__products">
          { cartItems.length === 0 ? <p className="text--large margin--large">No items in Cart</p> : <h3 className="checkout__title margin--large">Items in Cart</h3> }
          { cartLoading && <Loader />}
          {cartItems?.map((item)=>{
            return <SingleCartProduct key={item._id} cartItem={item} checkout={checkout} />
          })}
          { cartItems.length === 0 ? (
              <div className='empty-cart--container'>
                <img src="./Images/empty-cart.svg" alt="cart product"/>
              </div>
            ) : null}
      </div>
  )
}

export { CartProducts }