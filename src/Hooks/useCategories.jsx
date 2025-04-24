import React, { useEffect, useState } from 'react'
import { getAuthenticatedHeaders } from '../Utils/feching.ultis'

const useCategories = (startDate, endDate) => {
    const [categories, setCategories] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        if (!startDate || !endDate) return
        const obtenerCategories = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/transaction/category?startDate=${startDate}&endDate=${endDate}`, {
                method: 'GET',
                headers: getAuthenticatedHeaders()
            })
            const data = await response.json()
            if (!data.ok) {
                setError(data.message)
                setLoading(false)
                return
            }
            setCategories(data.data)
            setLoading(false)
        }
        obtenerCategories()
    }, [startDate, endDate])
    return {
        categories,
        loading,
        error
    }
}

export default useCategories