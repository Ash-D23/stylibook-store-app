import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFilterProducts } from '../../Context/FilterProducts/FilterProductContext';
import './Filters.css';

function Filters() {

  const { filterdispatch, filterstate } = useFilterProducts()

  const pricesort = (val) => filterdispatch({ type:'sort', payload: val})

  const changepricerange = (e) => filterdispatch({ type: "setpriceRange", payload: e.target.value });

  const clearall = () => filterdispatch({type: 'reset'})

  const changeRatings = (e) => filterdispatch({type: 'setratings', payload: e.target.value})

  const changeCategory = (e) => filterdispatch({type: 'setcategory', payload: e.target.value})

  const [searchParams] = useSearchParams()

  let initialcategory = searchParams.get('category')

  let search = searchParams.get('search')
  console.log(search)

  useEffect(()=>{
    if(initialcategory){
        filterdispatch({ type: 'initializecategory', payload: {'all': false, [initialcategory]: true}})
    }
    if(search){
        filterdispatch({ type: 'setsearch', payload: search})
    }
  }, [search, initialcategory])

  return (
    <>
        <div className="filter__view filters__heading">
            <h2 className="text--medium">Show Filters</h2>
        </div>
        <div className="filters padding--medium">
            <div className="filter__section filters__heading">
                <h2 className="text--medium">Filters</h2>
                <p onClick={clearall}>Clear All</p>
            </div>
            <div className="filter__section">
                <h3 className="text--medium">Sort by Price</h3>
                <div className="form-element">
                    <input type="radio" onChange={(e) => pricesort(e.target.value)} className="form-radio" name="sortvalue" value="asc" checked={filterstate.sort==="asc"} />
                    <span> Low to High </span>
                </div>
                <div className="form-element">
                    <input type="radio" onChange={(e) => pricesort(e.target.value)} className="form-radio" name="sortvalue" value="desc" checked={filterstate.sort==="desc"}/>
                    <span> High to Low </span>
                </div>
            </div>
            <div className="filter__section">
                <h3 className="text--medium">Price: 0 to {filterstate.priceRange}</h3>
                <div className="price--range">
                    <p>0</p>
                    <p>1000</p>
                </div>
                <input
                    className="slider--price"
                    type="range"
                    step="100"
                    min="0"
                    max="1000"
                    value={filterstate.priceRange}
                    onChange={changepricerange}
                />
            </div>
            <div className="filter__section">
                <h3 className="text--medium">Select Category</h3>
                <div className="form-element">
                    <input type="checkbox" onChange={changeCategory} className="form-checkbox" value="fiction" checked={filterstate.category.fiction} /> 
                    <span>Fiction </span>
                </div>
                <div className="form-element">
                    <input type="checkbox" onChange={changeCategory} className="form-checkbox" value="non__fiction" checked={filterstate.category.non__fiction} /> 
                    <span>Non Fiction </span>
                </div>
                <div className="form-element">
                    <input type="checkbox" onChange={changeCategory} className="form-checkbox" value="academics" checked={filterstate.category.academics} /> 
                    <span>Academics </span>
                </div>
                <div className="form-element">
                    <input type="checkbox" onChange={changeCategory} className="form-checkbox" value="fantasy" checked={filterstate.category.fantasy} /> 
                    <span>Fantasy </span>
                </div>
                <div className="form-element">
                    <input type="checkbox" onChange={changeCategory} className="form-checkbox" value="all" checked={filterstate.category.all} /> 
                    <span>All </span>
                </div>
            </div>
            <div className="filter__section">
                <h3 className="text--medium">Ratings</h3>
                <div className="form-element">
                    <input type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="4" checked={filterstate.ratings==="4"} />
                    <span> 4 to 5 Stars </span>
                </div>
                <div className="form-element">
                    <input type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="3" checked={filterstate.ratings==="3"} />
                    <span> 3 to 5 Stars </span>
                </div>
                <div className="form-element">
                    <input type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="2" checked={filterstate.ratings==="2"}/>
                    <span> 2 to 5 Stars </span>
                </div>
                <div className="form-element">
                    <input type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="all" checked={filterstate.ratings==="all"}/>
                    <span> All</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Filters