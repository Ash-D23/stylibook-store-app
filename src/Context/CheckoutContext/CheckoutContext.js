import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

const useCheckout = () => useContext(CheckoutContext)

const CheckoutProvider = ({ children }) => {

    const [selected, setselected] = useState(null);

    const onselect = (id) => {
        if(id===selected){
        setselected(null)
        }else{
        setselected(id)
        }
    }

    return <CheckoutContext.Provider value={{ selected, onselect}}>
        {children}
    </CheckoutContext.Provider>
}

export { useCheckout, CheckoutProvider }