import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import ProductListingPage from './Pages/ProductListingPage/ProductListingPage';
import SingleProductPage from './Pages/SingleProductPage/SingleProductPage';
import CartManagementPage from './Pages/CartManagementPage/CartManagementpage';
import WishlistPage from './Pages/WishlistPage/WishListPage';
import UserProfile from './Pages/UserProfile/UserProfile';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Logout from './Pages/Logout/Logout';
import "./App.css";
import Mockman from "mockman-js";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        
        <Route path='/products' element={<ProductListingPage />} />
      
        <Route path='/product/:id' element={<SingleProductPage />} />
      
        <Route path='/cart' element={<CartManagementPage />} />
      
        <Route path='/wishlist' element={<WishlistPage />} />
      
        <Route path='/profile' element={<UserProfile />} />
      
        <Route path='/login' element={<Login />} />
    
        <Route path='/signup' element={<SignUp />} />
      
        <Route path='/logout' element={<Logout />} />

        <Route path="/testApi" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
