import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
    const { is_authenticated, checked } = useContext(AuthContext)

    if (!checked) {
        return (
            <>
                <p>Cargando</p>
            </>
        )
    }

    return (
        <>
            {
                is_authenticated
                    ? <Outlet />
                    : <Navigate to={'/'} />
            }
        </>
    )
}

export default ProtectedRoutes