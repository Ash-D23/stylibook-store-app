import { Route, Routes, Navigate } from "react-router-dom";
import Mockman from "mockman-js";
import { ToastContainer } from 'react-toastify';

import { HomePage, ProductListingPage, SingleProductPage, CartManagementPage, WishlistPage, UserProfile,
  Login, SignUp, Logout, CheckoutPage, SelectAddressPage, OrderSummaryPage, OrderSuccessPage, NotFoundPage } from "./Pages";
import { Footer, Navigation } from './Components';

import { useAuthContext } from "./Context";
import RequireAuth from "./hooks/RequireAuth";

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {

  const { user } = useAuthContext()
  
  return (
    <div>
      <Navigation />
      <Routes>

        <Route path='/' element={<HomePage />} />
        
        <Route path='/products' element={<ProductListingPage />} />
      
        <Route path='/product/:id' element={<SingleProductPage />} />
      
        <Route path='/cart' element={<RequireAuth><CartManagementPage /></RequireAuth>} />
      
        <Route path='/wishlist' element={<RequireAuth><WishlistPage /></RequireAuth>} />
      
        <Route path='/profile' element={<RequireAuth><UserProfile /></RequireAuth>} />

        <Route path="/checkout" element={<CheckoutPage />} >
          <Route path='' element={<SelectAddressPage />} />
          <Route path='ordersummary' element={<OrderSummaryPage />} />
          <Route path='ordersuccess' element={<OrderSuccessPage />} />
        </Route>
      
        { user ? <Route path='/login' element={<Navigate to="/" />} /> : <Route path='/login' element={<Login />} /> }
    
        { user ? <Route path='/signup' element={<Navigate to="/" />} /> : <Route path='/signup' element={<SignUp />} /> }
      
        <Route path='/logout' element={<Logout />} />

        <Route path="/testApi" element={<Mockman />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
