const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    poundsOfNails: 2000
}
const nailsSlice = createSlice({
    name: 'nails',
    initialState: initialState,
    reducers: {
        sold: (state, action)=>{
            state.poundsOfNails -= action.payload
        },
        restock: (state, action)=>{
            state.poundsOfNails += action.payload
        }

    }
})

module.exports = nailsSlice.reducer
module.exports.nailsActions = nailsSlice.actions