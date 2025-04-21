import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [is_authenticated, setIsAuthenticated] = useState(false)
    const [checked, setChecked] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = sessionStorage.getItem('accesToken')
        setIsAuthenticated(Boolean(token))
        setChecked(true)
        if (token) {
            const userData = jwtDecode(token)
            setUser(userData)
        }
    }, [])

    const login = (token) => {
        sessionStorage.setItem('accesToken', token)
        setIsAuthenticated(true)
        const userData = jwtDecode(token)
        setUser(userData)
    }

    const logout = () => {
        sessionStorage.removeItem('accesToken')
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider
            value={
                {
                    is_authenticated,
                    checked,
                    login,
                    user,
                    logout
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}