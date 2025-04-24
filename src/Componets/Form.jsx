import React from 'react'
import useForm from '../Hooks/useForm'

const Form = ({ children, action, form_fields, initial_state_form }) => {
    const { formState, handleChange, errors, validationForm, setErrors } = useForm(initial_state_form)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const validationsErrors = validationForm()
        if (Object.keys(validationsErrors).length > 0) {
            return setErrors(validationsErrors)
        }
        const data = await action(formState)
        if (!data.ok) {
            setErrors({ global: data.message })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <FieldList
                form_fields={form_fields}
                handleChange={handleChange}
                form_state={formState}
                errors={errors}
            />
            {children}
            {errors.global && <span>{errors.global}</span>}
        </form>
    )
}

const FieldList = ({ form_fields, handleChange, form_state, errors }) => {
    return (
        form_fields.map((field, index) => {
            return (
                <Field
                    key={index + field.field_data_props.name}
                    field={field}
                    handleChange={handleChange}
                    state_value={form_state[field.field_data_props.name]}
                    error={errors[field.field_data_props.name]}
                />
            )
        })
    )
}

const Field = ({ field, handleChange, state_value, error }) => {
    return (
        <div {...field.field_container_props}>
            {field.label_text && <label>{field.label_text}</label>}
            <>
                {
                    field.field_component === 'INPUT'
                        ? <input onChange={handleChange} value={state_value} {...field.field_data_props} />
                        : field.field_component === 'SELECT'
                            ? (
                                <select name={field.field_data_props.name} onChange={handleChange} value={state_value}>
                                    {field.field_data_props.options.map(opt => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            )
                            : <textarea />
                }
                {error && <span>{error}</span>}
            </>
        </div>
    )
}

export default Form