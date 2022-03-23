import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from './Context/AuthContext/AuthContext'
import { CartProvider } from "./Context/CartContext/CartContext";
import { WishlistProvider } from "./Context/WishlistContext/WishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
