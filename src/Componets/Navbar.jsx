import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link, useLocation } from 'react-router-dom'
import CreateTransaction from './CreateTransaction'
import { useModal } from '../Context/ModalContext'
import '../Styles/navbar.css'

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const { openModal } = useModal()
    const location = useLocation()
    const isHome = location.pathname === '/home'

    const handleOpenModal = () => {
        openModal(<CreateTransaction />)
    }

    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour >= 5 && hour < 12) {
            return 'Buenos dias'
        } else if (hour >= 12 && hour < 18) {
            return 'Buenas tardes'
        } else {
            return 'Buenas noches'
        }
    }

    return (
        <div className='container_navbar'>
            <h2 className='tittle_navbar'>{getGreeting()} {user?.name}</h2>
            <div className='container_buttons_navbar'>
                {
                    isHome ? <Link className='links_navbar' to={'/history'}>Historial</Link>
                        : <Link className='links_navbar' to={'/home'}>Home</Link>
                }
                <button className='button_navbar' onClick={handleOpenModal}>Nueva Transaction</button>
                <button className='button_navbar' onClick={logout}>Salir</button>
            </div>
        </div>
    )
}

export default Navbar