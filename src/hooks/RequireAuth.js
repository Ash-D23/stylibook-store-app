import { useAuthContext } from "./AuthContext"
import { Navigate, useLocation } from 'react-router-dom'

function RequireAuth({ children }){
    const location = useLocation()
    const auth = useAuthContext()
    if (!auth.user) {
        return <Navigate to='/login' state={{ path: location.pathname }} />
    }
    return children
}

export default RequireAuth