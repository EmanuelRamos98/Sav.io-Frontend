import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import Transactions from '../Componets/Transactions'
import Categories from '../Componets/Categories'
import CreateTransaction from '../Componets/CreateTransaction'

const HomeScreen = () => {
    const { user } = useContext(AuthContext)
    
    return (
        <div>
            <h1>Hola {user.name}</h1>
            <Transactions/>
            <Categories/>
            <CreateTransaction/>
        </div>
    )
}

export default HomeScreen