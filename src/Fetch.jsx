import axios from 'axios'
import { useState, useEffect } from 'react';

export default function Fetch({ url, children }) {
    const [values, setValues] = useState([])
    useEffect(() => {
        const getList = async () => {
            const { data } = await axios.get(url)
            setValues(data);
        }
        getList()

    }, [])
    return <>{children(values)}</>
}