import { Navigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../Context/AuthContext/AuthContext'

function RequireAuth({ children }){
    const location = useLocation()
    const auth = useAuthContext()
    if (!auth.user) {
        return <Navigate to='/login' state={{ path: location.pathname }} />
    }
    return children
}

export default RequireAuth