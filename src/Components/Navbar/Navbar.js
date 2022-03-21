import React, {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Navbar.css';

function Navbar({ onMenuClick }) {

  const [search, setsearch] = useState('')

  let navigate = useNavigate()

  const searchHandler = (e) => {
      if(e.keyCode === 13){
          searchSubmit()
      }
  }

  const searchSubmit = () => {
    let path = '/products?search='+search
    console.log(path)
    setsearch('')
    navigate(path)
  }

  return (
    <header>
        <div classNameName="navbar__container--plain padding--medium">
            <div classNameName="navbar__heading-container">
                <div classNameName="container__flex--center">
                    <div classNameName="navbar__logo">
                        <i classNameName="fas fa-book-open"></i>
                    </div>
                    <div classNameName="navbar__title text--medium">
                        <Link to="/">StyliBook</Link>
                    </div>
                </div>
            </div>
            <ul classNameName="navbar__list-container text--medium margin-top--small">
                <li classNameName="navbar__item">
                    <Link to="/">Home</Link>
                </li>
                <li classNameName="navbar__item">
                    <Link to="/products">Shop</Link>
                </li>
            </ul>
            <div classNameName="navbar__menu padding--small">
                <i onClick={onMenuClick} classNameName="fas fa-bars icon__menu"></i>
                <div classNameName="navbar__title--mobile text--medium">
                    <Link to="/">StyliBook</Link>
                </div>
            </div>
            <div classNameName="navbar__item--cart padding--small">
                <div classNameName="badge-content">
                    <Link to="/cart"><i classNameName="fas fa-shopping-cart"></i></Link>
                    <div className="badge badge--round badge-topright badge--medium">{2}</div>
                </div>
            </div>
            <ul classNameName="navbar__list-container text--medium margin-top--small">
                <li classNameName="navbar__item">
                    <div classNameName='container--relative'>
                        <div classNameName="search__container">
                            <i onClick={searchSubmit} classNameName="fas fa-search padding--small text--medium"></i>
                            <input 
                            onChange={(e)=>setsearch(e.target.value)} 
                            value={search} 
                            classNameName="search__input" 
                            placeholder="Search" 
                            type="text" 
                            onKeyDown={searchHandler}
                            />
                        </div>
                        <div classNameName="search__items">

                        </div>
                    </div>

                </li>
                <li classNameName="navbar__item">
                    <i classNameName="fas fa-user"></i>
                    <Link classNameName="icon__text" to="/profile">Profile</Link>
                </li>
                <li classNameName="navbar__item">
                    <i classNameName="fas fa-heart"></i>
                    <Link classNameName="icon__text" to="/wishlist">Wishlist</Link>
                </li>
                <li classNameName="navbar__item ">
                    <div classNameName="badge-content">
                        <i classNameName="fas fa-shopping-cart"></i>
                        <div className="badge badge--round badge-topright badge--small">{2}</div>
                    </div>
                    
                    <Link classNameName="icon__text" to="/cart">Cart</Link>
                </li>
                <li classNameName="navbar__item">
                    <i classNameName="fas fa-sign-out-alt"></i>
                    <Link classNameName="icon__text" to="/logout">Logout</Link>
                </li>
            </ul>
        </div>
        <div classNameName='container--relative'>
            <div classNameName="mobile__search__container">
                <i onClick={searchSubmit} classNameName="fas fa-search padding--small text--medium"></i>
                <input 
                    onChange={(e)=>setsearch(e.target.value)} 
                    value={search} 
                    classNameName="search__input" 
                    placeholder="Search" 
                    type="text" 
                    onKeyDown={searchHandler}
                    />
            </div>
            <div classNameName="search__items">

            </div>
        </div>
    </header>
  )
}

export default Navbar