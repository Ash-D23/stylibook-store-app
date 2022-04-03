import React from 'react';
import { SingleProduct } from '../../Components';
import { useWishlist } from '../../Context';

function WishlistPage() {

  const { wishlistitems } = useWishlist()

  return (
    <div className="container--90 wishlist--container">
        <h2 className="text--center padding--large">Wishlist</h2>
        <div className="product--cards container__flex--center container__flex--wrap">
            {wishlistitems?.map((item)=> {
              return <SingleProduct key={item._id} product={item} wishlistproduct={true} />
            })}
            { wishlistitems.length === 0 ? (
              <div className='empty-cart--container'>
                <img src="./Images/empty-cart.svg" />
              </div>
            ) : null}
        </div>  
    </div>
  )
}

export { WishlistPage }