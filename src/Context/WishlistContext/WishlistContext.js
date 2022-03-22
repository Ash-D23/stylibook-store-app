import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "../AuthContext/AuthContext";

const WishlistContext = createContext()

const useWishlist= () => useContext(WishlistContext)

const WishlistProvider = ({children}) => {

    const [wishlistitems, setwishlistitems] = useState([])
    const {user} = useAuthContext()

    useEffect(()=>{
        // set cart from user id
        console.log(user)
    }, [user])

    const addtoWishlist = (item) => {
        setwishlistitems([...wishlistitems, item])
    }

    const checkproductinwishlist = (_id) => {
        let result = false
  
        wishlistitems.forEach((item) => {
            if(item._id === _id){
                result = true
                return
            }
        })
  
        return result
    }

    const removefromwishlist = (_id) => {
        setwishlistitems(wishlistitems.filter((item)=> item._id != _id))
    }


    return <WishlistContext.Provider value={{ wishlistitems, addtoWishlist, removefromwishlist, checkproductinwishlist}}>
        {children}
    </WishlistContext.Provider>
}

export { useWishlist, WishlistProvider }