import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';
import { useAuthContext } from "../AuthContext/AuthContext";
import { toasterror, toastsuccess } from "../../Utilities/ToastMessage";

const AddressContext = createContext();



const useAddress = () => {
    const context = useContext(AddressContext)
    if(!context){
        throw new Error("Context error")
    }
    return context
}

const AddressProvider = ({ children }) => {

    const [addressList, setaddressList] = useState()
    const [isloading, setisloading] = useState(false)  

    const {user} = useAuthContext()

    let config = {
      headers: {
        authorization: user?.token,
      }
    }
    
    const getalladdress = async ()=>{
      setisloading(true)
      try{
        const res = await axios.get('api/user/address', config);
        setaddressList(res.data?.Address)
        setisloading(false)
      }catch(err){
        console.log(err)
        setisloading(false)
      }
    }
    
    useEffect(() => {
      getalladdress()
    }, [])
  
    const onaddaddress = async (address) => {
      try{
        setisloading(true)
        const res = await axios.post('api/user/address', { address }, config);
        setaddressList(res.data?.address)
        setisloading(false)
        toastsuccess("Added Address Sucessfully")
      }catch(err){
        console.log(err)
        setisloading(false)
        toasterror()
      }
    }
  
    const ondeleteaddress = async (_id) => {
      setisloading(true)
      try{
        const res = await axios.delete('api/user/address/'+_id, config);
        setaddressList(addressList.filter((item)=> item._id !== _id))
        setisloading(false)
        toastsuccess("Deleted Address Sucessfully")
      }catch(err){
        console.log(err)
        setisloading(false)
        toasterror()
      }
    }
  
    const oneditaddress = async (address) => {
      setisloading(true)
      try{
        const res = await axios.post('api/user/address/'+address._id, { updatedAddress: address }, config);
        setaddressList(res.data?.address)
        setisloading(false)
        toastsuccess("Edited Address Sucessfully")
      }catch(err){
        console.log(err)
        setisloading(false)
        toasterror()
      }
    }

  return (
      <AddressContext.Provider value={{addressList, isloading, onaddaddress, oneditaddress, ondeleteaddress}}>
          {children}
      </AddressContext.Provider>
  )
}

export { AddressProvider, useAddress}