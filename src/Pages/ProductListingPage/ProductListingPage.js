import React from 'react'

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