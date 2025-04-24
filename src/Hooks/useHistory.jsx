import React, { useEffect, useState } from 'react'
import { getAuthenticatedHeaders } from '../Utils/feching.ultis'

const useHistory = (startDate, endDate, type, category) => {
    const [historial, setHistorial] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        const obtenerHistorial = async () => {

            let query = ''
            const params = new URLSearchParams()

            if (startDate && endDate) {
                params.append('startDate', startDate)
                params.append('endDate', endDate)
            }
            if (type) params.append('type', type)
            if (category) params.append('category', category)

            if (params.toString()) {
                query = `?${params.toString()}`
            }

            const resposne = await fetch(`${import.meta.env.VITE_API_URL}/api/transaction/search${query}`, {
                method: 'GET',
                headers: getAuthenticatedHeaders()
            })
            const data = await resposne.json()

            if (!data.ok) {
                setError(data.message)
                setLoading(false)
            }
            setHistorial(data.data)
            setLoading(false)
        }
        obtenerHistorial()
    }, [startDate, endDate, type, category])
    return {
        historial,
        loading,
        error
    }
}

export default useHistory