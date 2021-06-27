import { useState } from 'react'
export function useForm(initialState) {

    const [value, setValue] = useState(initialState);
    console.log(value);
    function handlerChange(e) {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    return [value, handlerChange];
}
