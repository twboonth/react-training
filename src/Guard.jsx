
import {  useContext } from 'react'
import AuthContext from './AuthContext'
import { Redirect } from 'react-router-dom'
export default function Guard({ component: Component, ...props }) {
    const { isAuth } = useContext(AuthContext)
    return <>
        {isAuth
            ? <Component {...props} />
            : <Redirect to="/" />
            }

    </>
}