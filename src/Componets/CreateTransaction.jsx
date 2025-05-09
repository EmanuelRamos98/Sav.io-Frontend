import React from 'react'
import { getAuthenticatedHeaders } from '../Utils/feching.ultis'
import Form from './Form'

const CreateTransaction = () => {
    const actionCreate = async (formData) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/transaction/`, {
            method: 'POST',
            headers: getAuthenticatedHeaders(),
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        if (!data.ok) {
            console.error('Error');
        } else {
            console.log('Creado con exito');
        }
        return data
    }

    const form_fields = [
        {
            label_text: 'Tipo',
            field_component: 'SELECT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'type',
                id: 'type',
                options: ['ingreso', 'gasto']
            }
        },
        {
            label_text: 'Categoría',
            field_component: 'SELECT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'category',
                id: 'category',
                options: ['comida', 'salario', 'otros ingresos', 'transporte', 'servicios', 'ocio', 'ahorro', 'educacion', 'extras', 'deudas', 'otros']
            }
        },
        {
            label_text: 'Monto',
            field_component: 'INPUT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'amount',
                id: 'amount',
                placeholder: 'valor',
                type: 'number'
            }
        },
        {
            label_text: 'Descripción',
            field_component: 'INPUT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'description',
                id: 'description',
                placeholder: 'descripción',
                type: 'text'
            }
        }
    ];

    const initial_state_form = {
        type: '',
        category: '',
        amount: '',
        description: ''
    }

    return (
        <div>
            <h2>Crear nueva transaction</h2>
            <Form action={actionCreate} form_fields={form_fields} initial_state_form={initial_state_form}>
                <button type='submit'>Crear</button>
            </Form>
        </div>
    )
}

export default CreateTransaction