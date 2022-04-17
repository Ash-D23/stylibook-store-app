import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

const useCheckout = () => useContext(CheckoutContext)

const CheckoutProvider = ({ children }) => {

    const [selectedAddress, setselectedAddress] = useState(null);

    const updateSelectedAddress = (address) => setselectedAddress(address)

    const onToggleAddressSelect = (address) => {
        if(address._id === selectedAddress?._id){
            setselectedAddress(null)
        }else{
            setselectedAddress(address)
        }
    }

    return <CheckoutContext.Provider value={{ selectedAddress, onToggleAddressSelect, updateSelectedAddress}}>
        {children}
    </CheckoutContext.Provider>
}

export { useCheckout, CheckoutProvider }