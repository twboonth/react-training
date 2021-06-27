import { connect } from 'react-redux'
import { asyncIncrement,incrementCounterByValue,incrementCounter } from './action'

function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps)(function Redux(props) {
    const { counter,dispatch } = props
    return <>
        <h1>Redux {counter}</h1>
        <button className="button" onClick={() =>dispatch(incrementCounter())}>INCREMENT</button>
        <button className="button" onClick={() =>dispatch(incrementCounterByValue(9))}>INCREMENTValue</button>
        <button className="button" onClick={() =>dispatch(asyncIncrement())}>async</button>


    </>
})

// export default connect(mapStateToProps)(Redux)