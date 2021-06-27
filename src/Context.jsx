import { useContext } from 'react'
import AuthContext from './AuthContext'
export default function Context() {
    const {isAuth} = useContext(AuthContext)
    return <>
    {isAuth 
    ? <h1 className="help is-primary"> Login</h1>
    : <h1 className="help is-danger">Please Login</h1>
    }
        <h1 className="title">Context</h1>
    </>
}