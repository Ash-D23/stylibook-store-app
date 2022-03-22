import React from 'react'
import { useNavigate } from 'react-router-dom'

function SingleProduct({ product: {_id, img, productName, bestseller, price, originalprice} }){


  let navigate = useNavigate()
  
  return (
    <div className="card">
        <div className="card__image--container badge-content">
            <img onClick={()=> navigate('/product/'+ _id)} className="card__image" src={img} />
            {bestseller ? <p className="badge badge--large badge-card-tr">Best Seller</p> : null}
        </div>
        <div className="card__body padding--medium">
            <div className="card__heading">
                <div className="container__flex--spacebetween">
                    <h2 className="card__title text--large">{productName}</h2>
                    <i className="far fa-heart text--large"></i>
                </div>
            </div> 
            <div className="card__description margin-bottom--small">
                <p className="clr--secondary text--bold">Rs. {price} <span className="text--line-through"> {originalprice}</span></p>
            </div>
            <div className="card__actions">
                <div className="card__actions--buttons">
                   <button className="btn btn--secondary btn--icon cart"><i className="fas fa-shopping-cart"></i>Add to Cart</button>              
                </div>
            </div>
        </div> 
    </div>
  )
}

export default SingleProduct