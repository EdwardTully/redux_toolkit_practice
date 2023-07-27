const store = require('./app/store')
const boltsActions = require('./features/bolts/boltsSlice').boltsActions
const nailsAction = require('./features/nails/nailsSlice').nailsActions

console.log('Initial State:', store.getState())

const unSubscribe = store.subscribe(()=>{
    console.log('Updated State:', store.getState())
})

store.dispatch(boltsActions.sold(28))
store.dispatch(nailsAction.sold(75))


unSubscribe()

//at prompt run node index.js
