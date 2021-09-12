import {configureStore} from '@reduxjs/toolkit'
import cardSliceReducer  from './features/cardSlice'  // this is cardSlice.reducer 
import incrementReducer from './features/colorSlice'  // what you safe by defalt
import storageReducer from './features/storageSlice'

const store = configureStore({
    reducer:{
        cards:cardSliceReducer,
        increment:incrementReducer,
        storage:storageReducer
    }
  })

export default store