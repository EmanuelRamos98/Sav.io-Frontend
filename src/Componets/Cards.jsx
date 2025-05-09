import React, { useMemo, useState } from 'react'
import { useMovements } from '../Hooks'
import '../Styles/cards.css'

const Cards = () => {

    const getDefaultRange = () => {
        const now = new Date()
        const start = new Date(now.getFullYear(), now.getMonth(), 1)
        const end = now

        return {
            startDate: start.toISOString().split('T')[0],
            endDate: end.toISOString().split('T')[0]
        }
    }

    const { startDate, endDate } = useMemo(getDefaultRange, [])
    const { transactions, loading, error } = useMovements(startDate, endDate)

    return (
        <div className='summary-container'>
            <h2 className='summary-title'>Movimientos en lo que va del mes</h2>
            <div className='summary-cards'>
                {
                    loading ? <p>Cargando ..</p> : error ? <p>Error</p> :
                        <>
                            <div className='summary-card income'><p>Ingresos</p><p>${transactions.income.toFixed(2)}</p></div>
                            <div className='summary-card expense'><p>Gastos</p><p>${transactions.expense.toFixed(2)}</p></div>
                            <div className={`summary-card balance ${transactions.balance <= 0 ? 'negative' : 'positive'
                                }`} ><p>Totlal</p><p>${transactions.balance.toFixed(2)}</p></div>
                        </>
                }
            </div>
        </div >
    )
}

export default Cards