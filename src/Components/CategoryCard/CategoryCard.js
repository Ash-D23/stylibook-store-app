import React from 'react';
import { useNavigate } from 'react-router-dom';

function CategoryCard({ category : {_id, img, categoryName}}) {

  let navigate = useNavigate();
  return (
    <div onClick={()=> navigate('/products?category='+categoryName)} className="category--card container--relative">
        <div classNameName="category--image">
          <img src={img} />
        </div>
        <h3 className="category--title">{categoryName}</h3>
        <div className="category--overlay shadow--bottom">
        </div>
    </div>
  )
}

export default CategoryCard