import { useReducer, useEffect } from 'react'
import axios from 'axios'

const api = process.env['REACT_APP_API'];

const initState = {
    userId: 0,
    user: {},
    users: [],
    loading: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'USER_SELECT':
            return { ...state, userId: action.payload.userId }
        case 'FETCH_START':
            return { ...state, loading: true }
        case 'FETCH_USER_SUCCESS':
            return { ...state, loading: false, user: action.payload.user }
        case 'FETCH_USER_LIST_SUCCESS':
            return { ...state, loading: false, users: action.payload.users }
        default:
            return state
    }

}

export default function UserReducer() {

    const [state, dispatch] = useReducer(reducer, initState)
    const { users, loading ,userId} = state

    function updateUserId(userId) {
        dispatch({
            type: 'USER_SELECT',
            payload: {
                userId
            }
        })

    }
    useEffect(() => {
        if (userId === 0) {
            return
        }
        const getUserById = async () => {
            dispatch({
                type: 'FETCH_START'
            })
            const { data } = await axios.get(`${api}/users/${userId}`);
            dispatch({
                type: 'FETCH_USER_SUCCESS',
                payload: {
                    user: data
                }
            })
        }
        getUserById()
    }, [userId])



    useEffect(() => {
        dispatch({
            type: 'FETCH_START'
        })
        const getUserList = async () => {
            const { data } = await axios.get(`${api}/users`);
            dispatch({
                type: 'FETCH_USER_LIST_SUCCESS',
                payload: {
                    users: data
                }
            })
        }
        getUserList()
    }, [])
    return <>
        <h1>UserReducer</h1>
        {console.log(state)}

        {loading ? <progress className="progress is-primary"></progress> : <UserList users={users} updateUserId={updateUserId} />}


        {/* <button onClick={handleClick}>FETCH</button> */}
    </>
}
function UserList({ users = [], updateUserId }) {
    return <>
        {users.map(each => {
            return <p key={each.id}>
            
                <button onClick={() => updateUserId(each.id ) }  className="button">{each.name}</button>
            </p>
        })}
    </>
}
