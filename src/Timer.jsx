import { useEffect } from 'react'

export default function Timer() {
    useEffect(() => {
        const ref = setInterval(() => {
            console.log(new Date());
        }, 1000);
        return () => {
            clearInterval(ref)
        }

    }, [])
    return <>
        <h1>Timer</h1>
    </>


}