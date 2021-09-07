import {configureStore} from '@reduxjs/toolkit'
import cardSliceReducer  from './features/cardSlice'  // this is cardSlice.reducer 

const store = configureStore({
    reducer:{
        cards:cardSliceReducer
    }
  })

export default store