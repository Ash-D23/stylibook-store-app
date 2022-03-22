import React, { useState, useEffect } from 'react'
import ProductMain from '../../Components/ProductMain/ProductMain'


const singleproductdata = {id: 1, img: '/Images/book.jpg', productName: 'Do Epic Shit', price:'500', productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fringilla ac mauris eget porta. Cras vitae nulla in arcu lacinia mollis. Praesent molestie, est ac vehicula ornare, mi enim convallis nisi, nec ultrices arcu felis in turpis. Curabitur porttitor eleifend lobortis. Quisque id erat at urna viverra rhoncus. Donec porttitor tempor ante vitae semper. Quisque eget velit vel eros dignissim posuere semper et magna.', 
CategoryName: 'Fiction', Seller: 'Anonymous', ratings: '5'}

function SingleProductPage() {

  const [singleproduct, setsingleproduct] = useState({})

  useEffect(() => {
     setsingleproduct(singleproductdata) 

  }, [])
  
  return (
    <>
      <ProductMain product={singleproduct} />
    </>
  )
}

export default SingleProductPage