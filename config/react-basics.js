const redux = require('redux');
createStore = redux.createStore
//reducer
const initState = {
    counter = 0
}
const rootReducer = (state = initState, action) => {
    return state
}
// store
const store = createStore(rootReducer);
console.log(store.getState())
