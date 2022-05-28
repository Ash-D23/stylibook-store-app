import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext, useCart, useWishlist } from '../../Context'

function SingleProduct({ product, wishlistproduct }){

  const {_id, img, productName, bestSeller, price, originalPrice, ratings} = product

  const { user } = useAuthContext()

  const { addToCart, checkItemInCart } = useCart()

  const { checkProductInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const isProductInCart = checkItemInCart(_id)

  const isProductInWishlist = checkProductInWishlist(_id)

  const navigate = useNavigate()

  const toggleWhishlist = () => {
      if(!user){
          navigate('/login')
          return
      }

      if(isProductInWishlist){
          removeFromWishlist(_id)
      }else{
          addToWishlist(product)
      }
  }

  const checkAuthAndAddToCart = () => {
    if(!user){
        navigate('/login')
        return
    }
    addToCart(product)
  }

  return (
    <div className="card">
        <div className="card__image--container badge-content">
            <img style={{width: '300px', height: '200px'}} onClick={()=> navigate('/product/'+ _id)} className="card__image" src={img} alt="product" />
            {bestSeller && !wishlistproduct ? <p className="badge badge--large badge-card-tr">Best Seller</p> : null}
            { wishlistproduct ?  <i onClick={()=> removeFromWishlist(_id)} className="fas fa-times clr--primary card--dismiss card-position--tr"></i> : null}
            <span className="para-rating__container card--ratings">{ratings} &#9733;</span>
        </div>
        <div className="card__body padding--medium">
            <div className="card__heading">
                <div className="container__flex--spacebetween">
                    <h2 className="card__title text--large">{productName}</h2>
                    { isProductInWishlist ? <i onClick={toggleWhishlist} className="fas fa-heart text--large clr--secondary"></i> : <i onClick={toggleWhishlist} className="far fa-heart text--large"></i> }
                </div>
            </div> 
            <div className="card__description margin-bottom--small">
                <p className="clr--secondary text--bold">Rs. {price} <span className="text--line-through"> {originalPrice}</span></p>
            </div>
            <div className="card__actions">
                <div className="card__actions--buttons">
                { isProductInCart ? <button onClick={()=> navigate('/cart')}className="btn btn--secondary btn--icon cart">Go to Cart</button> :
                    <button onClick={()=> checkAuthAndAddToCart()} className="btn btn--secondary btn--icon cart"><i className="fas fa-shopping-cart"></i>Add to Cart</button> }  
                </div>
            </div>
        </div> 
    </div>
  )
}

export { SingleProduct }