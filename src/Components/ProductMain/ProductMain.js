import React from 'react';
import './ProductMain.css';
import { Ratings } from '../Ratings/Ratings';
import { useAuthContext, useCart, useWishlist } from '../../Context';
import { useNavigate } from 'react-router-dom';
import { NotFoundPage } from '../../Pages';

function ProductMain({ product }) {
  
  const { _id, img, productName, seller, price, description, category ,originalPrice, ratings } = product || {}

  const { user } = useAuthContext()

  const { addToCart, checkItemInCart } = useCart()

  const { checkProductInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const isProductInCart = checkItemInCart(_id)

  const isProductInWishlist = checkProductInWishlist(_id)

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

  let navigate = useNavigate()

  return !product ? <NotFoundPage /> : (
    <div className="single-product--container">
        <div className="product__image--container">
            <div>
                <img className="product__image" src={img} alt="product" />
            </div>
            <div className="product__btn--container margin-tb--large">
            { isProductInWishlist ? <button onClick={toggleWhishlist} className="btn btn--primary btn--icon border--grey view margin-right--medium"><i className="fas fa-heart text--medium "></i>Wishlisted</button> : <button onClick={toggleWhishlist} className="btn btn--primary btn--icon border--grey view margin-right--medium"><i className="far fa-heart text--medium"></i> Wishlist</button> }
            { isProductInCart ? <button onClick={()=> navigate('/cart')}className="btn btn--secondary btn--icon cart">Go to Cart</button> :
            <button onClick={checkAuthAndAddToCart} className="btn btn--secondary btn--icon cart"><i className="fas fa-shopping-cart"></i>Add to Cart</button> }                            
            </div>
        </div>

        <div className="product__description">
            <h2 className="product__title margin-bottom--large">{productName}</h2>
            <p className="margin-tb--small">{category?.replace('_',' ')}</p>

            <p className="clr--secondary text--bold margin-tb--medium">Rs. {price} <span className="text--line-through"> {originalPrice} </span></p>

            <p className="margin-tb--medium">{description}</p>

            <div className="container__flex container__flex--wrap margin-tb--medium">
                <p className="text--bold margin-right--medium">Seller: </p>
                <p>{seller}</p>
            </div>

            <div className="product__rating--container container__flex--wrap margin-tb--medium">
                <p className="text--bold margin-right--medium">Ratings: </p>
                <Ratings value={ratings} />
            </div>


        </div>
    </div>
  )
}

export { ProductMain }