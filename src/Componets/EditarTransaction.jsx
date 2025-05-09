import React from 'react'
import Form from './Form'
import { getAuthenticatedHeaders } from '../Utils/feching.ultis'

const EditarTransaction = ({ transactionId }) => {

    const handleEdit = async (formData) => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/transaction/update/${transactionId}`, {
            method: 'PUT',
            headers: getAuthenticatedHeaders(),
            body: JSON.stringify(formData)
        })
        console.log('formData', formData);
        const data = await response.json()
        console.log('Response', data);
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
        },
        {
            label_text: 'Fecha',
            field_component: 'INPUT',
            field_container_props: {
                className: 'row_field'
            },
            field_data_props: {
                name: 'date',
                id: 'date',
                type: 'date'
            }
        }
    ];

    const initial_state_form = {
        type: '',
        category: '',
        amount: '',
        description: '',
        date: ''
    }

    return (
        <>
            <h2>Editar transaction</h2>
            <Form initial_state_form={initial_state_form} form_fields={form_fields} action={handleEdit} validateOnlyChanged={true}>
                <button type='submit'>Actualizar</button>
            </Form>
        </>
    )
}

export default EditarTransaction