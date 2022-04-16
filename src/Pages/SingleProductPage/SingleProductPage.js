import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductMain, Loader, ProductReviews }  from '../../Components';
import { useAuthContext } from '../../Context';

const productreviewsdata = [{ _id: 1, userID: 1, userProfile: '/Images/book.jpg', review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quae dolores temporibus molestiae placeat, obcaecati', ratings: '4'}]

function SingleProductPage() {

  const [singleproduct, setsingleproduct] = useState({})
  const [productReviews, setproductReviews] = useState([])
  const [isLoading, setisLoading] = useState(true)

  const { user } = useAuthContext()

  const navigate = useNavigate()

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
    if(!user){
      navigate('/login')
      return
    }
    let newobj = { review, ratings, _id: productReviews.length+1, userID: user._id, userProfile: '/Images/book.jpg',}
    setproductReviews([...productReviews, newobj])
  }

  const DeleteReview = (_id) => {
    setproductReviews(productReviews.filter((item) => item._id !== _id))
  }

  const EditReview = (review) => {
    setproductReviews(productReviews.map((item) => item._id === review._id ? review : item))
  }

  useEffect(() => {
    getSingleProduct()
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