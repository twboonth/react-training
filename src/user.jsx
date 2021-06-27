import { useState, useEffect } from 'react'
import axios from 'axios'
const api = 'https://jsonplaceholder.typicode.com';
export default function Users() {
    const [users, setUsers] = useState([])
    const [activeUser, setActiveUser] = useState(0)
    const [user, setUser] = useState();

    async function handleClick() {
        const { data } = await axios.get(`${api}/users`);
        setUsers(data)
    }

    useEffect(async () => {
        console.log(activeUser);
        if (!activeUser) {
            return
        }
        const { data } = await axios.get(`${api}/users/${activeUser}`)
        console.log(data);
        setUser(data);
    }, [activeUser])
    return <>
        <h1 className="title">Users {activeUser}</h1>
        <button className="button" onClick={handleClick}>ShowUser</button>
        <UserProfile user={user} />
        {users.map(user => {
            return <UserItem key={user.id} user={user} id={user.id} setActiveUser={setActiveUser} />
        })}
        {/* <pre>{JSON.stringify(users)}</pre> */}
    </>
}
function UserItem({ user, id, setActiveUser }) {
    const [isSelected, setIsSelected] = useState(false)
    function handleClick(id) {
        setActiveUser(id)
        setIsSelected(!isSelected)
    }
    return <>
        <button className={`button ${isSelected ? "is-primary" : ""}`} onClick={() => handleClick(user.id)}>({id}) {user.name}</button>

    </>
}

function UserProfile({ user }) {

    return <>
        <pre>{JSON.stringify(user)}</pre>

    </>
}