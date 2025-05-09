import React, { useState } from 'react'
import DateRangePicker from './DateRangePicker'
import DeleteTransaction from './DeleteTransaction'
import EditarTransaction from './EditarTransaction'
import { useModal } from '../Context/ModalContext'
import { useHistory } from '../Hooks'

const History = () => {
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const { openModal } = useModal()
    const { historial, loading, error } = useHistory(startDate, endDate, type, category)

    const handleOpenModal = (transactionId) => {
        openModal(<EditarTransaction transactionId={transactionId} />)
    }
    const handleOpenModalDelete = (transactionId) => {
        openModal(<DeleteTransaction transactionId={transactionId} />)
    }
    const categorias = ['comida', 'salario', 'otros ingresos', 'transporte', 'servicios', 'ocio', 'ahorro', 'educacion', 'extras', 'deudas', 'otros']
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
                        {categorias.map((cat) => (
                            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                        ))}
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
                                            <button onClick={() => handleOpenModal(item._id)}>Editar</button>
                                            <button onClick={() => handleOpenModalDelete(item._id)}>Eliminar</button>
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