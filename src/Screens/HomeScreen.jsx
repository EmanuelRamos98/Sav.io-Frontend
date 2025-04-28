import React from 'react'
import Transactions from '../Componets/Transactions'
import Categories from '../Componets/Categories'
import CreateTransaction from '../Componets/CreateTransaction'
import Navbar from '../Componets/Navbar'

const HomeScreen = () => {

    return (
        <div>
            <Transactions />
            <Categories />
        </div>
    )
}

export default HomeScreen