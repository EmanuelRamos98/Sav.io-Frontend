import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../Componets'

const ForgotPasswordScreen = () => {

    const actionForgot = async (formState) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/forgot-password`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
        const data = await response.json()
        console.log(data);
        return data
    }

    const form_fields = [
        {
            label_text: 'Ingresa tu email',
            field_component: 'INPUT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'email',
                id: 'email',
                placeholder: 'cosmefulanito@gmail.com',
                type: 'email'
            }
        }
    ]

    const initial_state_form = {
        email: '',
    }

    return (
        <div className='container_card_form'>
            <div className='card_info'>
                <h1 className='title'>Sav.io</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam architecto eos sed officia maximse, recusandae fugit? Voluptates nobis vero, repudiandae, non quibusdam distinctio est veritatis rem iste, illo cum tempora!</p>
            </div>
            <div className='card_form'>
                <h2 className='title_card_form'>Olvide mi contraseña</h2>
                <Form action={actionForgot} form_fields={form_fields} initial_state_form={initial_state_form}>
                    <div className='buttons_form'>
                        <button type='submit' className='button_form'>Enviar</button>
                        <Link className='link_form' to={'/'}>Volver</Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPasswordScreen