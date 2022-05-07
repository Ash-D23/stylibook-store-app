import React from 'react';
import { useFilterProducts } from '../../Context';
import { SingleProduct } from '../SingleProduct/SingleProduct';
import { Pagination } from '../Pagination/Pagination'
import { Loader } from '../Loader/Loader'
import './ProductList.css';


function ProductList() {

  const { filteredproducts: products, Loading} = useFilterProducts()
  
  return (
    <>
    { Loading ? <Loader /> : <div className="products product--cards container__flex--wrap">
      <Pagination data={products} Component={SingleProduct} limit={8} />
    </div> }
    </>
  )
}

export { ProductList }