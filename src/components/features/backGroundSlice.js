import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    changeBgStatus: false
}

const backGroundSlice = createSlice({
    name: 'mask',
    initialState,
    reducers: {
        makeMask:(state,action) =>{
            state.changeBgStatus = action.payload
        }
    }
});

export const {makeMask} = backGroundSlice.actions
export default backGroundSlice.reducer