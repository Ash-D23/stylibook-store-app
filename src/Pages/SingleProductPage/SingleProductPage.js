import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductMain, Loader, ProductReviews }  from '../../Components';

const productreviewsdata = [{ id: 1, userID: 1, userProfile: '/Images/book.jpg', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quae dolores temporibus molestiae placeat, obcaecati', ratings: '4'}]

function SingleProductPage() {

  const [singleproduct, setsingleproduct] = useState({})
  const [productReviews, setproductReviews] = useState([])
  const [isLoading, setisLoading] = useState(true)

  const getSingleProduct = async () => {
    try{
      let result = await axios.get('/api/products/'+params.id)
      if(result.data?.product){
        setsingleproduct(result.data?.product)
      }
      setproductReviews(productreviewsdata)
      setisLoading(false)
    }catch(err){
      console.error(err)
      setisLoading(false)
    }
  }

  const addReview = (review, ratings) => {
    let newobj = { review, ratings, id: 2, userID: 2, userProfile: './Images/book.jpg',}
    setproductReviews([...productReviews, newobj])
  }

  const DeleteReview = (_id) => {
    setproductReviews(productReviews.filter((item) => item._id !== _id))
  }

  useEffect(() => {
    getSingleProduct()
  }, [])

  const params = useParams()
  
  return isLoading ? <Loader /> : (
      <>
        <ProductMain product={singleproduct} /> 
        <ProductReviews userReviews={productReviews} productID={singleproduct.id} addReview={addReview} />
      </>
  )
}

export { SingleProductPage }