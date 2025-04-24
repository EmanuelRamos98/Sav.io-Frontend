import React, { useState } from 'react'

const useForm = (initialForm) => {
    const [formState, setFormState] = useState(initialForm)
    const [errors, setErrors] = useState({ global: '' })

    const handleChange = (evento) => {
        const { name, value, type } = evento.target;
    
        const parsedValue = type === 'number'
            ? value === '' ? '' : parseFloat(value)
            : value;
    
        setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    
        setFormState((prevFormState) => ({
            ...prevFormState,
            [name]: parsedValue
        }));
    };

    const validationForm = (optionFields = []) => {
        let newErrors = {}

        for (const [field, value] of Object.entries(formState)) {
            if (optionFields.includes(field) && !value) continue

            if (!value) {
                newErrors[field] = `${field} es obligatorio`
            }
            if (field === 'password' && value.length < 8) {
                newErrors[field] = 'La contraseña debe tener al menos 8 caracteres'
            }
            if (field === 'name' && value.length < 4) {
                newErrors[field] = 'El nombre debe tener al menos 4 caracteres'
            }
            if (field === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(value)) {
                    newErrors[field] = "Debe ser un correo electrónico válido"
                }
            }
            if (field === "identifier") {
                const isEmail = value.includes('@')
                if (isEmail) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    if (!emailRegex.test(value)) {
                        newErrors[field] = "Debe ser un correo electrónico válido"
                    }
                } else if (value.length < 4) {
                    newErrors[field] = "El nombre debe tener al menos 4 caracteres";
                }
            }
        }
        return newErrors
    }


    return {
        formState,
        handleChange,
        errors,
        setErrors,
        validationForm
    }
}

export default useForm