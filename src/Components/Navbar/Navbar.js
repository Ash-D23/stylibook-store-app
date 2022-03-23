import React, {useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext/AuthContext';
import { useCart } from '../../Context/CartContext/CartContext';
import './Navbar.css';

function Navbar({ onMenuClick }) {

  const [search, setsearch] = useState('')

  const { totalitemsincart } = useCart()

  const navigate = useNavigate()

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

  const { user } = useAuthContext()

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
                    <Link to="/">Home</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/products">Shop</Link>
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
                    <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                    <div className="badge badge--round badge-topright badge--medium">{totalitemsincart()}</div>
                </div>
            </div>
            <ul className="navbar__list-container text--medium margin-top--small">
                <li className="navbar__item">
                    <div className='container--relative'>
                        <div className="search__container">
                            <i onClick={searchSubmit} className="fas fa-search padding--small text--medium"></i>
                            <input 
                            onChange={(e)=>setsearch(e.target.value)} 
                            value={search} 
                            className="search__input" 
                            placeholder="Search" 
                            type="text" 
                            onKeyDown={searchHandler}
                            />
                        </div>
                    </div>

                </li>
                { user ? <li className="navbar__item">
                    <i className="fas fa-user"></i>
                    <Link className="icon__text" to="/profile">Profile</Link>
                </li> : null }
                <li className="navbar__item">
                    <i className="fas fa-heart"></i>
                    <Link className="icon__text" to="/wishlist">Wishlist</Link>
                </li>
                <li className="navbar__item ">
                    <div className="badge-content">
                        <i className="fas fa-shopping-cart"></i>
                        <div className="badge badge--round badge-topright badge--small">{totalitemsincart()}</div>
                    </div>
                    
                    <Link className="icon__text" to="/cart">Cart</Link>
                </li>
                { user ? <li className="navbar__item">
                    <i className="fas fa-sign-out-alt"></i>
                    <Link className="icon__text" to="/logout">Logout</Link>
                </li> : null }
                { !user ? <li className="navbar__item">
                    <Link className="icon__text" to="/login"><button className='btn btn--secondary btn--meduium'> Login </button></Link>
                </li> : null }
            </ul>
        </div>
        <div className='container--relative'>
            <div className="mobile__search__container">
                <i onClick={searchSubmit} className="fas fa-search padding--small text--medium"></i>
                <input 
                    onChange={(e)=>setsearch(e.target.value)} 
                    value={search} 
                    className="search__input" 
                    placeholder="Search" 
                    type="text" 
                    onKeyDown={searchHandler}
                    />
            </div>
        </div>
    </header>
  )
}

export default Navbar