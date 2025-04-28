import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link, useLocation } from 'react-router-dom'
import CreateTransaction from './CreateTransaction'
import { useModal } from '../Context/ModalContext'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const { openModal } = useModal()
    const location = useLocation()
    const isHome = location.pathname === '/home'

    const handleOpenModal = () => {
        openModal(<CreateTransaction />)
    }

    return (
        <div>
            <h1>Hola {user?.name}</h1>
            {
                isHome ? <Link to={'/history'}>Historial</Link>
                    : <Link to={'/home'}>Home</Link>
            }
            <button onClick={handleOpenModal}>Nueva Transaction</button>
            <button onClick={logout}>Salir</button>
        </div>
    )
}

export default Navbar