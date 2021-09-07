import { createSlice } from '@reduxjs/toolkit'

const myColors = ['#E6783B','#2C8E88','#6B81AD','#2F223D']

const initialState = {
    initialNum: 0,
    getColors : '#E6783B'
}

const colorSlice = createSlice({
    name: 'increment',
    initialState,
    reducers: {
        increment: (state,action)=>{
            state.initialNum += action.payload            //through action payload you have 1 onClick={()=>dispatch(increment(1))}
            if(state.initialNum===myColors.length){
                state.initialNum = 0
            }
            state.getColors = myColors[state.initialNum]
        }
    }
});

export const {increment} = colorSlice.actions
export default colorSlice.reducer