import React from 'react';
import './ProductMain.css';
import Ratings from '../Ratings/Ratings';
import { useCart } from '../../Context/CartContext/CartContext';
import { useWishlist } from '../../Context/WishlistContext/WishlistContext';
import { useNavigate } from 'react-router-dom';

function ProductMain({ product }) {
  
  const { _id, img, productName, seller, price, description, category ,originalprice, ratings} = product

  const { addtocart, checkitemincart } = useCart()

  const { checkproductinwishlist, addtoWishlist, removefromwishlist } = useWishlist()

  const isProductInCart = checkitemincart(_id)

  const isProductInWishlist = checkproductinwishlist(_id)

  const toggleWhishlist = () => {
        if(isProductInWishlist){
            removefromwishlist(_id)
        }else{
            addtoWishlist(product)
        }
   }

  let navigate = useNavigate()

  return (
    <div className="single-product--container">
        <div className="product__image--container">
            <div>
                <img className="product__image" src={img} />
            </div>
            <div className="product__btn--container margin-tb--large">
            { isProductInWishlist ? <button onClick={toggleWhishlist} className="btn btn--primary btn--icon border--grey view margin-right--medium"><i className="fas fa-heart text--medium "></i>Wishlisted</button> : <button onClick={toggleWhishlist} className="btn btn--primary btn--icon border--grey view margin-right--medium"><i className="far fa-heart text--medium"></i> Wishlist</button> }
            { isProductInCart ? <button onClick={()=> navigate('/cart')}className="btn btn--secondary btn--icon cart">Go to Cart</button> :
            <button onClick={()=> addtocart(product)} className="btn btn--secondary btn--icon cart"><i className="fas fa-shopping-cart"></i>Add to Cart</button> }                            
            </div>
        </div>

        <div className="product__description">
            <h2 className="product__title margin-bottom--large">{productName}</h2>
            <p className="margin-tb--small">{category}</p>

            <p className="clr--secondary text--bold margin-tb--medium">Rs. {price} <span className="text--line-through"> {originalprice} </span></p>

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

export default ProductMain