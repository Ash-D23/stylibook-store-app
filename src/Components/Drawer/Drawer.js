import React from 'react';
import { Link } from 'react-router-dom';
import './Drawer.css';
function Drawer({ show, closeDrawer}) {
  return (
      <div classNameName={`drawer__container padding--medium ${ show ? 'drawer__position-right' : ''}`}>
        <div classNameName="drawer__heading container__flex--center">
            <div classNameName="navbar__logo margin-top--small">
                <i classNameName="fas fa-book-open"></i>
            </div>
            <div classNameName="navbar__title text--medium">
                StyliBook
            </div>
            <div classNameName="navbar__logo drawer__clear margin-top--small">
                <i onClick={closeDrawer} classNameName="fas fa-times pointer"></i>
            </div>
        </div>
        <div classNameName="drawer__navigation">
            <div classNameName="drawer__navigation-items">
                <i classNameName="fas fa-home"></i>
                <Link onClick={closeDrawer} to="/"><p>Home</p></Link>
            </div>
            <div classNameName="drawer__navigation-items">
                <i classNameName="fas fa-shopping-bag"></i>
                <Link onClick={closeDrawer} to="/products"><p>Products</p></Link>
            </div>
            <div classNameName="drawer__navigation-items">
                <i classNameName="fas fa-heart"></i>
                <Link onClick={closeDrawer} to="/wishlist"><p>Wishlist</p></Link>
            </div>
            <div classNameName="drawer__navigation-items">
                <i classNameName="fas fa-shopping-cart"></i>
                <Link onClick={closeDrawer} to="/cart"><p>Cart</p></Link>
            </div>
            <div classNameName="drawer__navigation-items">
                <i classNameName="fas fa-user"></i>
                <Link onClick={closeDrawer} to="/profile"><p>Profile</p></Link>
            </div>
        </div>
      </div>
  )
}

export default Drawer