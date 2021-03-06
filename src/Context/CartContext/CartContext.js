import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "../AuthContext/AuthContext";
import { toastsuccess,toasterror } from "../../Utilities";

const CartContext = createContext()

const useCart = () => useContext(CartContext)

const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([])
    const [cartLoading, setCartLoading] = useState(false)
    const [appliedCoupon, setAppliedCoupon] = useState(null)

    const applyCoupon = (item) => {
        if(item.name === appliedCoupon?.name){
            toasterror("Coupon Already Applied")
            return
        }
        setAppliedCoupon(item)
        toastsuccess("Coupon Applied")
    }

    const {user} = useAuthContext()

    let config = {
        headers: {
          authorization: user?.token,
        }
    }

    const discount = 0

    const deliveryCharge = 0

    const getCartItems = async () => {
        try{
            let result = await axios.get('/api/user/cart', config)
            setCartItems(result.data?.cart)
          }catch(err){
            console.error(err)
          }
    }

    useEffect(()=>{
        if(user){
            getCartItems()
        }else{
            setCartItems([])
        }
    }, [user])

    const checkItemInCart = _id => {
        let result = false
  
        cartItems.forEach((item)=>{
            if(item._id === _id){
                result = true
                return
            }
        })
  
        return result
    }

    const calculateTotal = () => {
        return cartItems.reduce((acc, curr)=> acc + (parseInt(curr.price)*curr.quantity), 0)
      }  
  
    const addToCart = async (item) => {
        let itemincart = checkItemInCart(item._id)
  
        if(itemincart){
          increaseQuantity(item)
        }else{
          try{
            let result = await axios.post('/api/user/cart', { product: { ...item } } , config)
            setCartItems(result.data?.cart)
            toastsuccess("Added Item to cart")
          }catch(err){
            console.error(err)
            toasterror("There was an error")
          }
        }
    }

    const removeProductFromCart = async (_id) => {
        setCartLoading(true)
        try{
            await axios.delete('/api/user/cart/'+_id, config)
            setCartItems(cartItems.filter((item)=> item._id !== _id))
            toastsuccess('Removed Item from Cart')
        }catch(err){
            console.error(err)
            toasterror('There was an error')
        }finally{
            setCartLoading(false)
        }
    }
  
    const totalItemsInCart = () => cartItems.reduce((acc, curr)=> acc+curr.quantity, 0)

    const increaseQuantity = async ({ _id }) => {
        setCartLoading(true)
        try{
            await axios.post('/api/user/cart/'+_id, { action: { type: 'increment'}}, config)
            setCartItems(cartItems.map((item) => item._id === _id ? {...item, quantity: item.quantity + 1} : item))
        }catch(err){
            console.error(err)
        }finally{
            setCartLoading(false)
        }
        
    }

    const decreaseQuantity = async (item) => {
        if(item.quantity <= 1 ){
            removeProductFromCart(item._id)
        }else{
            setCartLoading(true)
            try{
                await axios.post('/api/user/cart/'+item._id, { action: { type: 'decrement'}}, config)
                setCartItems(cartItems.map((cartProduct) => cartProduct._id === item._id ? {...cartProduct, quantity: cartProduct.quantity - 1} : cartProduct))
            }catch(err){
                console.error(err)
            }finally{
                setCartLoading(false)
            }
        }
    }

    const emptyCart = () => {
        setCartItems([])
        setAppliedCoupon(null)
    }

    return <CartContext.Provider value={{ calculateTotal, discount, deliveryCharge, appliedCoupon, applyCoupon, cartLoading, cartItems, emptyCart, addToCart, totalItemsInCart, checkItemInCart, removeProductFromCart, increaseQuantity, decreaseQuantity}}>
        {children}
    </CartContext.Provider>
}

export { useCart, CartProvider}