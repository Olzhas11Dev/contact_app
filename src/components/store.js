import {configureStore} from '@reduxjs/toolkit'
import cardSliceReducer  from './features/cardSlice'  // this is cardSlice.reducer 
import incrementReducer from './features/colorSlice'  // what you safe by defalt
const store = configureStore({
    reducer:{
        cards:cardSliceReducer,
        increment:incrementReducer
    }
  })

export default store