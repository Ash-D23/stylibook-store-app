import React from 'react'
import { useCart } from '../../Context/CartContext/CartContext'
import { useWishlist } from '../../Context/WishlistContext/WishlistContext'

function SingleCartProduct({ cartItem }) {

  const { removeproductfromcart, increasequantity, decreasequantity } = useCart();
  const { checkproductinwishlist, addtoWishlist, removefromwishlist } = useWishlist();

  const { _id, productName, img , price, quantity} = cartItem;

  const isProductInWishlist = checkproductinwishlist(_id)

  const addtoWishlistandremovefromcart = () => {
    addtoWishlist(cartItem)
    removeproductfromcart(_id)
  }

  return (
    <div className="card card--horizontal margin--medium border--grey">
        <div className="card__image--container">
            <img className="card__image " src={img} />
        </div>
        <div className="card__body padding--medium">
            <div className="card__heading">
                <div className="container__flex--spacebetween margin-bottom--small">
                    <h2 className="card__title text--large">{productName}</h2>
                    <p><i onClick={() => decreasequantity(_id)} className="fas fa-minus"></i> <span className="text--large border--grey product-quantity">{quantity}</span> <i onClick={()=>increasequantity(_id)} className="fas fa-plus"></i></p>
                </div>
            </div> 
            <div className="card__description margin-bottom--small">
                <p className="clr--secondary text--bold">Rs. {price} <span className="text--line-through"> {parseInt(price)+200} </span></p>
                
            </div>
            <div className="card__actions">
                <div className="card__actions--buttons">
                    <button onClick={() => removeproductfromcart(_id)} className="btn btn--secondary btn--icon">Remove from Cart</button>
                    { !isProductInWishlist ? <button onClick={addtoWishlistandremovefromcart} className="btn btn--primary border--grey">Move to Wishlist</button> :
                     <button onClick={()=> removefromwishlist(_id)} className="btn btn--primary border--grey">Wishlisted</button> }            
                </div>
            </div>
        </div> 
    </div>
  )
}

export default SingleCartProduct