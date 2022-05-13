import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Slider.css'

const slider_data = [{ img: "./Images/carousel1.jpg"}, { img: "./Images/carousel2.jpg" }, 
                    {img: "./Images/carousel3.jpg"}, {img: "./Images/carousel4.jpg"} ]

function Slider() {

    const [imageActive, setimageActive] = useState(0)

    const ChangeActiveImage = (offSet) => {
      let newIndex = offSet + imageActive
      if(newIndex < 0){
        newIndex = slider_data.length-1
      }
      if(newIndex >= slider_data.length){
        newIndex = 0
      }
  
      setimageActive(newIndex)
    }

  return (
    <>
        <div className='slider__container container--relative'>
            <div className='slider__images'>
                {slider_data?.map((item, index) => {
                return <div key={index} className={`image ${index === imageActive ? 'image--active' : ''} fade`}>
                    <img src={item.img} alt="carousel"/>
                </div>
                })}
                
            </div> 

            <p onClick={()=>ChangeActiveImage(-1)} className='slider__arrow arrow--prev'>&#10094;</p>
            <p onClick={()=>ChangeActiveImage(1)} className='slider__arrow arrow--next'>&#10095;</p>
                
            <div className="dots">
                {slider_data?.map((item, index) => <span key={index} onClick={()=>setimageActive(index)} className={`dot ${index===imageActive ? 'dot--active' : ''}`}></span>)}
            </div>
        </div>
        <div className="container--50 slider--description">
            <div className="slider--content">
                <h2 className="text--center shop__title text--light margin-tb--medium">Summer Sale 50% OFF</h2>
                <p className="text--center text--large text--bold shop__description">Sale is Live 14th - 17th April </p>
                <div className="container__flex--center margin-tb--large">
                    <button className="btn btn--large btn--secondary"><Link to="/products">Shop Now</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export { Slider }