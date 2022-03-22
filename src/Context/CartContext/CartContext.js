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
  
    const addtocart = item => {
        // check if item in cart and return true or false
        let itemincart = checkitemincart(item._id)
  
        if(itemincart){
          // if item in cart filter items and add 1 quantity and append
          let newcartitems = cartitems.map((cartitem)=> cartitem._id === item._id ? {...cartitem, quantity: cartitem.quantity+1} : cartitem)
          setcartitems(newcartitems)
        }else{
          // if item not in cart set cart with item and quantity 1
          setcartitems([...cartitems, {...item, quantity: 1}])
        }
        
    }

    const removeproductfromcart = (_id) => {
        setcartitems(cartitems.filter((item)=> item._id !== _id))
    }
  
    const totalitemsincart = () => cartitems.reduce((acc, curr)=> acc+curr.quantity, 0)

    const increasequantity = (_id) => {
        setcartitems(cartitems.map((item) => item._id === _id ? {...item, quantity: item.quantity + 1} : item))
    }

    const decreasequantity = (_id) => {
        setcartitems(cartitems.reduce((acc, curr) => {
            if(curr._id === _id){
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