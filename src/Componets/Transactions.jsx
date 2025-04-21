import React, { useEffect, useState, } from 'react'
import useMovements from '../Hooks/useMovements'
import DateRangePicker from './DateRangePicker'

const Transactions = () => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const { transactions, loading, error } = useMovements(startDate, endDate)
    
    return (
        <div>
            <h2>Ultimo mes en movimientos</h2>
            <p>Selecionar fechas</p>
            <DateRangePicker onChange={(star, end) => {
                setStartDate(star)
                setEndDate(end)
            }} />
            <div>
                {
                    loading ?
                        <p>Cargando...</p>
                        : error ?
                            <p>Error</p> :
                            <div>
                                <p>Ingresos ${transactions.income.toFixed(2)}</p>
                                <p>Gastos ${transactions.expense.toFixed(2)}</p>
                                <p>Totlal ${transactions.balance.toFixed(2)}</p>
                            </div>
                }
            </div>
        </div>
    )
}

export default Transactions