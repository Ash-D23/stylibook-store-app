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
                <p onClick={clearall} className="filter--clear pointer">Clear All</p>
            </div>
            <div className="filter__section">
                <h3 className="text--medium">Sort by Price</h3>
                <div className="form-element">
                    <input id="low"type="radio" onChange={(e) => pricesort(e.target.value)} className="form-radio" name="sortvalue" value="asc" checked={filterstate.sort==="asc"} />
                    <label for="low"> Low to High </label>
                </div>
                <div className="form-element">
                    <input id="high" type="radio" onChange={(e) => pricesort(e.target.value)} className="form-radio" name="sortvalue" value="desc" checked={filterstate.sort==="desc"}/>
                    <label for="high"> High to Low </label>
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
                    <label for="Fiction">Fiction </label>
                </div>
                <div className="form-element">
                    <input id="Non_Fiction" type="checkbox" onChange={changeCategory} className="form-checkbox" value="Non_Fiction" checked={filterstate.category.Non_Fiction} /> 
                    <label for="Non_Fiction">Non Fiction </label>
                </div>
                <div className="form-element">
                    <input id="Academics" type="checkbox" onChange={changeCategory} className="form-checkbox" value="Academics" checked={filterstate.category.Academics} /> 
                    <label for="Academics">Academics </label>
                </div>
                <div className="form-element">
                    <input id="Fantasy" type="checkbox" onChange={changeCategory} className="form-checkbox" value="Fantasy" checked={filterstate.category.Fantasy} /> 
                    <label for="Fantasy">Fantasy </label>
                </div>
                <div className="form-element">
                    <input id="all"type="checkbox" onChange={changeCategory} className="form-checkbox" value="all" checked={filterstate.category.all} /> 
                    <label for="all">All </label>
                </div>
            </div>
            <div className="filter__section">
                <h3 className="text--medium">Ratings</h3>
                <div className="form-element">
                    <input id="star5" type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="4" checked={filterstate.ratings==="4"} />
                    <label for="star5"> 4 to 5 Stars </label>
                </div>
                <div className="form-element">
                    <input id="star4" type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="3" checked={filterstate.ratings==="3"} />
                    <label for="star4"> 3 to 5 Stars </label>
                </div>
                <div className="form-element">
                    <input id="star3" type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="2" checked={filterstate.ratings==="2"}/>
                    <label for="star3"> 2 to 5 Stars </label>
                </div>
                <div className="form-element">
                    <input id="allstar"type="radio" onChange={changeRatings} className="form-radio" name="ratings" value="all" checked={filterstate.ratings==="all"}/>
                    <label for="allstar"> All</label>
                </div>
            </div>
        </div>
    </>
  )
}

export default Filters