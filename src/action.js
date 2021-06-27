export const incrementCounter = () => {
    return {
        type: 'INCREMENT'
    }
}
export const incrementCounterByValue = (value) => {
    return {
        type: 'INCREMENT_BY_VALUE',
        payload: {
            value
        }
    }
}
// export const asyncIncrement = () => {
//     setTimeout(() => {
//         return {
//             type: 'INCREMENT'
//         }
//     },2000)
// }

export const asyncIncrement = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: 'INCREMENT'
            })
        }, 500)
    }
}