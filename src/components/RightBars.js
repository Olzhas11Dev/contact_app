import React,{ useState } from 'react'
import '../style/right.css'
import Card from './Card'
import data from '../data'


const myColors = ['#E6783B','#2C8E88','#6B81AD','#2F223D']


function RightBars() {
    return (
        <div className='rightBar_main' >
           <h4>Contacts</h4> 
            <div className="card_row">
                {data.map((item)=>{
                    return (
                    <Card key={item.id} item={item}/>
                    )
                })}  
            </div> 
        </div>
    )
}

export default RightBars

