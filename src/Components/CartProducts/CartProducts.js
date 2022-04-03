import React from 'react';
import { useCart } from '../../Context';
import { SingleCartProduct } from '../SingleCartProduct/SingleCartProduct';
import { Loader } from '../Loader/Loader'
import './CartProducts.css'

function CartProducts({ checkout }) {

  const {cartitems, cartloading} = useCart()
  
  return (
      <div className="checkout__products">
          { cartitems.length === 0 ? <p className="text--large margin--large">No items in Cart</p> : <h3 className="checkout__title margin--large">Items in Cart</h3> }
          { cartloading && <Loader />}
          {cartitems?.map((item)=>{
            return <SingleCartProduct key={item._id} cartItem={item} checkout={checkout} />
          })}
          { cartitems.length === 0 ? (
              <div className='empty-cart--container'>
                <img src="./Images/empty-cart.svg" />
              </div>
            ) : null}
      </div>
  )
}

export { CartProducts }