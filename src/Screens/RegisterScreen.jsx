import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from '../Componets'

const RegisterScreen = () => {
    const nav = useNavigate()

    const actionRegister = async (formData) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (!data.ok) {
                console.error('Error')
            } else {
                nav('/')
            }
            return data
        } catch (error) {
            console.error('FAIL', error)
        }
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
                placeholder: 'cosme@gmail.com',
                type: 'text'
            }
        },
        {
            label_text: 'Ingresa un nombre de usuario',
            field_component: 'INPUT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'name',
                id: 'name',
                placeholder: 'cosme fulanito',
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
        email: '',
        name: '',
        password: ''
    }
    return (
        <div className='container_card_form'>
            <div className='card_info'>
                <h1 className='title'>Sav.io</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae perferendis aspernatur praesentium deleniti unde sunt accusamus vero magnam, autem, laboriosam totam et cumque illo natus libero sed expedita pariatur?</p>
            </div>
            <div className='card_form'>
                <h2 className='title_card_form'>Register</h2>
                <Form action={actionRegister} form_fields={form_fields} initial_state_form={initial_state_form}>
                    <div className='buttons_form'>
                        <button type='submit' className='button_form'>Registrar</button>
                        <Link className='link_form' to={'/'}>Ir a login</Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default RegisterScreen