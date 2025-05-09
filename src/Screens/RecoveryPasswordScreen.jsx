import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form } from '../Componets'

const RecoveryPasswordScreen = () => {
    const { token_recuperation } = useParams()
    const nav = useNavigate()
    const actionRecovery = async (formState) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/password/${token_recuperation}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password: formState.password
            })
        })
        const data = await response.json()
        if (data.ok) {
            nav('/')
        }
        return data
    }

    const form_fields = [
        {
            label_text: 'Ingresa nueva contraseña:',
            field_component: 'INPUT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'password',
                id: 'password',
                placeholder: '**********',
                type: 'password'
            }
        }
    ]

    const initial_state_form = {
        password: ''
    }
    return (
        <div className='container_card_form'>
            <div className='card_info'>
                <h1 className='title'>Sav.io</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam architecto eos sed officia maximse, recusandae fugit? Voluptates nobis vero, repudiandae, non quibusdam distinctio est veritatis rem iste, illo cum tempora!</p>
            </div>
            <div className='card_form'>
                <h2 className='tittle_card_form'>Crea tu nueva contraseña</h2>
                <Form action={actionRecovery} initial_state_form={initial_state_form} form_fields={form_fields}>
                    <button type='submit' className='button_form'>Enviar</button>
                </Form>
            </div>
        </div>
    )
}

export default RecoveryPasswordScreen