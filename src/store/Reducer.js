

const initialState = {
    counter: 0
}


const reducer = (state = initialState, action) => {
    // if(action.type === "INCREMENT") {
    //     return {counter: state.counter + 1}
    // }
    // else if(action.type === "DECREMENT") {
    //     return {counter: state.counter - 1}
    // }
    // else if(action.type === "ADD" && action.value === 5) {
    //     return {counter: state.counter + action.value}
    // }
    // else if(action.type === "SUSTRACT" && action.value === 5) {
    //     return {counter: state.counter - action.value}
    // }
    return state;
}
export default reducer;