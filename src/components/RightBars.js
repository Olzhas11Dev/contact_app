import React from 'react'
import '../style/right.css'
import Card from './Card'
// import data from '../data'
import { useSelector } from "react-redux";




function RightBars() {
    const cards = useSelector(state => state.cards.cardStorage)

    return (
        <div className='rightBar_main' >
            <div className='rightBar_topDetails' >
                <h4>Contacts</h4> 
                <h4 className='right_total' > Total : {cards.length} contacts</h4>
           </div>
            <div className="card_row">
                {cards.map((item)=>{
                    return (
                    <Card key={item.id} item={item}/>
                    )
                })}  
            </div> 
        </div>
    )
}

export default RightBars

