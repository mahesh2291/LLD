import { Outlet,Navigate } from "react-router"

const ProtectedRoutes=()=>{
    let isAuthenticated=true
        return isAuthenticated? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes