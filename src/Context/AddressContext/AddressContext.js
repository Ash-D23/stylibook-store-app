import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';
import { useAuthContext } from "../AuthContext/AuthContext";
import { toasterror, toastsuccess } from "../../Utilities";
import { useCheckout } from "../CheckoutContext/CheckoutContext";

const AddressContext = createContext();

const useAddress = () => {
    const context = useContext(AddressContext)
    if(!context){
        throw new Error("Context error")
    }
    return context
}

const AddressProvider = ({ children }) => {

    const [addressList, setAddressList] = useState()
    const [isLoading, setisLoading] = useState(false)  
    const { selectedAddress, updateSelectedAddress } = useCheckout()

    const {user} = useAuthContext()

    let config = {
      headers: {
        authorization: user?.token,
      }
    }
    
    const getAllAddress = async ()=>{
      setisLoading(true)
      try{
        const res = await axios.get('api/user/address', config);
        setAddressList(res.data?.Address)
      }catch(err){
        console.error(err)
      }finally{
        setisLoading(false)
      }
    }
    
    useEffect(() => {
      getAllAddress()
    }, [])
  
    const onAddAddress = async (address) => {
      try{
        setisLoading(true)
        const res = await axios.post('api/user/address', { address }, config);
        setAddressList(res.data?.address)
        toastsuccess("Added Address Sucessfully")
      }catch(err){
        console.error(err)
        toasterror()
      }finally{
        setisLoading(false)
      }
    }
  
    const onDeleteAddress = async (_id) => {
      setisLoading(true)
      try{
        await axios.delete('api/user/address/'+_id, config);
        setAddressList(addressList.filter((item)=> item._id !== _id))
        toastsuccess("Deleted Address Sucessfully")
        if(_id === selectedAddress?._id){
          updateSelectedAddress(null)
        }
      }catch(err){
        console.error(err)
        toasterror()
      }finally{
        setisLoading(false)
      }
    }
  
    const onEditAddress = async (address) => {
      setisLoading(true)
      try{
        const res = await axios.post('api/user/address/'+address._id, { updatedAddress: address }, config);
        setAddressList(res.data?.address)
        toastsuccess("Edited Address Sucessfully")
        if(address?._id === selectedAddress?._id){
          updateSelectedAddress(address)
        }
      }catch(err){
        console.error(err)
        toasterror()
      }finally{
        setisLoading(false)
      }
    }

  return (
      <AddressContext.Provider value={{addressList, isLoading, onAddAddress, onEditAddress, onDeleteAddress}}>
          {children}
      </AddressContext.Provider>
  )
}

export { AddressProvider, useAddress}