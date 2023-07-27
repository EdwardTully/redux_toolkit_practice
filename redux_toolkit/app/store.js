const configureStore = require('@reduxjs/toolkit').configureStore
const boltsReducer = require('../features/bolts/boltsSlice')
const nailsReducer = require('../features/nails/nailsSlice')

const store = configureStore({
    reducer: {
        bolts: boltsReducer,
        nails: nailsReducer,
    }
})

module.exports = store