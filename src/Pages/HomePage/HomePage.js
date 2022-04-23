import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CategoryCard, SingleProduct, Loader, Slider } from '../../Components';
import './HomePage.css'

function HomePage() {

  const [categories, setcategories] = useState([])
  const [featuredproducts, setfeaturedproducts] = useState([])
  const [isloading, setisloading] = useState(false)

  const getCategoriesandProducts = async () => {
    try{
      let categoryresult = await axios.get('/api/categories')
      let featuredproductsresult = await axios.get('/api/featuredproducts')
      setcategories(categoryresult.data.categories)
      setfeaturedproducts(featuredproductsresult.data.Featuredproducts )
    }catch(err){
      console.error(err)
    }finally{
      setisloading(false)
    }
  }

  useEffect(() => {
    setisloading(true)
    getCategoriesandProducts()
  }, [])
  
  return (
    <>
      <div id="shop" className="home-slider__container container__flex--center">
          <Slider />
      </div>

      <div className="category--container">
            <div className="container__flex--center margin-bottom--large padding--large">
                <h2 className='home--heading'>Categories</h2>
            </div>
            { isloading ? <Loader /> : <div className="container__flex--center container__flex--wrap">
                {categories?.map((item)=>{
                    return <CategoryCard key={item._id} category={item} />
                })}
            </div>}
      </div>
      <div className="container--80 featured--products">
            <div className="container__flex--center margin-bottom--large">
                <h2 className='home--heading'>Top Products</h2>
            </div>
            { isloading ? <Loader /> : <div className="product--cards container__flex--center container__flex--wrap margin-bottom--medium">
                {featuredproducts?.map((item)=>{
                    return <SingleProduct key={item._id} product={item} />
                })}
            </div> }
      </div>

    </>
  )
}
export { HomePage }