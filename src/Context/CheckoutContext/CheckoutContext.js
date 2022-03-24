import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

const useCheckout = () => useContext(CheckoutContext)

const CheckoutProvider = ({ children }) => {

    const [selectedAddress, setselectedAddress] = useState(null);

    const onselect = (address) => {
        if(address._id === selectedAddress?._id){
            setselectedAddress(null)
        }else{
            setselectedAddress(address)
        }
    }

    return <CheckoutContext.Provider value={{ selectedAddress, onselect}}>
        {children}
    </CheckoutContext.Provider>
}

export { useCheckout, CheckoutProvider }