import React, {useState, useEffect} from 'react';
import { useFilterProducts } from '../../Context/FilterProductContext';
import Singleproduct from '../SingleProduct/Singleproduct';
import './ProductList.css';


function ProductList() {

  const { filteredproducts: products} = useFilterProducts()
  
  return (
    <>
      <div className="products product--cards container__flex--wrap">
          {products.map((item)=>{
            return <Singleproduct product={item} />
          })}
      </div>
    </>
  )
}

export default ProductList