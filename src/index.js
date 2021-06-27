import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './client'
// class App extends React.Component {
//     render() {
//         return <>
//             <div>
//                 <h1>Hello world</h1>
//             </div>
//         </>
//     }
// }
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'))