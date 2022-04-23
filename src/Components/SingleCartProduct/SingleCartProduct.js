import React from 'react'
import { useCart, useWishlist } from '../../Context'

function SingleCartProduct({ cartItem, checkout }) {

  const { removeProductFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const { checkProductInWishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const { _id, productName, img , price, quantity} = cartItem;

  const isProductInWishlist = checkProductInWishlist(_id)

  const addToWishlistandremovefromcart = () => {
    addToWishlist(cartItem)
    removeProductFromCart(_id)
  }

  return (
    <div className="card card--horizontal margin--medium border--grey">
        <div className="card__image--container">
            <img className="card__image " src={img} alt="cart product" />
        </div>
        <div className="card__body padding--medium">
            <div className="card__heading">
                <div className="container__flex--spacebetween margin-bottom--small">
                    <h2 className="card__title text--large">{productName}</h2>
                    { checkout ? null :<p className='cart__quantity--section'><i onClick={() => decreaseQuantity(cartItem)} className="fas fa-minus"></i> <span className="text--large border--grey product-quantity">{quantity}</span> <i onClick={()=>increaseQuantity(cartItem)} className="fas fa-plus"></i></p> }
                </div>
                { checkout ? <p className='margin-tb--medium'>Quantity: {quantity}</p> : null}
            </div> 
            <div className="card__description margin-bottom--small">
                <p className="clr--secondary text--bold">Rs. {price} <span className="text--line-through"> {parseInt(price)+200} </span></p>
                
            </div>
            <div className="card__actions">
                { !checkout ?<div className="card__actions--buttons">
                    <button onClick={() => removeProductFromCart(_id)} className="btn btn--secondary btn--icon">Remove from Cart</button>
                    { !isProductInWishlist ? <button onClick={addToWishlistandremovefromcart} className="btn btn--primary border--grey">Move to Wishlist</button> :
                     <button onClick={()=> removeFromWishlist(_id)} className="btn btn--primary border--grey">Wishlisted</button> }            
                </div> : null }
            </div>
        </div> 
    </div>
  )
}

export { SingleCartProduct }