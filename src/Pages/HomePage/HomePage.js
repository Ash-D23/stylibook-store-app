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
    try{
      let categoryresult = await axios.get('/api/categories')
      let featuredproductsresult = await axios.get('/api/featuredproducts')
      setcategories(categoryresult.data.categories)
      setfeaturedproducts(featuredproductsresult.data.Featuredproducts )
      setisloading(false)
    }catch(err){
      console.log(err)
      setisloading(false)
    }
  }

  useEffect(() => {
    setisloading(true)
    getCategoriesandProducts()
  }, [])

  console.log(featuredproducts)
  
  return (
    <>
      <div id="shop" className="container__flex--center">
            <div className="container--50">
                <h2 className="text--center shop__title margin-tb--medium">Summer Sale 50% OFF</h2>
                <p className="text--center shop__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, cumque saepe. </p>
                <div className="container__flex--center margin-tb--medium">
                    <button className="btn btn--secondary"><Link to="/products">Shop Now</Link></button>
                </div>
            </div>
      </div>

      <div className="category--container">
            <div className="container__flex--center margin-bottom--large padding--large">
                <h2>Categories</h2>
            </div>
            { isloading ? <Loader /> : <div className="container__flex--center container__flex--wrap">
                {categories?.map((item)=>{
                    return <CategoryCard category={item} />
                })}
            </div>}
      </div>
      <div className="container--80 featured--products">
            <div className="container__flex--center margin-bottom--large">
                <h2>Top Products</h2>
            </div>
            { isloading ? <Loader /> : <div className="product--cards container__flex--center container__flex--wrap margin-bottom--medium">
                {featuredproducts?.map((item)=>{
                    return <SingleProduct product={item} />
                })}
            </div> }
      </div>

    </>
  )
}
export default HomePage