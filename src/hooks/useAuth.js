import axios from "axios";
import { toasterror, toastsuccess } from "../Utilities";
import { useLocalStorage } from "./LocalStorage";

export const useAuth = () => {
    
    const [user, setuser] = useLocalStorage("user", null);

    const signIn = async (data) => {
        try {
            let authresult = await axios.post('/api/auth/login', data);
            let userObj = { ...authresult.data?.foundUser };
            userObj.token = authresult.data?.encodedToken;
            setuser(userObj);
            toastsuccess("Login Successfull")
        } catch (err) {
            console.error(err);
            toasterror("Login Failed")
        }
    };

    const signUp = async (data) => {
        try {
            let authresult = await axios.post('/api/auth/signup', data);
            let userObj = { ...authresult.data?.createdUser };
            userObj.token = authresult.data?.encodedToken;
            setuser(userObj);
            toastsuccess("Sign Up Successfull")
        } catch (err) {
            console.error(err);
            toasterror("An Error Occuered")
        }
    };

    const signOut = () => {
        setuser(null);
    };

    return { user, setuser, signIn, signUp, signOut };
};
