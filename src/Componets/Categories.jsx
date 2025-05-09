import React, { useState } from 'react'
import DateRangePicker from './DateRangePicker'
import { useCategories } from '../Hooks'

const Categories = () => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const { categories, loading, error } = useCategories(startDate, endDate)

    const renderCategories = () => {
        if (!categories || Object.keys(categories).length === 0) {
            return <p>No hay datos para mostrar</p>
        }

        return (
            <div>
                {Object.entries(categories).map(([categoria, valores]) => {
                    const montos = valores.map((v) => parseFloat(v))
                    const total = montos.reduce((acc, val) => acc + val, 0)

                    return (
                        <div key={categoria}>
                            <h3>{categoria}</h3>
                            <div>
                                {montos.map((monto, index) => (
                                    <p key={index}>
                                        {monto < 0 ? '-' : '+'}${Math.abs(monto).toFixed(2)}
                                    </p>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <h2>Movimientos por categorias</h2>
            <p>Seleccionar fechas</p>
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
                            renderCategories()
                }
            </div>
        </div>
    )
}

export default Categories