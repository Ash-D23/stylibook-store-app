import React from 'react'
import { useNavigate } from 'react-router-dom'

function SingleProduct({ product: {_id, img, productName, bestSeller, price, originalprice} }){


  let navigate = useNavigate()
  
  return (
    <div class="card">
        <div className="card__image--container badge-content">
            <img onClick={()=> navigate('/product/'+ _id)} class="card__image" src={img} />
            {bestSeller ? <p class="badge badge--large badge-card-tr">Best Seller</p> : null}
        </div>
        <div class="card__body padding--medium">
            <div class="card__heading">
                <div class="container__flex--spacebetween">
                    <h2 class="card__title text--large">{productName}</h2>
                    <i class="far fa-heart text--large"></i>
                </div>
            </div> 
            <div class="card__description margin-bottom--small">
                <p class="clr--secondary text--bold">Rs. {price} <span class="text--line-through"> {originalprice}</span></p>
            </div>
            <div class="card__actions">
                <div class="card__actions--buttons">
                   <button class="btn btn--secondary btn--icon cart"><i class="fas fa-shopping-cart"></i>Add to Cart</button>              
                </div>
            </div>
        </div> 
    </div>
  )
}

export default SingleProduct