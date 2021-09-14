import React,{useState} from 'react'
import '../style/right.css'
import Card from './Card'
import { useSelector } from "react-redux";
import {AiOutlineCloseCircle,AiOutlineSearch} from 'react-icons/ai'


function RightBars() {
    const cards = useSelector(state => state.cards.cardStorage)
    const selectStorage = useSelector(state => state.storage.initialData)
    const [input,setInput] = useState('')

    return (
        <div className='rightBar_main' >
            <div className='mask'></div>
            <div className='rightBar_topDetails' >
                <div className='rightBar_input_section' >
                    <AiOutlineSearch className='right_logo_search' />
                    <input onChange={(e)=>setInput(e.target.value)} className='rightInput' placeholder='Search...' type="text" value={input} />
                    {input && <AiOutlineCloseCircle onClick={()=>setInput('')} className='rightBar_close' />}
                </div>
                <h4 className='right_total' > Total : {cards.length} contacts</h4>
           </div>
           {selectStorage.name}
            <div className="card_row">
                {cards.filter(elem=>elem.firstName.toLowerCase().includes(input.toLowerCase()))   
                .map((item)=>{
                    return (
                    <Card key={item.id} item={item}/>
                    )
                })}  
            </div> 
        </div>
    )
}

export default RightBars

