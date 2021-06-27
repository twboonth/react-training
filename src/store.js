import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
const initialState = {
    counter: 1
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case 'INCREMENT_BY_VALUE':
            return { ...state, counter: state.counter + action.payload.value }
        default:
            return state
    }

}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// export default createStore(reducer, applyMiddleware(thunk))
export default createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
))

// export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())