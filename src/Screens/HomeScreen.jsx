import React from 'react'
import { Categories, Transactions } from '../Componets'
import '../Styles/home.css'
import Cards from '../Componets/Cards'

const HomeScreen = () => {

    return (
        <>
            <Cards />
            <Transactions />
            <Categories />
        </>
    )
}

export default HomeScreen