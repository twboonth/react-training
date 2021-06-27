import { useState } from 'react'
// import styles from './styles.module.css'
// import Form from './Form'
import 'bulma/css/bulma.min.css'
import 'animate.css/animate.min.css'
// import Timer from './Timer'
// import Users from './user'
// import Post from './Post'
// import UserReducer from './userReducer'
import Routes from './Routes'
import Navbar from './Navbar'

import AuthContext from './AuthContext'
export default function App() {
    const [isAuth, setIsAuth] = useState(false)
    return <>
        <section className="section">
            <div className="container">
                <AuthContext.Provider value={{isAuth,setIsAuth}} >
                    <Navbar />
                    <Routes />
                </AuthContext.Provider>



            </div>
        </section>

    </>
};
{/* <Form />
                <button onClick={() => setShow(!show)} className="button is-primary">Toggle</button>
                {show && <Timer />} */}
{/* <Users /> */ }
{/* <UserReducer /> */ }
{/* <Post  /> */ }