import { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';

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

    
    
      const getalladdress = async ()=>{
        try{
          const res = await axios.get('https://6219df4381d4074e85b37570.mockapi.io/address/addresses');
          setaddressList(res.data)
          setisloading(false)
        }catch(err){
          console.log(err)
          setisloading(false)
        }
      }
    
      useEffect(() => {
        setisloading(true)
        getalladdress()
      }, [])

      const toastsuccess = (msg) => {
        toast.success(msg, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      const toasterror = (msg) => {
        toast.error('Error Occured', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    
      const onaddaddress = async (address) => {
        try{
          setisloading(true)
          const res = await axios.post('https://6219df4381d4074e85b37570.mockapi.io/address/addresses', address);
          setaddressList([...addressList, res.data])
    
          toastsuccess("Added Address Sucessfully")
          
          setisloading(false)
        }catch(err){
          console.log(err)
          setisloading(false)
          toasterror()
        }
        
      }
    
      const ondeleteaddress = async (id) => {
        try{
          setisloading(true)
          const res = await axios.delete('https://6219df4381d4074e85b37570.mockapi.io/address/addresses/'+id);
          setaddressList(addressList.filter((item)=> item.id !== id))
          setisloading(false)
          toastsuccess("Deleted Address Sucessfully")
        }catch(err){
          console.log(err)
          setisloading(false)
          toasterror()
        }
        
      }
    
      const oneditaddress = async (address) => {
        try{
          setisloading(true)
          const res = await axios.put('https://6219df4381d4074e85b37570.mockapi.io/address/addresses/'+address.id, address);
          setaddressList(addressList.map((i)=> i.id === address.id ? address : i ))
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

export {AddressContext, AddressProvider, useAddress}