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

    const checkproductinwishlist = (id) => {
        let result = false
  
        wishlistitems.forEach((item) => {
            if(item.id === id){
                result = true
                return
            }
        })
  
        return result
    }

    const removefromwishlist = (id) => {
        setwishlistitems(wishlistitems.filter((item)=> item.id != id))
    }


    return <WishlistContext.Provider value={{ wishlistitems, addtoWishlist, removefromwishlist, checkproductinwishlist}}>
        {children}
    </WishlistContext.Provider>
}

export { useWishlist, WishlistProvider }