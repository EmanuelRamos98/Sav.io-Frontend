import React from 'react'
import { getAuthenticatedHeaders } from '../Utils/feching.ultis'

const DeleteTransaction = ({ transactionId }) => {

    const handleDelete = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/transaction/delete/${transactionId}`, {
            method: 'DELETE',
            headers: getAuthenticatedHeaders()
        })
    }
    return (
        <>
            <button onClick={handleDelete}>Eliminar</button>
        </>
    )
}

export default DeleteTransaction