import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "../AuthContext/AuthContext";

const WishlistContext = createContext()

const useWishlist= () => useContext(WishlistContext)

const WishlistProvider = ({children}) => {

    const [wishlistitems, setwishlistitems] = useState([])

    const {user} = useAuthContext()

    let config = {
      headers: {
        authorization: user?.token,
      }
    }

    const getWishlistItems = async () => {
        try{
            let result = await axios.get('/api/user/wishlist', config)
            setwishlistitems(result.data?.wishlist)
          }catch(err){
            console.error(err)
          }
    }

    useEffect(()=>{
        if(user){
            getWishlistItems()
        }else{
            setwishlistitems([])
        }
    }, [user])

    const addToWishlist = async (item) => {
        
        try{
            let result = await axios.post('/api/user/wishlist', { product: { ...item } } , config)
            setwishlistitems(result.data?.wishlist)
          }catch(err){
            console.error(err)
          }
    }

    const checkProductInWishlist = (_id) => {
        let result = false
  
        wishlistitems.forEach((item) => {
            if(item._id === _id){
                result = true
                return
            }
        })
  
        return result
    }

    const removeFromWishlist = async (_id) => {
        try{
            let result = await axios.delete('/api/user/wishlist/'+_id, config)
            setwishlistitems(wishlistitems.filter((item)=> item._id != _id))
        }catch(err){
            console.error(err)
        }

    }


    return <WishlistContext.Provider value={{ wishlistitems, addToWishlist, removeFromWishlist, checkProductInWishlist}}>
        {children}
    </WishlistContext.Provider>
}

export { useWishlist, WishlistProvider }