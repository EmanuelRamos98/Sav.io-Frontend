import React, { useContext } from 'react'
import useForm from '../Hooks/useForm'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const LogginScreen = () => {
    const { login } = useContext(AuthContext)
    const nav = useNavigate()
    const { formState, handleChange } = useForm({
        identifier: '',
        password: ''
    })

    const handleLogin = async (evento) => {
        evento.preventDefault()

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formState)
        })
        const data = await response.json()
        if (!data.ok) {
            console.error('Error');
            console.log(data);
        }else{
            login(data.accessToken)
            nav('/home')
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="name">
                    <input
                        name='identifier'
                        type="text"
                        placeholder='name o email'
                        value={formState.identifier}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        name='password'
                        type="password"
                        placeholder='password'
                        value={formState.password}
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>Ingresar</button>
            </form>
        </div>
    )
}

export default LogginScreen