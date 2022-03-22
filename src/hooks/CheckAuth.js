import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../Context/AuthContext/AuthContext'

function CheckAuth({ children }){
    const {user} = useAuthContext()
    if (user) {
        return <Navigate to='/' />
    }
    return children
}

export default CheckAuth