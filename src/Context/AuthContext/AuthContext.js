import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/LocalStorage";

const AuthContext = createContext()

const useAuthContext = () => useContext(AuthContext)

const AuthProvider = ({children}) => {

    const auth = useAuth()

    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>
}

// hook

const useAuth = () => {
    const [user, setuser] = useLocalStorage("user", null)

    const signin = () => {
        setuser("bruce wayne")
    }

    const signout = () => {
        setuser(null)
    }

    return { user, signin, signout}
}

export {AuthContext, useAuthContext, AuthProvider}