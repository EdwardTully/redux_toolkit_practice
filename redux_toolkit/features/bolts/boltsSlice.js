const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    boltCount: 1000
}

const boltsSlice = createSlice({
    name: 'bolts',
    initialState: initialState,
    reducers: {
        sold: (state, action)=>{
            state.boltCount -= action.payload
        },
        restock: (state, action)=>{
            state.boltCount += action.payload
        }
    }
})

module.exports = boltsSlice.reducer
module.exports.boltsActions = boltsSlice.actions