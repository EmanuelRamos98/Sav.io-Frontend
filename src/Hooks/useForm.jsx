import React, { useState } from 'react'

const useForm = (initialForm) => {
    const [formState, setFormState] = useState(initialForm)

    const handleChange = (evento) => {
        const field_name = evento.target.name
        const field_value = evento.target.value

        setFormState((prevFormState) => {
            return { ...prevFormState, [field_name]: field_value }
        })
    }
    return{
        formState,
        handleChange
    }
}

export default useForm