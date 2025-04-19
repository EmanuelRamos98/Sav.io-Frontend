import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Form from '../Componets/Form'

const LogginScreen = () => {
    const { login } = useContext(AuthContext)
    const nav = useNavigate()

    const actionLogin = async (formData) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (!data.ok) {
                console.error('Error');
            } else {
                login(data.data.accessToken)
                nav('/home')
            }
            return data
        } catch (error) {
            console.error('FAIL', error)
        }
    }

    const form_fields = [
        {
            label_text: 'Ingresa tu email o name',
            field_component: 'INPUT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'identifier',
                id: 'identifier',
                placeholder: 'name o email',
                type: 'text'
            }
        },
        {
            label_text: 'Ingresa tu contraseña',
            field_component: 'INPUT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'password',
                id: 'password',
                placeholder: 'password',
                type: 'password'
            }
        }
    ]

    const initial_state_form = {
        identifier: '',
        password: ''
    }

    return (
        <div>
            <h1>Login</h1>
            <Form action={actionLogin} form_fields={form_fields} initial_state_form={initial_state_form}>
                <button type='submit'>Entrar</button>
            </Form>
        </div>
    )
}

export default LogginScreen