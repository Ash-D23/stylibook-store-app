import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

const useCheckout = () => useContext(CheckoutContext)

const CheckoutProvider = ({ children }) => {

    const [selectedAddress, setSelectedAddress] = useState(null);

    const updateSelectedAddress = (address) => setSelectedAddress(address)

    const onToggleAddressSelect = (address) => {
        if(address._id === selectedAddress?._id){
            setSelectedAddress(null)
        }else{
            setSelectedAddress(address)
        }
    }

    return <CheckoutContext.Provider value={{ selectedAddress, onToggleAddressSelect, updateSelectedAddress}}>
        {children}
    </CheckoutContext.Provider>
}

export { useCheckout, CheckoutProvider }