import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFilterProducts } from '../../Context';
import { FILTER_ACTIONS } from '../../Utilities';
import './Filters.css';

function Filters() {

  const { filterdispatch, filterstate } = useFilterProducts()

  const [ showFilters, setshowfilters ] = useState(false)

  const pricesort = (val) => filterdispatch({ type: FILTER_ACTIONS.SORT, payload: val})

  const changepricerange = (e) => filterdispatch({ type: FILTER_ACTIONS.SET_PRICE_RANGE, payload: e.target.value });

  const clearall = () => filterdispatch({type: FILTER_ACTIONS.RESET})

  const changeRatings = (e) => filterdispatch({type: FILTER_ACTIONS.SET_RATINGS, payload: e.target.value})

  const changeCategory = (e) => filterdispatch({type: FILTER_ACTIONS.SET_CATEGORY, payload: e.target.value})

  const [searchParams] = useSearchParams()

  let initialcategory = searchParams.get('category')

  let search = searchParams.get('search')

  useEffect(()=>{
    if(initialcategory){
        filterdispatch({ type: FILTER_ACTIONS.INITIALIZE_CATEGORY, payload: {'all': false, [initialcategory]: true}})
    }
    if(search){
        filterdispatch({ type: FILTER_ACTIONS.SET_SEARCH, payload: search})
    }
  }, [search, initialcategory])
  
  return (
    <>
        <div onClick={()=> setshowfilters( prev => !prev)} className="filter__view filters__heading">
            <h2 className="text--medium">{ showFilters ? 'Hide' : 'Show'} Filters</h2>
        </div>
        <div className={`filters padding--medium ${ showFilters ? 'display-filters' : null}`}>
            <div className="filter__section filters__heading">
                <h2 className="text--medium">Filters</h2>
                <p onClick={clearall} className="filter--clear pointer">Clear All</p>
            </div>
            <div className="filter__section">
                <h3 className="text--medium">Sort by Price</h3>
                <div className="form-element">
                    <input id="low"type="radio" onChange={(e) => pricesort(e.target.value)} className="form-radio" name="sortvalue" value="asc" checked={filterstate.sort==="asc"} />
                    <label htmlFor="low"> Low to High </label>
                </div>
                <div className="form-element">
                    <input id="high" type="radio" onChange={(e) => pricesort(e.target.value)} className="form-radio" name="sortvalue" value="desc" checked={filterstate.sort==="desc"}/>
                    <label htmlFor="high"> High to Low </label>
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
                    <input id="Fiction" type="checkbox" onChange={changeCategory} className="form-checkbox" value="Fiction" checked={filterstate.category.Fiction} /> 
                    <label htmlFor="Fiction">Fiction </label>
                </div>
                <div className="form-element">
                    <input id="Non_Fiction" type="checkbox" onChange={changeCategory} className="form-checkbox" value="Non_Fiction" checked={filterstate.category.Non_Fiction} /> 
                    <label htmlFor="Non_Fiction">Non Fiction </label>
                </div>
                <div className="form-element">
                    <input id="Academics" type="checkbox" onChange={changeCategory} className="form-checkbox" value="Academics" checked={filterstate.category.Academics} /> 
                    <label htmlFor="Academics">Academics </label>
                </div>
                <div className="form-element">
                    <input id="Fantasy" type="checkbox" onChange={changeCategory} className="form-checkbox" value="Fantasy" checked={filterstate.category.Fantasy} /> 
                    <label htmlFor="Fantasy">Fantasy </label>
                </div>
                
            </div>
            <div className="filter__section">
                <h3 className="text--medium">Ratings</h3>
                <div className="form-element">
                    <input id="star5" type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="4" checked={filterstate.ratings==="4"} />
                    <label htmlFor="star5"> 4 to 5 Stars </label>
                </div>
                <div className="form-element">
                    <input id="star4" type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="3" checked={filterstate.ratings==="3"} />
                    <label htmlFor="star4"> 3 to 5 Stars </label>
                </div>
                <div className="form-element">
                    <input id="star3" type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="2" checked={filterstate.ratings==="2"}/>
                    <label htmlFor="star3"> 2 to 5 Stars </label>
                </div>
                <div className="form-element">
                    <input id="allstar"type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="all" checked={filterstate.ratings==="all"}/>
                    <label htmlFor="allstar"> All</label>
                </div>
            </div>
        </div>
    </>
  )
}
 
export { Filters }