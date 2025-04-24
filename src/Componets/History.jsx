import React, { useState } from 'react'
import useHistory from '../Hooks/useHistory'
import DateRangePicker from './DateRangePicker'
import DeleteTransaction from './DeleteTransaction'
import EditarTransaction from './EditarTransaction'

const History = () => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const [mostrarEdit, setMostrarEdit] = useState(null)

    const { historial, loading, error } = useHistory(startDate, endDate, type, category)

    const handleMostrar = (id) => {
        setMostrarEdit(prevState => prevState === id ? null : id)
    }

    return (
        <div>
            <h1>Historial completo de transactions</h1>
            <p>Filtrar por fechas</p>
            <DateRangePicker onChange={(star, end) => {
                setStartDate(star)
                setEndDate(end)
            }} />
            <div>
                <div>
                    <label>Tipo:</label>
                    <select onChange={(e) => setType(e.target.value)}>
                        <option value="">Todos</option>
                        <option value="income">Ingreso</option>
                        <option value="expense">Gasto</option>
                    </select>
                </div>
                <div>
                    <label>Categoria:</label>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Todas</option>
                        <option value="sueldo">Sueldo</option>
                        <option value="servicios">Servicios</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>
            </div>

            <div>
                {
                    loading ?
                        <p>Cargando...</p>
                        : error ?
                            <p>{error}</p> :
                            <div>
                                {historial.map((item) => {
                                    return (
                                        <div key={item._id}>
                                            <p>{item.category}</p>
                                            <p>${(item.amount / 100).toFixed(2)}</p>
                                            <p>{item.type}</p>
                                            <p>{item.date}</p>
                                            <button onClick={() => handleMostrar(item._id)}>
                                                {mostrarEdit === item._id ? 'Cancelar' : 'Editar'}
                                            </button>
                                            {
                                                mostrarEdit === item._id &&
                                                <EditarTransaction transactionId={item._id} />

                                            }
                                            <DeleteTransaction transactionId={item._id} />
                                            <hr />
                                        </div>
                                    )
                                })}
                            </div>
                }
            </div>
        </div>
    )
}

export default History