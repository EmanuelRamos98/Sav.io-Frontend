import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from '../Componets'
import '../Styles/global.css'


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
        <div className='container_card_form'>
            <div className='card_info'>
                <h1 className='title'>Sav.io</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam architecto eos sed officia maximse, recusandae fugit? Voluptates nobis vero, repudiandae, non quibusdam distinctio est veritatis rem iste, illo cum tempora!</p>
            </div>
            <div className='card_form'>
                <h2 className='title_card_form'>Login</h2>
                <Form action={actionLogin} form_fields={form_fields} initial_state_form={initial_state_form}>
                    <div className='buttons_form'>
                        <button type='submit' className='button_form'>Entrar</button>
                        <Link className='link_form' to={'/register'}>Registrarse</Link>
                        <Link className='link_form' to={'/forgot-password'}>Olvide mi contraseña</Link>
                    </div>
                </Form>
            </div>
        </div >
    )
}

export default LogginScreen