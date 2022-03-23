import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "../AuthContext/AuthContext";
import { toastsuccess,toasterror } from "../../Utilities/ToastMessage";

const CartContext = createContext()

const useCart = () => useContext(CartContext)

const CartProvider = ({children}) => {

    const [cartitems, setcartitems] = useState([])
    const [cartloading, setcartloading] = useState(false)

    const {user} = useAuthContext()

    let config = {
        headers: {
          authorization: user?.token,
        }
    }

    const getcartItems = async () => {
        try{
            let result = await axios.get('/api/user/cart', config)
            setcartitems(result.data?.cart)
          }catch(err){
            console.log(err)
          }
    }

    useEffect(()=>{
        // set cart from user id
        if(user){
            getcartItems()
        }else{
            setcartitems([])
        }
    }, [user])

    const checkitemincart = _id => {
        let result = false
  
        cartitems.forEach((item)=>{
            if(item._id === _id){
                result = true
                return
            }
        })
  
        return result
    }

    const calculateTotal = () => {
        return cartitems.reduce((acc, curr)=> acc + (parseInt(curr.price)*curr.quantity), 0)
      }  
  
    const addtocart = async (item) => {
        // check if item in cart and return true or false
        let itemincart = checkitemincart(item._id)
  
        if(itemincart){
          // if item in cart filter items and add 1 quantity and append
          increasequantity(item)
        }else{
          // if item not in cart set cart with item and quantity 1
          try{
            let result = await axios.post('/api/user/cart', { product: { ...item } } , config)
            setcartitems(result.data?.cart)
            toastsuccess("Added Item to cart")
          }catch(err){
            console.log(err)
            toasterror("There was an error")
          }
          
        }
        
    }

    const removeproductfromcart = async (_id) => {
        setcartloading(true)
        try{
            let result = await axios.delete('/api/user/cart/'+_id, config)
            setcartitems(cartitems.filter((item)=> item._id !== _id))
            setcartloading(false)
            toastsuccess('Removed Item from Cart')
        }catch(err){
            console.log(err)
            setcartloading(false)
            toasterror('There was an error')
        }
    }
  
    const totalitemsincart = () => cartitems.reduce((acc, curr)=> acc+curr.quantity, 0)

    const increasequantity = async ({ _id }) => {
        setcartloading(true)
        try{
            let result = await axios.post('/api/user/cart/'+_id, { action: { type: 'increment'}}, config)
            setcartitems(cartitems.map((item) => item._id === _id ? {...item, quantity: item.quantity + 1} : item))
            setcartloading(false)
        }catch(err){
            console.log(err)
        }
        
    }

    const decreasequantity = async (item) => {
        
        if(item.quantity <= 1 ){
            removeproductfromcart(item._id)
        }else{
            setcartloading(true)
            try{
                let result = await axios.post('/api/user/cart/'+item._id, { action: { type: 'decrement'}}, config)
                setcartitems(cartitems.map((cartProduct) => cartProduct._id === item._id ? {...cartProduct, quantity: cartProduct.quantity - 1} : cartProduct))
                setcartloading(false)
            }catch(err){
                console.log(err)
                setcartloading(false)
            }
        }

    }

    return <CartContext.Provider value={{ calculateTotal, cartloading, cartitems, addtocart, totalitemsincart, checkitemincart, removeproductfromcart, increasequantity, decreasequantity}}>
        {children}
    </CartContext.Provider>
}

export { useCart, CartProvider}