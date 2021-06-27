import { lazy, Suspense } from 'react'

import { Switch, Route } from 'react-router-dom'

// import userReducer from './userReducer'
// import Users from './user'
import App from './App'

import Guard from './Guard'
const Users = lazy(() => import('./user' /*webpackChunkName:'user'*/ ));
const userReducer = lazy(() => import('./userReducer' /*webpackChunkName:'userReducer'*/));
const Timer = lazy(() => import('./Timer' /*webpackChunkName:'Timer'*/));
const Clock = lazy(() => import('./Clock' /*webpackChunkName:'Clock'*/));
const Context = lazy(() => import('./Context' /*webpackChunkName:'Context'*/));
const Redux = lazy(() => import('./redux' /*webpackChunkName:'redux'*/));
const Graphql = lazy(() => import('./graphql' /*webpackChunkName:'graphql'*/));
const Mutations = lazy(() => import('./mutations' /*webpackChunkName:'mutations'*/));  //ชื่อ name.chunk
const Post = lazy(() => import('./Post' /*webpackChunkName:'Post'*/));  //ชื่อ name.chunk








function UserProFile(props) {
    const { match } = props
    const { params } = match
    return <>
        <h1>AAA</h1>
        <pre>
            {JSON.stringify(params)}
        </pre>
    </>
}
export default function Routes() {
    return <>
        <Suspense fallback={<h1 className="title">Loading ...</h1>} >
            <Switch>
                {/* <Route exact path="/Home" component={userReducer} />*/}
            <Route exact path="/" component={()=> <h1>GO Login</h1>} />
                {/* <Route exact path="/user" component={Users} />s */}
                <Route exact path="/userreducer" component={userReducer} />
                <Route exact path="/Timer" component={Timer} />
                <Guard  path="/Clock" component={Clock} />
                <Route exact path="/Context" component={Context} />
                <Route exact path="/mutations" component={Mutations} />

                <Route  path="/Redux" component={Redux} />
                <Route  path="/Graphql" component={Graphql} />



                <Route path="/user/:id" component={UserProFile} />
            </Switch>
        </Suspense>
    </>
}