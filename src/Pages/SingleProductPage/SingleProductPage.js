import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductMain, Loader, ProductReviews }  from '../../Components';
import { useAuthContext } from '../../Context';

function SingleProductPage() {

  const [singleproduct, setsingleproduct] = useState({})
  const [productReviews, setproductReviews] = useState([])
  const [isLoading, setisLoading] = useState(true)

  const { user } = useAuthContext()

  let config = {
    headers: {
      authorization: user?.token,
    }
  }

  const navigate = useNavigate()

  const getSingleProductAndReviews = async () => {
    try{
      const productResult = await axios.get('/api/products/'+params.id)
      const productReviews = await axios.get('/api/reviews/'+params.id)
      setsingleproduct(productResult.data?.product)
      setproductReviews(productReviews.data?.reviews)
    }catch(err){
      console.error(err)
    }finally{
      setisLoading(false)
    }
  }

  const addReview = async (review, ratings) => {
    if(!user){
      navigate('/login')
      return
    }
    const newobj = { review, ratings, userId: user._id, productId: singleproduct._id, userProfile: '/Images/book.jpg'}
    try{
      const result = await axios.post('/api/reviews/add', newobj, config)
      setproductReviews([...productReviews, result?.data.review])
    }catch(err){
      console.error(err)
    }
  }

  const DeleteReview = async (_id) => {
    try{
      const result = await axios.delete('/api/reviews/'+_id, config)
      setproductReviews(productReviews.filter((item) => item._id !== _id))
    }catch(err){
      console.error(err)
    }
  }

  const EditReview = async (review) => {
    try{
      const result = await axios.post('/api/reviews/edit', review, config)
      setproductReviews(productReviews.map((item) => item._id === review._id ? review : item))
    }catch(err){
      console.error(err)
    }    
  }

  useEffect(() => {
    getSingleProductAndReviews()
  }, [])

  const params = useParams()
  
  return isLoading ? <Loader /> : (
      <>
        <ProductMain product={singleproduct} /> 
        <ProductReviews userReviews={productReviews} productID={singleproduct.id} addReview={addReview} DeleteReview={DeleteReview} EditReview={EditReview} />
      </>
  )
}

export { SingleProductPage }