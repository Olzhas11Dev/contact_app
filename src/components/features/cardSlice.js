import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cardStorage:[
        {
            id:1,
            firstName : "Nathan",
            email: 'Nathan_dev@gmail.com',
            mobile: '02102557404',
            address:'One Hunga 13a/2',
            note: "Mission Ready Student",
            color:'#E6783B'
        },
        {
            id:2,
            firstName : "Goretti",
            email: 'Goretti11_smile@gmail.com',
            mobile: '07502557404',
            address:'North Shore,NorthCote 78/3',
            note: "Otago Polytechnic",
            color: '#2C8E88'
        }, 
        {
            id:3,
            firstName : "Keanu",
            email: 'Keaunu93_dev@gmail.com',
            mobile: '02102557404',
            address:'Remuero 71/e4',
            note: "Mission Ready Student",
            color: '#6B81AD'
        },
        {
            id:4,
            firstName : "Ching Ha",
            email: 'Ching_Ha_@gmail.com',
            mobile: '07502557404',
            address:'North Shore,NorthCote 78/3',
            note: "Otago Polytechnic",
            color: '#2F223D'
        }, 
        {
            id:5,
            firstName : "Serge",
            email: 'Serge@gmail.com',
            mobile: '02232557774',
            address:'Wellington CBD',
            note: "Mission Ready Student",
            color: '#E6783B'
        }
    ]
}

const cardSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        addToCard : (state,action) =>{
            state.cardStorage.push(action.payload)              //state=InitialState 
        }
    }
});

export const { addToCard } = cardSlice.actions
export default cardSlice.reducer   // to send to store

// id: new Date().toISOString(),
// firstName : action.payload.name,
// email: action.payload,
// mobile: action.payload,
// address: action.payload,
// note: action.payload,
// color:action.payload