import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductMain, Loader, ProductReviews }  from '../../Components';
import { useAuthContext } from '../../Context';
import { toasterror, toastsuccess } from '../../Utilities';

function SingleProductPage() {

  const [singleproduct, setsingleproduct] = useState(null)
  const [productReviews, setproductReviews] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [initialLoading, setinitialLoading] = useState(true)

  const { user } = useAuthContext()

  const navigate = useNavigate()

  const params = useParams()

  let config = {
    headers: {
      authorization: user?.token,
    }
  }

  const getSingleProductAndReviews = async () => {
    try{
      const productResult = await axios.get('/api/products/'+params.id)
      const productReviews = await axios.get('/api/reviews/'+params.id)
      setsingleproduct(productResult.data?.product)
      setproductReviews(productReviews.data?.reviews)
    }catch(err){
      console.error(err)
    }finally{
      setinitialLoading(false)
    }
  }

  const addReview = async (review, ratings) => {
    if(!user){
      navigate('/login')
      return
    }
    const newReview = { review, ratings, userId: user._id, productId: singleproduct._id, userProfile: '/Images/book.jpg'}
    setisLoading(true)
    try{
      const result = await axios.post('/api/reviews/add', newReview, config)
      setproductReviews([...productReviews, result?.data.review])
      toastsuccess('Review Added Succesfully')
    }catch(err){
      console.error(err)
      toasterror('An error Occurred')
    }finally{
      setisLoading(false)
    }
  }

  const DeleteReview = async (_id) => {
    setisLoading(true)
    try{
      await axios.delete('/api/reviews/'+_id, config)
      setproductReviews(productReviews.filter((item) => item._id !== _id))
      toastsuccess('Review Deleted Succesfully')
    }catch(err){
      console.error(err)
      toasterror('An error Occurred')
    }finally{
      setisLoading(false)
    }
  }

  const EditReview = async (review) => {
    setisLoading(true)
    try{
      await axios.post('/api/reviews/edit', review, config)
      setproductReviews(productReviews.map((item) => item._id === review._id ? review : item))
      toastsuccess('Review Edited Succesfully')
    }catch(err){
      console.error(err)
      toasterror('An error Occurred')
    }finally{
      setisLoading(false)
    }
  }

  useEffect(() => {
    getSingleProductAndReviews()
  }, [params.id])
  
  return initialLoading ? <Loader /> : (
    <>
      <ProductMain product={singleproduct} /> 
      { singleproduct ? <ProductReviews userReviews={productReviews} isLoading={isLoading} productId={singleproduct?._id} addReview={addReview} DeleteReview={DeleteReview} EditReview={EditReview} /> : null }
    </>
  )
}

export { SingleProductPage }