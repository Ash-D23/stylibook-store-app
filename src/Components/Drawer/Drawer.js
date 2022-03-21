import React from 'react';
import { Link } from 'react-router-dom';
import './Drawer.css';
function Drawer({ show, closeDrawer}) {
  return (
      <div className={`drawer__container padding--medium ${ show ? 'drawer__position-right' : ''}`}>
        <div className="drawer__heading container__flex--center">
            <div className="navbar__logo margin-top--small">
                <i className="fas fa-book-open"></i>
            </div>
            <div className="navbar__title text--medium">
                StyliBook
            </div>
            <div className="navbar__logo drawer__clear margin-top--small">
                <i onClick={closeDrawer} className="fas fa-times pointer"></i>
            </div>
        </div>
        <div className="drawer__navigation">
            <div className="drawer__navigation-items">
                <i className="fas fa-home"></i>
                <Link onClick={closeDrawer} to="/"><p>Home</p></Link>
            </div>
            <div className="drawer__navigation-items">
                <i className="fas fa-shopping-bag"></i>
                <Link onClick={closeDrawer} to="/products"><p>Products</p></Link>
            </div>
            <div className="drawer__navigation-items">
                <i className="fas fa-heart"></i>
                <Link onClick={closeDrawer} to="/wishlist"><p>Wishlist</p></Link>
            </div>
            <div className="drawer__navigation-items">
                <i className="fas fa-shopping-cart"></i>
                <Link onClick={closeDrawer} to="/cart"><p>Cart</p></Link>
            </div>
            <div className="drawer__navigation-items">
                <i className="fas fa-user"></i>
                <Link onClick={closeDrawer} to="/profile"><p>Profile</p></Link>
            </div>
        </div>
      </div>
  )
}

export default Drawer