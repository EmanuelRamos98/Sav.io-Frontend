import React, { useState } from 'react'
import useCategories from '../Hooks/useCategories'
import DateRangePicker from './DateRangePicker'

const Categories = () => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const { categories, loading, error } = useCategories(startDate, endDate)

    const renderCategories = () => {
        if (!categories || Object.keys(categories).length === 0) {
            return <p>No hay datos para mostrar</p>
        }

        return (
            <div className="space-y-4 mt-4">
                {Object.entries(categories).map(([categoria, valores]) => {
                    const montos = valores.map((v) => parseFloat(v))
                    const total = montos.reduce((acc, val) => acc + val, 0)

                    return (
                        <div key={categoria} className="border p-4 rounded shadow">
                            <h3 className="font-bold capitalize">{categoria}</h3>
                            <ul className="list-disc ml-5">
                                {montos.map((monto, index) => (
                                    <li key={index} className={monto < 0 ? 'text-red-600' : 'text-green-600'}>
                                        {monto < 0 ? '-' : '+'}${Math.abs(monto).toFixed(2)}
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-2 font-semibold">
                                Total: ${total.toFixed(2)}
                            </p>
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