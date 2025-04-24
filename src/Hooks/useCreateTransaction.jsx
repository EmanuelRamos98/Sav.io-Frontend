import React from 'react'
import { getAuthenticatedHeaders } from '../Utils/feching.ultis'

const useCreateTransaction = () => {

    const actionCreate = async (formData) => {
        const resposne = fetch(`${import.meta.env.VITE_API_URL}/api/transaction/`, {
            method: 'POST',
            headers: getAuthenticatedHeaders(),
            body: JSON.stringify(formData)
        })
        const data = await resposne.josn()
    }
    return (
        <div>useCreateTransaction</div>
    )
}

export default useCreateTransaction