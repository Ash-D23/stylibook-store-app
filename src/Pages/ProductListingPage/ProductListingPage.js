import React from 'react';
import {FilterProductsProvider} from '../../Context/FilterProducts/FilterProductContext';
import Filters from '../../Components/Filters/Filters';
import ProductList from '../../Components/ProductList/ProductList';
import './ProductListingPage.css'

function ProductListingPage() {
  return (
    <FilterProductsProvider>
      <div className="product-main position--relative">
        <Filters />
        <ProductList />
      </div>
    </FilterProductsProvider>  
  )
}

export default ProductListingPage