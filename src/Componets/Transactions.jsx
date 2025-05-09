import React, { useState, } from 'react'
import { useMovements } from '../Hooks'
import DateRangePicker from './DateRangePicker'
import Grafico from './Grafico'
import GraficoBarras from './GraficoBarras'

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
                                <Grafico dataObj={transactions} />
                                <GraficoBarras />
                            </div>
                }
            </div>
        </div>
    )
}

export default Transactions