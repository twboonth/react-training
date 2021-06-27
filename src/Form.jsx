import { useEffect, useState } from 'react'
import { useForm } from './hook'
import Validator from 'validatorjs'

const rules = {
    name: 'required|min:3',
    surname: 'required'
}
export default function Form() {
    const [person, handleChange] = useForm({ name: 'John', surname: 'Doe' })
    const [errors, setErrors] = useState({ name: '', surname: '' })
    useEffect(() => {
        // render 
        const validator = new Validator(person, rules)
        if (validator.fails()) {

            const err = Object.keys(validator.errors.errors).map(key => {
                // return validator.errors.errors[key][0]
                return {
                    field: key,
                    message: validator.errors.errors[key][0]
                }
            }).reduce((acc, each) => {
                return {
                    ...acc,
                    [each.field]: each.message
                }
            }, {})
            setErrors(err)

            console.log(err)
        } else {
            setErrors({})
        }
    }, [person])
    // console.log(person);
    return (<>
        <h1>Form</h1>
        <input className={`input ${errors["name"] ? "is-danger animate__animated animate__bounce" : ""}`} value={person.name} onChange={handleChange} type="text" name="name" />
        {errors["name"]}
        <input className={` input ${errors["surname"] ?"is-danger animate__animated animate__bounce":""}`} value={person.surname} onChange={handleChange} type="text" name="surname" />
        {errors["surname"]}
        <button>Form</button>
    </>)
}