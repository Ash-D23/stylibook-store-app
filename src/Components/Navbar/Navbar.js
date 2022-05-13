import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { useAuthContext, useCart } from '../../Context';
import './Navbar.css';

function Navbar({ onMenuClick }) {

  const [search, setSearch] = useState('')
  const [showSearchItems, setShowSearchItems] = useState(false)
  const [products, setProducts] = useState([])

  const { totalItemsInCart } = useCart()

  const navigate = useNavigate()

  const { user } = useAuthContext()

  const searchInput = useRef(null)
  const searchInputMobile = useRef(null)

  useEffect(()=>{
      (async function(){
        try{
            let result = await axios.get('/api/products')
            setProducts(result.data.products)
          }catch(err){
            console.error(err)
          }
      })()
  }, [])

  useEffect(() => {
    const closeSearchMenu = () => {
      setSearch('')
      setShowSearchItems(false)
    }

    const handleClickOutside = (e)=>{
      const isClickedOutsideInput = (searchInput.current && searchInput.current.contains(e.target)) || 
      (searchInputMobile.current && searchInputMobile.current.contains(e.target))
      if(!isClickedOutsideInput){
          closeSearchMenu()
      }
   }

    document.body.addEventListener('click', handleClickOutside)

    return () => {
        document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const searchHandler = (e) => {
      if(e.keyCode === 13){
          searchSubmit()
      }
  }

  const searchSubmit = () => {
    let path = '/products?search='+search
    setSearch('')
    setShowSearchItems(false)
    navigate(path)
  }

  const filterProductsBySearch = (products, search) => {
    if(search === null){
        return products
    }

    return products.filter((item) => item?.productName?.toLowerCase().includes(search.toLowerCase() ))
    }

    const handleNavigate = (e, id) => {
        setShowSearchItems(false)
        setSearch('')
        navigate('/product/'+id)
    }

    const handleClear = () => {
        setSearch('')
        setShowSearchItems(false)
    }

    const SearchProducts = filterProductsBySearch(products, search)

    const navActive = ({ isActive }) => {
        return {
            color: isActive ? "#dc2626" : "",
        };
    }

  return (
    <header>
        <div className="navbar__container--plain padding--medium">
            <div className="navbar__heading-container">
                <div className="container__flex--center">
                    <div className="navbar__logo">
                        <i className="fas fa-book-open"></i>
                    </div>
                    <div className="navbar__title text--medium">
                        <Link to="/">StyliBook</Link>
                    </div>
                </div>
            </div>
            <ul className="navbar__list-container text--medium margin-top--small">
                <li className="navbar__item">
                    <NavLink
                        style={navActive}
                        to={`/`}
                        key={'home'}
                    >Home</NavLink>
                </li>
                <li className="navbar__item">
                    <NavLink
                        style={navActive}
                        to={`/products`}
                        key={'shop'}
                    >Shop</NavLink>
                </li>
            </ul>
            <div className="navbar__menu padding--small">
                <i onClick={onMenuClick} className="fas fa-bars icon__menu"></i>
                <div className="navbar__title--mobile text--medium">
                    <Link to="/">StyliBook</Link>
                </div>
            </div>
            <div className="navbar__item--cart padding--small">
                <div className="badge-content">
                    <NavLink
                        style={navActive}
                        to={`/cart`}
                        key={'cart-mobile'}
                    ><i className="fas fa-shopping-cart"></i></NavLink>
                    <div className="badge badge--round badge-topright badge--medium">{totalItemsInCart()}</div>
                </div>
            </div>
            <ul className="navbar__list-container text--medium margin-top--small">
                <li className="navbar__item">
                <div className='container--relative products-search'>
                    <div className="search__container">
                        <i onClick={searchSubmit} className="fas fa-search padding--small text--medium clr--secondary"></i>
                        <input 
                        onChange={(e)=>setSearch(e.target.value)} 
                        onFocus={() => setShowSearchItems(true)}
                        ref={searchInput}
                        value={search} 
                        className="search__input" 
                        placeholder="Search" 
                        type="text" 
                        onKeyDown={searchHandler}
                        />
                        { showSearchItems ? <i onClick={handleClear} className="fas fa-times padding--small text--medium clr--secondary pointer"></i> : null }
                    </div>
                    { SearchProducts.length === 0 ? 
                    <div style={{ height: `2rem`}}
                    className={`search__items ${ showSearchItems ? `search__items--display` : ''}`}>
                       <p className='search__items--list text--center'>No Items Found</p>
                   </div>
                    : <div style={{ height: `${2 + SearchProducts.length*2}rem`}}
                     className={`search__items ${ showSearchItems ? `search__items--display` : ''}`}>
                        {SearchProducts?.map((item) => <p key={item?._id} onClick={(e) => handleNavigate(e, item?._id)} className='search__items--list'>{item.productName}</p>)}
                    </div>}
                </div>
                </li>
                { user ? <li className="navbar__item">
                    <Link to="/profile"><i className="fas fa-user"></i></Link>
                    <Link className="icon__text" to="/profile">Profile</Link>
                </li> : null }
                <li className="navbar__item">
                    <Link to="/wishlist"><i className="fas fa-heart"></i></Link>
                    <Link className="icon__text" to="/wishlist">Wishlist</Link>
                </li>
                <li className="navbar__item ">
                    <Link to="/cart"><div className="badge-content">
                        <i className="fas fa-shopping-cart"></i>
                        <div className="badge badge--round badge-topright badge--small">{totalItemsInCart()}</div>
                    </div></Link>
                    
                    <Link className="icon__text" to="/cart">Cart</Link>
                </li>
                { user ? <li className="navbar__item">
                    <Link to="/logout"><i className="fas fa-sign-out-alt"></i></Link>
                    <Link className="icon__text" to="/logout">Logout</Link>
                </li> : null }
                { !user ? <li className="navbar__item">
                    <Link className="icon__text" to="/login"><button className='btn btn--secondary btn--meduium'> Login </button></Link>
                </li> : null }
            </ul>
        </div>
        <div className='container--relative'>
              <div className="mobile__search__container">
                  <i onClick={searchSubmit} className="fas fa-search padding--small text--medium clr--secondary"></i>
                  <input 
                      onChange={(e)=>setSearch(e.target.value)} 
                      value={search} 
                      onFocus={() => setShowSearchItems(true)}
                      ref={searchInputMobile}
                      className="search__input" 
                      placeholder="Search" 
                      type="text" 
                      onKeyDown={searchHandler}
                      />
                    { showSearchItems ? <i onClick={handleClear} className="fas fa-times padding--small text--medium clr--secondary pointer"></i> : null }
              </div>
              { SearchProducts.length === 0 ? 
                    <div style={{ height: `2rem`}}
                    className={`search__items ${ showSearchItems ? `search__items--mobiledisplay` : ''}`}>
                       <p className='search__items--list text--center text--light'>No videos Found</p>
                   </div>
                    : <div style={{ height: `${2 + SearchProducts.length*2}rem`}}
                     className={`search__items ${ showSearchItems ? `search__items--mobiledisplay` : ''}`}>
                        {SearchProducts?.map((item) => <p key={item?._id}  onClick={(e) => handleNavigate(e, item?._id)} className='search__items--list'>{item.productName}</p>)}
              </div>}
          </div>
    </header>
  )
}

export { Navbar }