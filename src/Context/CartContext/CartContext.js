import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "../AuthContext/AuthContext";

const CartContext = createContext()

const useCart = () => useContext(CartContext)

const CartProvider = ({children}) => {

    const [cartitems, setcartitems] = useState([])
    const {user} = useAuthContext()

    useEffect(()=>{
        // set cart from user id
        console.log(user)
    }, [user])

    const checkitemincart = id => {
        let result = false
  
        cartitems.forEach((item)=>{
            if(item.id === id){
                result = true
                return
            }
        })
  
        return result
    }

    const calculateTotal = () => {
        return cartitems.reduce((acc, curr)=> acc + (parseInt(curr.price)*curr.quantity), 0)
      }  
  
    const addtocart = item => {
        // check if item in cart and return true or false
        let itemincart = checkitemincart(item.id)
  
        if(itemincart){
          // if item in cart filter items and add 1 quantity and append
          let newcartitems = cartitems.map((cartitem)=> cartitem.id === item.id ? {...cartitem, quantity: cartitem.quantity+1} : cartitem)
          setcartitems(newcartitems)
        }else{
          // if item not in cart set cart with item and quantity 1
          setcartitems([...cartitems, {...item, quantity: 1}])
        }
        
    }

    const removeproductfromcart = (id) => {
        setcartitems(cartitems.filter((item)=> item.id !== id))
    }
  
    const totalitemsincart = () => cartitems.reduce((acc, curr)=> acc+curr.quantity, 0)

    const increasequantity = (id) => {
        setcartitems(cartitems.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item))
    }

    const decreasequantity = (id) => {
        setcartitems(cartitems.reduce((acc, curr) => {
            if(curr.id === id){
                return curr.quantity === 1 ? acc : [...acc, {...curr, quantity: curr.quantity - 1}]
            }
            return [...acc, curr]
        }, []))
    }

    return <CartContext.Provider value={{ calculateTotal, cartitems, addtocart, totalitemsincart, checkitemincart, removeproductfromcart, increasequantity, decreasequantity}}>
        {children}
    </CartContext.Provider>
}

export { useCart, CartProvider}