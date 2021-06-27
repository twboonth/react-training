import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from './AuthContext'
export default function Navbar() {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    return <>
        <nav className="navbar">
            <div className="navbar-menu">
                {/* <Link to="/Home" className="navbar-item">reducee</Link>    */}
                {/* <Link to="/userreducer" className="navbar-item">Reducers</Link>  */}
                {/* <Link to="/user" className="navbar-item">User1</Link> */}
                <Link to="/Timer" className="navbar-item">Timer1</Link>
                <Link to="/Clock" className="navbar-item">Clock1</Link>
                <Link to="/Context" className="navbar-item">Context1</Link>
                <Link to="/Redux" className="navbar-item">Redux</Link>
                <Link to="/Graphql" className="navbar-item">Graphql</Link>
                <Link to="/Post" className="navbar-item">Post</Link>



                <button onClick={() => setIsAuth(!isAuth)} className="navbar-item is-primary">
                    {isAuth
                        ? <p>LogOut</p>
                        : <p >Login</p>}</button>
                {/* <Link to="/user/2" className="navbar-item">User2</Link> */}




            </div>
        </nav>
    </>
}