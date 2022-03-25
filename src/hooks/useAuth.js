import axios from "axios";
import { useLocalStorage } from "./LocalStorage";

export const useAuth = () => {
    
    const [user, setuser] = useLocalStorage("user", null);

    const signin = async (data) => {
        try {
            let authresult = await axios.post('/api/auth/login', data);
            let userObj = { ...authresult.data?.foundUser };
            userObj.token = authresult.data?.encodedToken;
            setuser(userObj);
        } catch (err) {
            console.log(err);
        }
    };

    const signup = async (data) => {
        try {
            let authresult = await axios.post('/api/auth/signup', data);
            let userObj = { ...authresult.data?.createdUser };
            userObj.token = authresult.data?.encodedToken;
            setuser(userObj);
        } catch (err) {
            console.log(err);
        }
    };

    const signout = () => {
        setuser(null);
    };

    return { user, setuser, signin, signup, signout };
};
