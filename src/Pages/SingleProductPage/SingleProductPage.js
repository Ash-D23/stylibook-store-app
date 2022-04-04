import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProductMain, Loader }  from '../../Components';

function SingleProductPage() {

  const [singleproduct, setsingleproduct] = useState({})
  const [isLoading, setisLoading] = useState(true)

  const getSingleProduct = async () => {
    try{
      let result = await axios.get('/api/products/'+params.id)
      if(result.data?.product){
        setsingleproduct(result.data?.product)
      }
      setisLoading(false)
    }catch(err){
      console.error(err)
      setisLoading(false)
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [])

  const params = useParams()
  
  return (
    <>
      { isLoading ? <Loader /> : <ProductMain product={singleproduct} /> }
    </>
  )
}

export { SingleProductPage }