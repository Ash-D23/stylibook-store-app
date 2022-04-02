import React from 'react';
import { useFilterProducts } from '../../Context';
import { SingleProduct } from '../SingleProduct/SingleProduct';
import { Loader } from '../Loader/Loader'
import './ProductList.css';


function ProductList() {

  const { filteredproducts: products, Loading} = useFilterProducts()
  return (
    <>
      <div className="products product--cards container__flex--wrap">
          { Loading ? <Loader /> : products.map((item)=>{
            return <SingleProduct key={item._id} product={item} />
          })}
      </div>
    </>
  )
}

export { ProductList }