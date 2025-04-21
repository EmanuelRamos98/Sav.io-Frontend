import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Transactions from '../Componets/Transactions'
import Categories from '../Componets/Categories'

const HomeScreen = () => {
    const { user } = useContext(AuthContext)
    
    return (
        <div>
            <h1>Hola {user.name}</h1>
            <Transactions/>
            <Categories/>
        </div>
    )
}

export default HomeScreen