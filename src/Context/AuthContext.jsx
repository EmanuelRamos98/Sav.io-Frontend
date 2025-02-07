import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [is_authenticated, setIsAuthenticated] = useState(false)
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem('accesToken')
        setIsAuthenticated(Boolean(token))
        setChecked(true)
    }, [])

    const login = (token) => {
        sessionStorage.setItem('accesToken', token)
        setIsAuthenticated(true)
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
                    logout
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}