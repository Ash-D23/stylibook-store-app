import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext, useCart, useWishlist } from '../../Context'

function SingleProduct({ product, wishlistproduct }){

  const {_id, img, productName, bestseller, price, originalprice} = product

  const { user } = useAuthContext()

  const { addtocart, checkitemincart } = useCart()

  const { checkproductinwishlist, addtoWishlist, removefromwishlist } = useWishlist()

  const isProductInCart = checkitemincart(_id)

  const isProductInWishlist = checkproductinwishlist(_id)

  const navigate = useNavigate()

  const toggleWhishlist = () => {
      if(!user){
          navigate('/login')
          return
      }

      if(isProductInWishlist){
          removefromwishlist(_id)
      }else{
          addtoWishlist(product)
      }
  }

  const checkauthandaddtocart = () => {
    if(!user){
        navigate('/login')
        return
    }
    addtocart(product)
  }

  return (
    <div className="card">
        <div className="card__image--container badge-content">
            <img onClick={()=> navigate('/product/'+ _id)} className="card__image" src={img} />
            {bestseller && !wishlistproduct ? <p className="badge badge--large badge-card-tr">Best Seller</p> : null}
            { wishlistproduct ?  <i onClick={()=> removefromwishlist(_id)} className="fas fa-times clr--primary card--dismiss card-position--tr"></i> : null}
        </div>
        <div className="card__body padding--medium">
            <div className="card__heading">
                <div className="container__flex--spacebetween">
                    <h2 className="card__title text--large">{productName}</h2>
                    { isProductInWishlist ? <i onClick={toggleWhishlist} className="fas fa-heart text--large clr--secondary"></i> : <i onClick={toggleWhishlist} className="far fa-heart text--large"></i> }
                </div>
            </div> 
            <div className="card__description margin-bottom--small">
                <p className="clr--secondary text--bold">Rs. {price} <span className="text--line-through"> {originalprice}</span></p>
            </div>
            <div className="card__actions">
                <div className="card__actions--buttons">
                { isProductInCart ? <button onClick={()=> navigate('/cart')}className="btn btn--secondary btn--icon cart">Go to Cart</button> :
                    <button onClick={()=> checkauthandaddtocart()} className="btn btn--secondary btn--icon cart"><i className="fas fa-shopping-cart"></i>Add to Cart</button> }  
                </div>
            </div>
        </div> 
    </div>
  )
}

export { SingleProduct }