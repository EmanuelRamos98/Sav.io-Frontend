import React, { useEffect, useState } from 'react'
import { getAuthenticatedHeaders } from '../Utils/feching.ultis'

const useMovements = (startDate, endDate) => {
    const [transactions, setTransactions] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        if (!startDate || !endDate) return
        const obtenerMovements = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/transaction/movements?startDate=${startDate}&endDate=${endDate}`, {
                method: 'GET',
                headers: getAuthenticatedHeaders()
            })
            const data = await response.json()
            if (!data.ok) {
                setError(data.message)
                setLoading(false)
                return
            }
            setTransactions(data.data)
            setLoading(false)
        }
        obtenerMovements()
    }, [startDate, endDate])

    return {
        transactions,
        loading,
        error
    }
}

export default useMovements