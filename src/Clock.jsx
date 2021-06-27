import { useState, useEffect } from 'react';
import Fetch from './Fetch'
const api = process.env['REACT_APP_API'];
function RenderProps({ children }) {
    const [now, setNow] = useState();
    useEffect(() => {
        const ref = setInterval(() => {
            setNow(new Date().toTimeString())
        }, 1000)
        return () => {
            clearInterval(ref)
        }
    }, [])

    return <>
        {children(now)}
    </>
}

function UserTable({ users }) {
    // console.log(users)
    return <>
        <table className="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
            <tbody>
           
                {users.map(each => 
            
                    <tr key={each.id}>
                        <td>{each.name}</td>
                        <td>{each.email}</td>
                    </tr>
                )}

            </tbody>
        </table>
    </>
}

export default function Clock() {
    return <>
        <h1 className="title">Clock</h1>
        <RenderProps>
            {/* <h1>Hello</h1> */}
            {(context) => {
                return <><h1 className="help is-danger">{context}</h1></>
            }}
        </RenderProps>
        <Fetch url={`${api}/users`}>
            {(context) => {
                {/* return <pre>{JSON.stringify(context)}</pre> */}
                return <UserTable users={context} />
            }}
        </Fetch>
    </>
}