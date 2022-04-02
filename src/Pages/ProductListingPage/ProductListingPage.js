import React from 'react';
import {FilterProductsProvider} from '../../Context';
import { Filters, ProductList } from '../../Components';
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

export { ProductListingPage }