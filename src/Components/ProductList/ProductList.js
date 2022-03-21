import React, {useState, useEffect} from 'react';
import { useFilterProducts } from '../../Context/FilterProducts/FilterProductContext';
import SingleProduct from '../SingleProduct/SingleProduct';
import './ProductList.css';


function ProductList() {

  const { filteredproducts: products} = useFilterProducts()
  
  return (
    <>
      <div className="products product--cards container__flex--wrap">
          {products.map((item)=>{
            return <SingleProduct product={item} />
          })}
      </div>
    </>
  )
}

export default ProductList