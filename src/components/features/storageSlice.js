import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialData:[]
}

const storageSlice = createSlice({
    name: "local",
    initialState,
    reducers: {
        addToLocal: (state,action) =>{
            state.initialData =  action.payload
        }
    }
});

export const { addToLocal } = storageSlice.actions
export default storageSlice.reducer