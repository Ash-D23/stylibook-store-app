import axios from 'axios';
import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import SingleProduct from '../../Components/SingleProduct/SingleProduct';
import Loader from '../../Components/Loader/Loader'
import { toast } from 'react-toastify';
import './HomePage.css'

function HomePage() {

  const [categories, setcategories] = useState([])
  const [featuredproducts, setfeaturedproducts] = useState([])
  const [isloading, setisloading] = useState(false)

  const getCategoriesandProducts = async () => {
    let categoryresult = await axios.get('/api/categories')
    let featuredproductsresult = await axios.get('/api/featuredproducts')
    setcategories(categoryresult.data.categories)
    setfeaturedproducts(featuredproductsresult.data.Featuredproducts )
    setisloading(false)
  }

  useEffect(() => {
    setisloading(true)
    getCategoriesandProducts()
  }, [])
  
  return (
    <>
      <div id="shop" class="container__flex--center">
            <div class="container--50">
                <h2 class="text--center shop__title margin-tb--medium">Summer Sale 50% OFF</h2>
                <p class="text--center shop__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cumque saepe. </p>
                <div class="container__flex--center margin-tb--medium">
                    <button class="btn btn--secondary"><Link to="/products">Shop Now</Link></button>
                </div>
            </div>
      </div>
      { isloading ? <Loader /> : (
      <>
      <div class="category--container">
            <div class="container__flex--center margin-bottom--large padding--large">
                <h2>Categories</h2>
            </div>
            <div class="container__flex--center container__flex--wrap">
                {categories?.map((item)=>{
                    return <CategoryCard category={item} />
                })}
            </div>
      </div>
      <div class="container--80 featured--products">
            <div class="container__flex--center margin-bottom--large">
                <h2>Top Products</h2>
            </div>
            <div class="product--cards container__flex--center container__flex--wrap margin-bottom--medium">
                {featuredproducts?.map((item)=>{
                    return <SingleProduct product={item} />
                })}
            </div>
      </div>
      </>
      ) }
    </>
  )
}
export default HomePage